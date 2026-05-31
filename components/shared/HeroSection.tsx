import ProductCard from '@/components/shared/ProductCard'
import HeroBanner from '@/components/shared/HeroBanner'

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-x-3 gap-y-2 max-w-7xl mx-auto px-4 py-6 lg:h-125">
      {/* Carousel — first in DOM so it stacks first on mobile */}
      <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 h-full">
        <HeroBanner />
      </div>

      {/* Top-left */}
      <div className="lg:col-start-1 lg:row-start-1 h-full">
        <ProductCard
          badge="Best 2026"
          subtitle="LED Watch"
          about="Premium"
          title="Orange RTX"
          status="Featured Deals"
          price={39.99}
          originalPrice={59.99}
          image="/design/smartwatch.png"
          bgColor="bg-orange-50"
          href="#"
        />
      </div>

      {/* Top-right */}
      <div className="lg:col-start-3 lg:row-start-1 h-full">
        <ProductCard
          badge="Gamer Mode"
          subtitle="Wireless Controller"
          about="High Quality"
          title="ATX AXE Series"
          status="Price just"
          price={299.99}
          rotate="rotate-17"
          image="/design/controller.png"
          bgColor="bg-blue-50"
          href="#"
        />
      </div>

      {/* Bottom-left */}
      <div className="lg:col-start-1 lg:row-start-2 h-full">
        <ProductCard
          badge="Best Selling"
          subtitle="Wireless Earphones"
          about="High Quality"
          title="JBL-Wave Buds"
          status="Price just"
          price={59.99}
          image="/design/earphones.png"
          bgColor="bg-gray-100"
          href="#"
        />
      </div>

      {/* Bottom-right */}
      <div className="lg:col-start-3 lg:row-start-2 h-full">
        <ProductCard
          subtitle="Bluetooth Headphones"
          about="Wireless"
          title="Sony WH-CH720N"
          status="Discounted"
          price={199.99}
          originalPrice={299.99}
          image="/design/sonyheadphones.png"
          bgColor="bg-pink-50"
          href="#"
        />
      </div>
    </section>
  )
}