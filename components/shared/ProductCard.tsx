import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  badge?: string
  title: string
  subtitle?: string
  about?: string
  status?: string
  price: number
  rotate?: string
  originalPrice?: number
  image: string
  bgColor: string
  href: string
}

export default function ProductCard({
  badge,
  title,
  subtitle,
  about,
  status,
  price,rotate,
  originalPrice,
  image,
  bgColor,
  href,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className={`relative flex flex-1 justify-between overflow-hidden rounded-xl shadow-sm p-4 h-full ${bgColor}`}
    >
      <div className="relative z-10 space-y-15">
        <div className="relative z-10 space-y-0.5">
          <p className="text-xs text-gray-400 font-medium">{badge}</p>
          <h3 className="text-sm font-bold text-gray-900 leading-snug">{subtitle}</h3>
          <p className="text-xs text-gray-400">{about}</p>
        </div>

        <div className="relative z-10 space-y-0.5">
          <h3 className="text-lg font-bold text-gray-900 leading-snug">{title}</h3>
          <p className="text-xs text-gray-400">{status}</p>
          <div className="flex items-baseline gap-1.5 pt-1">
              <span className="text-xl font-bold text-orange-500">${price.toFixed(2)}</span>
              {originalPrice && (
                <span className="text-xs text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
              )}
          </div>
        </div>
      </div>

      <div className="relative bottom-0 right-0 w-50 h-50">
        <Image
          src={image}
          alt={title}
          fill
          sizes="200px"
          className={`object-contain  ${rotate}`}
        />
      </div>
    </Link>
  )
}