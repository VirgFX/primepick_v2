"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ShoppingCart, Search, Menu, X } from "lucide-react";
import { AccountLink } from "@/components/shared/AccountLink";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header>
      {/* Top bar — hidden on mobile */}
      <div className="hidden lg:block bg-zinc-950 text-white text-[13px] py-2">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 hover:text-zinc-300 transition-colors">
              English <ChevronDown className="w-3 h-3" />
            </button>
            <span className="text-zinc-600">|</span>
            <button className="flex items-center gap-1 hover:text-zinc-300 transition-colors">
              USD $ <ChevronDown className="w-3 h-3" />
            </button>
            <span className="text-zinc-600">|</span>
            <span>Free Shipping On All Orders Over $100</span>
          </div>
          <div className="flex items-center gap-4">
            <AccountLink />
            <span className="text-zinc-600">|</span>
            <Link href="#" className="hover:text-zinc-300 transition-colors">Contact</Link>
            <span className="text-zinc-600">|</span>
            <Link href="#" className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors">
              <ShoppingCart className="w-4 h-4" />
              Items
            </Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-zinc-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl font-(--font-geist)">PrimePick</span>
            <span className="bg-yellow-400 text-black text-sm font-semibold px-3 py-0.5 rounded-full leading-6">
              Store
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px]">
            <Link href="/" className="hover:text-zinc-300 transition-colors">Home</Link>
            <button className="flex items-center gap-1 hover:text-zinc-300 transition-colors">
              Our Store <ChevronDown className="w-4 h-4" />
            </button>
            <Link href="/deals" className="hover:text-zinc-300 transition-colors">Deals</Link>
            <button className="flex items-center gap-1 hover:text-zinc-300 transition-colors">
              Latest <ChevronDown className="w-4 h-4" />
            </button>
          </nav>

          {/* Desktop search */}
          <div className="hidden lg:flex items-center bg-white rounded-full overflow-hidden w-72">
            <input
              type="text"
              placeholder="Search product here..."
              className="flex-1 px-4 py-2.5 text-black text-sm outline-none bg-transparent placeholder:text-zinc-400"
            />
            <button className="bg-yellow-400 px-4 py-3 rounded-r-full flex items-center justify-center hover:bg-yellow-300 transition-colors">
              <Search className="w-4 h-4 text-black" />
            </button>
          </div>
          {/* Mobile: cart + hamburger */}
          <div className="flex lg:hidden items-center gap-4 ml-auto">
            <Link href="#" className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="hover:text-zinc-300 transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-zinc-900 border-t border-zinc-800 px-4 pb-4 pt-3 flex flex-col gap-4">
            {/* Mobile search */}
            <div className="flex items-center bg-white rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search product here..."
                className="flex-1 px-4 py-2.5 text-black text-sm outline-none bg-transparent placeholder:text-zinc-400"
              />
              <button className="bg-yellow-400 px-4 py-2.5 rounded-r-full flex items-center justify-center hover:bg-yellow-300 transition-colors">
                <Search className="w-4 h-4 text-black" />
              </button>
            </div>

            {/* Mobile nav links */}
            <nav className="flex flex-col gap-3 text-[15px]">
              <Link href="/" className="hover:text-zinc-300 transition-colors" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <button className="flex items-center gap-1 hover:text-zinc-300 transition-colors text-left">
                Our Store <ChevronDown className="w-4 h-4" />
              </button>
              <Link href="/deals" className="hover:text-zinc-300 transition-colors" onClick={() => setMobileOpen(false)}>
                Deals
              </Link>
              <button className="flex items-center gap-1 hover:text-zinc-300 transition-colors text-left">
                Latest <ChevronDown className="w-4 h-4" />
              </button>
            </nav>

            {/* Mobile top-bar links */}
            <div className="flex flex-col gap-3 text-[15px] border-t border-zinc-800 pt-3">
              <Link href="#" className="hover:text-zinc-300 transition-colors" onClick={() => setMobileOpen(false)}>
                My Account
              </Link>
              <Link href="#" className="hover:text-zinc-300 transition-colors" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}