'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { FEATURED_DEALS_HERO, FEATURED_DEALS_SMALL } from '@/public/assets'

// Fixed sale end date
const SALE_END = new Date('2026-06-05T00:00:00')

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now())
  return {
    days: Math.floor(diff / 86_400_000),
    hrs:  Math.floor((diff % 86_400_000) / 3_600_000),
    mins: Math.floor((diff % 3_600_000)  / 60_000),
    secs: Math.floor((diff % 60_000)     / 1_000),
  }
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function TimeBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white text-gray-900 font-bold text-xl w-11 h-11 rounded-lg flex items-center justify-center shadow-sm border border-gray-200 tabular-nums">
        {value}
      </div>
      <span className="text-[9px] font-semibold text-gray-500 uppercase tracking-widest mt-1">{label}</span>
    </div>
  )
}

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i <= rating ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'}`}
        />
      ))}
      <span className="text-xs text-gray-500 ml-0.5">({count})</span>
    </div>
  )
}

export default function FeatureDeals() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(SALE_END))
  const [activeVariant, setActiveVariant] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(SALE_END)), 1000)
    return () => clearInterval(id)
  }, [])

  const hero = FEATURED_DEALS_HERO

  return (
    <section className="py-10 bg-[#e8eaf6]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-7">
          <h2 className="text-2xl font-bold text-gray-900">Today&apos;s Featured Deals</h2>

          {/* Sale timer */}
          <div className="flex flex-col items-center gap-2">
            <span className="bg-amber-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full leading-none">
              Sale Ends In:
            </span>
            <div className="flex items-end gap-1.5">
              <TimeBox value={pad(timeLeft.days)} label="Days" />
              <span className="text-xl font-bold text-gray-700 mb-3.5">:</span>
              <TimeBox value={pad(timeLeft.hrs)}  label="Hrs"  />
              <span className="text-xl font-bold text-gray-700 mb-3.5">:</span>
              <TimeBox value={pad(timeLeft.mins)} label="Mins" />
            </div>
          </div>

          <Link
            href="#"
            aria-label="View all products"
            className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap"
          >
            View All Products →
          </Link>
        </div>

        {/* Cards layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* ── Big hero card ── */}
          <div className="relative bg-white rounded-2xl p-6 flex gap-20 shadow-sm">
            {/* Discount badge */}
            <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded">
              -{hero.discount}%
            </span>

            {/* Left column: main image + thumbnails */}
            <div className="flex flex-col items-center gap-3 shrink-0">
              <div className="relative w-52 h-52 mt-4">
                <Image
                  src={hero.variants[activeVariant].image}
                  alt={`${hero.name} – ${hero.variants[activeVariant].colorName}`}
                  fill
                  sizes="208px"
                  className="object-contain p-4"
                  priority
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2">
                {hero.variants.map((v, i) => (
                  <button
                    key={v.colorName}
                    onClick={() => setActiveVariant(i)}
                    aria-label={`Select ${v.colorName} colour`}
                    className={`relative w-13 h-13 rounded-xl border-2 overflow-hidden transition-all duration-200 ${
                      i === activeVariant
                        ? 'border-[#FD8F21] shadow-sm'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <Image
                      src={v.image}
                      alt={v.colorName}
                      fill
                      sizes="52px"
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right column: product details */}
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">
                {hero.category}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-2">
                {hero.name}
              </h3>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-bold text-[#E9442E]">${hero.salePrice}</span>
                <span className="text-sm text-gray-400 line-through">${hero.originalPrice}</span>
              </div>

              <StarRating rating={hero.rating} count={hero.reviewCount} />

              <ul className="mt-3 space-y-1.5">
                {hero.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex items-center gap-2 flex-wrap">
                <span className="text-xs text-gray-500">Available Color</span>
                <div className="flex gap-1.5">
                  {hero.colors.map((c) => (
                    <span
                      key={c.name}
                      title={c.name}
                      className="w-4 h-4 rounded-full border border-gray-300 shadow-sm"
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Small cards 2×2 ── */}
          <div className="grid grid-cols-2 gap-4">
            {FEATURED_DEALS_SMALL.map((p) => (
              <div
                key={p.id}
                className="relative bg-white rounded-2xl p-4 flex gap-3 shadow-sm"
              >
                {/* Discount badge */}
                <span className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded leading-none">
                  -{p.discount}%
                </span>

                {/* Left: product image */}
                <div className="relative w-24 h-24 shrink-0 self-center">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="96px"
                    className="object-contain"
                  />
                </div>

                {/* Right: details */}
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-widest block">
                      {p.category}
                    </span>
                    <h4 className="text-sm font-bold text-gray-900 leading-tight mt-0.5 line-clamp-2">
                      {p.name}
                    </h4>

                    <div className="flex items-baseline gap-1.5 mt-1.5">
                      <span className="text-sm font-bold text-[#E9442E]">${p.salePrice}</span>
                      <span className="text-xs text-gray-400 line-through">${p.originalPrice}</span>
                    </div>

                    <div className="mt-1">
                      <StarRating rating={p.rating} count={p.reviewCount} />
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                    <span className="text-[9px] text-gray-500">Available Color</span>
                    <div className="flex gap-1">
                      {p.colors.map((c) => (
                        <span
                          key={c.name}
                          title={c.name}
                          className="w-3.5 h-3.5 rounded-full border border-gray-300 shadow-sm"
                          style={{ backgroundColor: c.hex }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
