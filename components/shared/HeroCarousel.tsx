'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  { id: 0, bgText: 'PRO MAX', headline: 'Find The Best iPhone for You' },
  { id: 1, bgText: 'PRO MAX', headline: 'Power Meets Elegance' },
  { id: 2, bgText: 'PRO MAX', headline: 'Built For The Bold' },
] as const

const colors = [
  { id: 'dark', className: 'bg-zinc-800' },
  { id: 'orange', className: 'bg-orange-400' },
  { id: 'white', className: 'bg-white border border-gray-300' },
] as const

type ColorId = (typeof colors)[number]['id']

export default function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeColor, setActiveColor] = useState<ColorId>('dark')

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-b from-sky-100 to-cyan-50 h-full min-h-90">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === activeSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Large background text */}
          <span className="absolute inset-0 flex items-center justify-center text-[140px] font-black text-white/30 select-none pointer-events-none leading-none tracking-widest">
            {slide.bgText}
          </span>

          {/* Back phone — slightly behind and rotated */}
          <div className="absolute right-8 top-8 w-36 h-64 rotate-6 opacity-60">
            <Image
              src="/design/Iphone17-pro.png"
              alt="iPhone"
              fill
              sizes="144px"
              className="object-contain"
            />
          </div>

          {/* Front phone — main */}
          <div className="absolute right-20 top-2 w-40 h-72">
            <Image
              src="/design/Iphone17-pro.png"
              alt="iPhone"
              fill
              sizes="160px"
              className="object-contain"
            />
          </div>

          {/* Color selector */}
          <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col gap-2 z-10">
            {colors.map(c => (
              <button
                key={c.id}
                aria-label={`Select ${c.id} color`}
                onClick={() => setActiveColor(c.id)}
                className={`w-5 h-5 rounded-sm ${c.className} transition-all ${
                  activeColor === c.id ? 'ring-2 ring-offset-1 ring-gray-400' : ''
                }`}
              />
            ))}
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-10 left-5 z-10">
            <h2 className="text-xl font-bold text-gray-900 leading-tight max-w-[180px]">
              {slide.headline}
            </h2>
            <button className="mt-3 bg-zinc-900 text-white text-xs px-5 py-2 rounded-full hover:bg-zinc-700 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      ))}

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActiveSlide(i)}
            className={`rounded-full transition-all duration-300 ${
              i === activeSlide ? 'w-5 h-2 bg-zinc-900' : 'w-2 h-2 bg-zinc-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}