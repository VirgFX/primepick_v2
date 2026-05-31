#!/usr/bin/env node
/**
 * PrimePick driver — headless Playwright script for agent use.
 *
 * Usage:
 *   node .claude/skills/run-primepick-v2/driver.mjs [command] [args...]
 *
 * Commands:
 *   screenshot [url]    Navigate to url (default: /) and screenshot
 *   smoke               Full smoke test: home, sign-in, product cards
 *
 * Screenshots land in .claude/skills/run-primepick-v2/shots/
 * Start the dev server first: npm run dev
 */

import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const BASE_URL = process.env.NEXT_URL ?? 'http://localhost:3000';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SHOTS_DIR = path.join(__dirname, 'shots');

await mkdir(SHOTS_DIR, { recursive: true });

const [, , cmd = 'smoke', ...rest] = process.argv;

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const page = await ctx.newPage();

async function shot(name) {
  const file = path.join(SHOTS_DIR, `${name}.png`);
  await page.screenshot({ path: file, fullPage: false });
  console.log(`screenshot → ${file}`);
  return file;
}

async function nav(url) {
  const full = url.startsWith('http') ? url : `${BASE_URL}${url}`;
  console.log(`nav ${full}`);
  await page.goto(full, { waitUntil: 'networkidle', timeout: 30_000 });
}

try {
  if (cmd === 'screenshot') {
    const url = rest[0] ?? '/';
    await nav(url);
    const name = url === '/' ? 'home' : url.replace(/\//g, '-').replace(/^-/, '');
    await shot(name);

  } else if (cmd === 'smoke') {
    // 1. Homepage
    await nav('/');
    await page.waitForSelector('text=PrimePick', { timeout: 15_000 });
    await shot('home');

    // 2. Check product cards visible
    const cards = await page.locator('text=Orange RTX').count();
    console.log(`product cards visible: ${cards > 0 ? 'yes' : 'no (might still be loading)'}`);

    // 3. Sign-in page
    await nav('/sign-in');
    await page.waitForSelector('text=Sign in', { timeout: 10_000 });
    await shot('sign-in');

    // 4. Sign-up page
    await nav('/sign-up');
    await shot('sign-up');

    // 5. Console errors
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await nav('/');
    if (errors.length) {
      console.warn('console errors:', errors);
    } else {
      console.log('no JS errors on homepage');
    }

    console.log('smoke test passed');

  } else {
    console.error(`unknown command: ${cmd}`);
    console.error('commands: screenshot [url]  smoke');
    process.exit(1);
  }
} finally {
  await browser.close();
}