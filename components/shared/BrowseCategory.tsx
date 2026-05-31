import Link from 'next/link'
import Image from 'next/image'
import { CATEGORIES } from '@/public/assets'

function CategoryCard({
  name,
  image,
  href,
  sizes,
  className = '',
}: {
  name: string
  image: string
  href: string
  sizes: string
  className?: string
}) {
  return (
    <Link
      href={href}
      aria-label={`Browse ${name}`}
      className={`relative overflow-hidden rounded-2xl bg-gray-100 block transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      <Image
        src={image}
        alt={name}
        fill
        sizes={sizes}
        className="object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/65 to-transparent" />
      <span className="absolute bottom-3 left-4 text-white font-semibold text-sm tracking-wide drop-shadow">
        {name}
      </span>
    </Link>
  )
}

export default function BrowseCategory() {
  const [phone, camera, headphone, watch, desktop, controller] = CATEGORIES

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-3 lg:h-[520px]">
          {/* Hero — Phone (spans 3 rows on lg) */}
          <CategoryCard
            name={phone.name}
            image={phone.image}
            href="#"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="sm:col-span-2 lg:col-span-1 lg:row-span-3 min-h-48"
          />

          {/* Camera */}
          <CategoryCard
            name={camera.name}
            image={camera.image}
            href="#"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22vw"
            className="min-h-40 lg:col-start-2 lg:row-start-1"
          />

          {/* Headphones */}
          <CategoryCard
            name={headphone.name}
            image={headphone.image}
            href="#"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22vw"
            className="min-h-40 lg:col-start-3 lg:row-start-1"
          />

          {/* Smartwatch */}
          <CategoryCard
            name={watch.name}
            image={watch.image}
            href="#"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22vw"
            className="min-h-40 lg:col-start-2 lg:row-start-2"
          />

          {/* Desktop */}
          <CategoryCard
            name={desktop.name}
            image={desktop.image}
            href="#"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22vw"
            className="min-h-40 lg:col-start-3 lg:row-start-2"
          />

          {/* Controller — wide card spanning 2 cols on lg */}
          <CategoryCard
            name={controller.name}
            image={controller.image}
            href="#"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 45vw"
            className="sm:col-span-2 lg:col-start-2 lg:col-span-2 lg:row-start-3 min-h-40"
          />
        </div>
      </div>
    </section>
  )
}