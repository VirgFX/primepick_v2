import HeroSection from '@/components/shared/HeroSection'
import TrustedBrands from '@/components/shared/TrustedBrands'
import BrowseCategory from '@/components/shared/BrowseCategory'
import FeatureDeals from '@/components/shared/FeatureDeals'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedBrands />
      <BrowseCategory />
      <FeatureDeals />
    </main>
  )
}