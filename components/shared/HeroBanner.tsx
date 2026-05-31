'use client'

import { useState } from 'react'
import Image from 'next/image'

const colors = [
  { id: 'dark',   swatch: 'bg-slate-700',                    image: '/design/Iphone17-pro.png' },
  { id: 'orange', swatch: 'bg-orange-400',                   image: '/design/Iphone17-orange.png' },
  { id: 'white',  swatch: 'bg-white border border-gray-300', image: '/design/Iphone17-silver.png' },
] as const

type ColorId = (typeof colors)[number]['id']

export default function HeroBanner() {
  const [activeColor, setActiveColor] = useState<ColorId>('dark')

  const activeImage = colors.find(c => c.id === activeColor)!.image

  return (
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-blue-200 to-slate-200 h-full min-h-90">
      {/* PRO — large background text, left */}
      <span className="absolute top-4 px-2 text-[110px] font-black text-black/29 select-none pointer-events-none leading-none tracking-widest">
        PRO
      </span>

      {/* MAX — background text, right */}
      <span className="absolute right-3 top-[20%] text-5xl font-black text-black/29 select-none pointer-events-none leading-none tracking-widest">
        MAX
      </span>

      {/* iPhone — centered */}
      <div className="absolute inset-x-0 top-[2%] mx-auto w-56 h-[82%]">
        <Image src={activeImage} alt="iPhone" fill sizes="224px" className="object-contain" />
      </div>

      {/* Color selector */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col gap-2 z-10">
        {colors.map(c => (
          <button
            key={c.id}
            aria-label={`Select ${c.id} color`}
            onClick={() => setActiveColor(c.id)}
            className={`w-5 h-5 rounded-sm ${c.swatch} transition-all ${
              activeColor === c.id ? 'ring-2 ring-offset-1 ring-gray-500' : ''
            }`}
          />
        ))}
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-8 left-5 z-10">
        <h2 className="text-2xl font-black text-gray-900 leading-tight">
          Find The Best
        </h2>
        <p className="text-lg font-medium text-gray-700 leading-tight">iPhone for You</p>
        <button className="mt-3 bg-blue-600 text-white text-xs px-5 py-2 rounded-full hover:bg-blue-700 transition-colors">
          Shop Now
        </button>
      </div>
    </div>
  )
}