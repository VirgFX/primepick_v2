'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CATEGORIES } from '@/public/assets'

const DOT_COUNT = 3

export default function BrowseCategory() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeDot, setActiveDot] = useState(0)

  function scroll(dir: 'prev' | 'next') {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: dir === 'next' ? track.clientWidth / 2 : -(track.clientWidth / 2), behavior: 'smooth' })
  }

  function onScroll() {
    const track = trackRef.current
    if (!track) return
    const maxScroll = track.scrollWidth - track.clientWidth
    if (maxScroll <= 0) return
    setActiveDot(Math.round((track.scrollLeft / maxScroll) * (DOT_COUNT - 1)))
  }

  function scrollToDot(i: number) {
    const track = trackRef.current
    if (!track) return
    const max = track.scrollWidth - track.clientWidth
    track.scrollTo({ left: (max * i) / (DOT_COUNT - 1), behavior: 'smooth' })
    setActiveDot(i)
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Browse by Categories</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('prev')}
              aria-label="Previous categories"
              className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>
            <button
              onClick={() => scroll('next')}
              aria-label="Next categories"
              className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        >
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href="#"
              aria-label={`Browse ${cat.name}`}
              className="snap-start shrink-0 w-44 rounded-2xl bg-orange-50 overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300 block"
            >
              <div className="relative h-40 p-3">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="176px"
                  className="object-contain object-center p-3"
                />
              </div>
              <p className="px-3 pt-2 pb-3 text-sm font-medium text-gray-800">{cat.name}</p>
            </Link>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-5">
          {Array.from({ length: DOT_COUNT }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToDot(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeDot ? 'w-6 bg-zinc-800' : 'w-2 bg-zinc-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
