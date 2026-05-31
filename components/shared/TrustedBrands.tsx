import Image from 'next/image'
import { BRAND_LOGOS } from '@/public/assets'

const STAGGER = [
  'stagger-0', 'stagger-1', 'stagger-2', 'stagger-3', 'stagger-4',
  'stagger-5', 'stagger-6', 'stagger-7', 'stagger-8', 'stagger-9',
] as const

export default function TrustedBrands() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-8">
          Shop Top Brands
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {BRAND_LOGOS.map((logo, index) => (
            <div
              key={logo.name}
              className="flex items-center justify-center p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={100}
                height={40}
                className={`object-contain h-8 w-auto animate-breathe ${STAGGER[index]}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}