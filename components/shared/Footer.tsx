import Link from 'next/link'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import { SHOP_LINKS, SUPPORT_LINKS, PAYMENT_METHODS, SOCIAL_LINKS } from '@/constant'

function FooterLinkGroup({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map(link => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group flex items-center gap-1.5 text-zinc-400 text-sm hover:text-yellow-400 transition-colors duration-200"
            >
              <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer>
      {/* Yellow top accent */}
      <div className="h-0.5 bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-500" />

      {/* Newsletter band */}
      <div className="bg-zinc-800 border-b border-zinc-700/60">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-lg leading-tight">
              Exclusive deals. First access. No spam.
            </p>
            <p className="text-zinc-400 text-sm mt-0.5">
              Join 40,000+ gadget enthusiasts getting weekly drops.
            </p>
          </div>
          <form className="flex w-full sm:w-auto items-center bg-zinc-900 rounded-full overflow-hidden border border-zinc-700 focus-within:border-yellow-400 transition-colors">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 sm:w-64 px-5 py-3 bg-transparent text-sm text-white placeholder:text-zinc-500 outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe to newsletter"
              className="bg-yellow-400 text-black text-sm font-semibold px-5 py-3 hover:bg-yellow-300 transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white font-(--font-geist)">PrimePick</span>
              <span className="bg-yellow-400 text-black text-xs font-semibold px-2.5 py-0.5 rounded-full">
                Store
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-xs">
              Your destination for premium tech — phones, laptops, audio, and gaming gear from the world&apos;s top brands. Delivered fast.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-md bg-zinc-800 text-zinc-400 hover:bg-yellow-400 hover:text-black transition-all duration-200"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>

          {/* Shop links */}
          <FooterLinkGroup title="Shop" links={SHOP_LINKS} />

          {/* Support links */}
          <FooterLinkGroup title="Support" links={SUPPORT_LINKS} />

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400 text-sm">
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>123 Tech Plaza, Makati City, Metro Manila, Philippines</span>
              </li>
              <li>
                <Link
                  href="tel:+639171234567"
                  className="flex items-center gap-3 text-zinc-400 text-sm hover:text-yellow-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                  +63 917 123 4567
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:support@primepick.store"
                  className="flex items-center gap-3 text-zinc-400 text-sm hover:text-yellow-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                  support@primepick.store
                </Link>
              </li>
            </ul>

            {/* Hours */}
            <div className="mt-6 rounded-lg bg-zinc-800 border border-zinc-700/50 px-4 py-3">
              <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Support Hours</p>
              <p className="text-white text-sm font-medium">Mon – Sat, 9AM – 7PM</p>
              <p className="text-zinc-500 text-xs mt-0.5">Philippine Standard Time (UTC+8)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-xs">
            © {new Date().getFullYear()} PrimePick Store. All rights reserved.
          </p>

          {/* Payment chips */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-end">
            {PAYMENT_METHODS.map(method => (
              <span
                key={method}
                className="px-2.5 py-1 text-[11px] font-semibold text-zinc-400 bg-zinc-800 border border-zinc-700 rounded"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}