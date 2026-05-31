# AGENT.md — Project Stack Reference

> This file is the source of truth for the tech stack used in this project.
> AI agents and tools should always refer to this file before making decisions.

---

## 📦 Project Overview

- **Project Type:** Ecommerce Website
- **Niche:** Gadgets (Phones, Desktops, Laptops, Accessories)
- **Developer:** Solo Developer
- **Architecture:** Full-Stack Web Application

---

## 🛠️ Tech Stack (11 Total)

| # | Technology | Version | Role |
|---|---|---|---|
| 1 | **Next.js** | 16.2.4 | Core framework — routing, SSR, API routes, server actions |
| 2 | **TypeScript** | 5.8 | Language — type safety across the entire codebase |
| 3 | **Tailwind CSS** | 4.1.18 | Styling — utility-first CSS framework |
| 4 | **Prisma ORM** | 7.8.0 | Database layer — schema management, migrations, queries |
| 5 | **Neon PostgreSQL** | Latest | Database — serverless PostgreSQL hosting |
| 6 | **Neon Auth** | Latest | Authentication — login, register, session management |
| 7 | **Shadcn/UI** | Latest (CLI-managed) | UI Components — pre-built accessible components |
| 8 | **Zustand** | 5.0.13 | State management — shopping cart, wishlist, global state |
| 9 | **Stripe** | 22.1.0 | Payments — checkout, payment processing |
| 10 | **Cloudinary** | 2.10.0 | Image storage — product image uploads and optimization |
| 11 | **Zod** | 4.4.3 | Validation — form validation, API input validation, type inference |

---

## ⚙️ Default Coding Conventions

Always follow these patterns unless explicitly told otherwise:

- ✅ Use **Next.js App Router** — never use Pages Router
- ✅ Use **functional components** — never class components
- ✅ Use **async/await** — never .then().catch() chains
- ✅ Use **Server Components** by default — only use `"use client"` when necessary
- ✅ Use **Server Actions** for form submissions and mutations
- ✅ Use **Zod** to validate ALL form inputs and API request bodies
- ✅ Use **Prisma** for ALL database operations — no raw SQL unless necessary
- ✅ Use **Zustand** for cart, wishlist, and any global client state
- ✅ Use **Tailwind CSS** for all styling — no separate CSS files unless needed
- ✅ Use **Shadcn/UI** components first before building custom UI from scratch
- ✅ Use **TypeScript** everywhere — no `any` types unless absolutely necessary
- ✅ Use **Cloudinary** for all image uploads — never store images in the database

---

## 🗂️ Recommended Folder Structure

```
/app
  /api              → API routes
  /(auth)           → Login, Register pages
  /(shop)           → Product listing, Product detail pages
  /cart             → Cart page
  /checkout         → Checkout page
  /dashboard        → Admin dashboard (manage products, orders)
  layout.tsx        → Root layout
  page.tsx          → Homepage

/components
  /ui               → Shadcn/UI components
  /shared           → Reusable components (Navbar, Footer, etc.)
  /products         → Product card, product grid, etc.
  /cart             → Cart drawer, cart item, etc.

/lib
  /db.ts            → Prisma client instance
  /validations.ts   → All Zod schemas
  /stripe.ts        → Stripe client instance
  /cloudinary.ts    → Cloudinary config

/store
  /cartStore.ts     → Zustand cart store
  /wishlistStore.ts → Zustand wishlist store

/types
  index.ts          → Shared TypeScript types

/prisma
  schema.prisma     → Database schema
```

---

## 🗄️ Core Database Models (Prisma)

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  orders    Order[]
  createdAt DateTime @default(now())
}

model Product {
  id          String   @id @default(cuid())
  name        String
  description String
  price       Float
  stock       Int
  imageUrl    String
  category    String
  orders      OrderItem[]
  createdAt   DateTime @default(now())
}

model Order {
  id        String      @id @default(cuid())
  userId    String
  user      User        @relation(fields: [userId], references: [id])
  items     OrderItem[]
  total     Float
  status    String      @default("pending")
  createdAt DateTime    @default(now())
}

model OrderItem {
  id        String  @id @default(cuid())
  orderId   String
  order     Order   @relation(fields: [orderId], references: [id])
  productId String
  product   Product @relation(fields: [productId], references: [id])
  quantity  Int
  price     Float
}
```

---

## ✅ Zod Validation Rules

- Validate ALL form data before touching the database
- Validate ALL API route request bodies
- Always use `z.infer<typeof schema>` for TypeScript types — never write types manually for validated data

---

## 💳 Stripe Rules

- Always use **Stripe Checkout Sessions** for payments
- Always use **Stripe Webhooks** to update order status
- Never trust client-side payment confirmation — always verify via webhook

---

## 🖼️ Cloudinary Rules

- All product images must be uploaded to Cloudinary
- Store only the **Cloudinary URL** in the database
- Use Cloudinary transformations for image resizing and optimization

---

## 🔐 Auth Rules

- Use **Neon Auth** for all authentication flows
- Protect all `/dashboard` and `/checkout` routes
- Never expose sensitive user data in client components

---

## 🖼️ Asset Rules

### Centralized Image Imports
- All static local assets (icons, logos, placeholder images) must live in `/public/assets/` — never scattered across component folders
- Import static images through a single barrel file at `/public/assets/index.ts` — never reference `/public` paths directly in components
- All product and user-uploaded images must go through **Cloudinary** — never import them as local static files
- Use Next.js `<Image />` component for all images — never use raw `<img>` tags
- Always include `sizes` prop on every `<Image />` that uses `fill` — required for performance
- Always include `aria-label` on interactive elements (buttons, links, icons) that have no visible text

### Naming Conventions
- **Files & folders:** `kebab-case` — e.g. `product-card.tsx`, `cart-store.ts`, `hero-banner.png`
- **Components:** `PascalCase` — e.g. `ProductCard`, `CartDrawer`
- **Functions & variables:** `camelCase` — e.g. `getProductById`, `cartItems`
- **Zod schemas:** `PascalCase` suffixed with `Schema` — e.g. `CreateProductSchema`, `CheckoutSchema`
- **Zustand stores:** `camelCase` prefixed with `use` and suffixed with `Store` — e.g. `useCartStore`, `useWishlistStore`
- **Types & interfaces:** `PascalCase` — e.g. `Product`, `OrderItem`, `CartState`
- **Constants & env vars:** `SCREAMING_SNAKE_CASE` — e.g. `STRIPE_SECRET_KEY`, `MAX_FILE_SIZE`
- **Cloudinary public IDs:** `kebab-case` scoped by resource type — e.g. `products/iphone-15-pro`, `avatars/user-abc123`
- **API routes:** `kebab-case` path segments — e.g. `/api/product-images`, `/api/order-status`

---

## 🚫 Hard Rules (Never Do These)

- ❌ Never use Pages Router
- ❌ Never store images in PostgreSQL
- ❌ Never use `any` in TypeScript
- ❌ Never skip Zod validation on forms or API routes
- ❌ Never trust client-side data for order totals — always calculate on the server
- ❌ Never use inline styles — always use Tailwind classes
- ❌ Never use Redux — use Zustand instead

---

## 🧠 Behavioral Guidelines (AI Agent Rules)

> These guidelines reduce common LLM coding mistakes.
> **Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

---

### 1. Think Before Coding
**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

---

### 2. Simplicity First
**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

> Ask yourself: *"Would a senior engineer say this is overcomplicated?"* If yes, simplify.

---

### 3. Surgical Changes
**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it — don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

> The test: Every changed line should trace directly to the user's request.

---

### 4. Goal-Driven Execution
**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

> Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

### ✅ These Guidelines Are Working If:
- Fewer unnecessary changes appear in diffs
- Fewer rewrites due to overcomplication
- Clarifying questions come **before** implementation rather than after mistakes

---

*Last updated: May 2026*

---

## 🎨 Frontend Design Skill

> This section defines how AI agents should approach frontend design tasks in this project.
> Apply these guidelines whenever building components, pages, or any visual interface.

### Design Thinking (Before Coding)

Before writing any frontend code, commit to a **bold aesthetic direction**:

- **Purpose** — What problem does this interface solve? Who uses it?
- **Tone** — Pick a clear extreme: brutally minimal, maximalist, retro-futuristic, luxury/refined, playful, editorial, brutalist, art deco, soft/pastel, industrial, etc. Execute it with full commitment.
- **Constraints** — Technical requirements (Next.js App Router, Tailwind CSS, Shadcn/UI, performance, accessibility).
- **Differentiation** — What makes this screen unforgettable? What's the one thing a user will remember?

**Rule:** Choose one clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work — what matters is intentionality, not intensity.

---

### Frontend Aesthetics Guidelines

#### Typography
- Choose fonts that are **beautiful, unique, and interesting** — avoid generic families like Arial, Inter, Roboto, or system fonts.
- Pair a distinctive display font with a refined body font.
- Unexpected, characterful font choices elevate the entire design.

#### Color & Theme
- Commit to a **cohesive aesthetic** using CSS variables for consistency.
- Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- Vary between light and dark themes across different pages/components — never converge on the same palette.

#### Motion & Animation
- Use animations for effects and micro-interactions.
- Prefer CSS-only solutions for lightweight HTML contexts; use **Motion library** for React when available.
- Focus on high-impact moments: one well-orchestrated page load with staggered reveals creates more delight than scattered micro-interactions.
- Leverage scroll-triggering and hover states that genuinely surprise.

#### Spatial Composition
- Use **unexpected layouts** — asymmetry, overlapping elements, diagonal flow, grid-breaking accents.
- Apply generous negative space OR controlled density — never the tepid middle ground.

#### Backgrounds & Visual Details
- Create **atmosphere and depth** rather than defaulting to flat solid backgrounds.
- Apply contextual effects: gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, grain overlays.

---

### ❌ Never Use Generic AI Aesthetics

Avoid these at all times:
- Overused font families: **Inter, Roboto, Arial, Space Grotesk, system fonts**
- Clichéd color schemes: **purple gradients on white backgrounds**
- Predictable layouts and cookie-cutter component patterns
- Design that lacks context-specific character

> No two designs in this project should look the same. Vary fonts, themes, and aesthetics intentionally.

---

### Complexity Should Match Vision

- **Maximalist designs** → elaborate code, extensive animations, rich layered effects.
- **Minimalist/refined designs** → restraint, precision, careful spacing, subtle typography details.
- Elegance comes from executing the vision well — not from adding more.

---

### Tailwind CSS + Shadcn/UI Integration

When applying this skill within the project stack:
- Use **Tailwind CSS utilities** for all custom styling — no separate CSS files.
- Start with **Shadcn/UI** base components, then layer custom aesthetic treatment on top.
- Use `@apply` in a CSS module sparingly only when Tailwind classes become unmanageable for complex animations.
- CSS custom properties (`--variable`) for theme colors must align with Tailwind's config.

---

> Remember: Commit fully to a distinctive vision. Don't hold back on creative choices — this project deserves interfaces that are genuinely memorable.