// Barrel file for all static local assets.
// Components must import from here — never reference /public paths directly.

export const CATEGORIES = [
  { name: 'Smartphones',   slug: 'smartphones',    image: '/category/phone-cat.png'      },
  { name: 'Digital Camera', slug: 'digital-camera', image: '/category/digitalcam-cat.png' },
  { name: 'Headphones',    slug: 'headphones',     image: '/category/headphone-cat.png'  },
  { name: 'Smartwatches',  slug: 'smartwatches',   image: '/category/smartwatch-cat.png' },
  { name: 'Desktop',       slug: 'desktop',        image: '/category/desktop-cat.png'    },
  { name: 'Games & Videos', slug: 'games-videos',  image: '/category/controller-cat.png' },
  { name: 'Earphones',     slug: 'earphones',      image: '/category/Earphones.png'      },
  { name: 'Graphics Card',   slug: 'geforce-rtx',    image: '/category/GeForce RTX.png'    },
  { name: 'VR Goggles',    slug: 'vr-goggles',     image: '/category/VR-goggle.png'      },
] as const

export const BRAND_LOGOS = [
  { name: 'AMD',     src: '/logos/AMD.svg'     },
  { name: 'Apple',   src: '/logos/apple.svg'   },
  { name: 'ASUS',    src: '/logos/asus.svg'    },
  { name: 'Huawei',  src: '/logos/huawei.svg'  },
  { name: 'Intel',   src: '/logos/intel.svg'   },
  { name: 'JBL',     src: '/logos/jbl.svg'     },
  { name: 'Lenovo',  src: '/logos/lenovo.svg'  },
  { name: 'NVIDIA',  src: '/logos/nvidia.svg'  },
  { name: 'Samsung', src: '/logos/samsung.svg' },
  { name: 'Xiaomi',  src: '/logos/xiaomi.svg'  },
] as const

export const FEATURED_DEALS_HERO = {
  id: 'jbl-live-770nc',
  name: 'JBL Live 770NC',
  category: 'Headphone',
  discount: 25,
  salePrice: '199.99',
  originalPrice: '299.99',
  rating: 5,
  reviewCount: 125,
  features: [
    'Wireless Over-Ear Headphones',
    'True Adaptive Noise Cancelling',
    'Up to 65 Hours of Battery Life',
    'Comfort-Fit Fabric Headband',
  ],
  colors: [
    { name: 'Dark Blue', hex: '#1c2b5e' },
    { name: 'Black',     hex: '#1a1a1a' },
    { name: 'Beige',     hex: '#c8a97e' },
    { name: 'Purple',    hex: '#6b3fa0' },
  ],
  variants: [
    { colorName: 'Beige',     image: '/feature-deals-assets/jbl-live-770nc-beige.png'    },
    { colorName: 'Black',     image: '/feature-deals-assets/jbl-live-770nc-black.png'    },
    { colorName: 'Dark Blue', image: '/feature-deals-assets/jbl-live-770nc-darkblue.png' },
    { colorName: 'Purple',    image: '/feature-deals-assets/jbl-live-770nc-purple.png'   },
  ],
} as const

export const FEATURED_DEALS_SMALL = [
  {
    id: 'samsung-galaxy-s26-ultra',
    name: 'Samsung Galaxy S26 Ultra',
    category: 'Smartphone',
    discount: 30,
    salePrice: '926.99',
    originalPrice: '1,322.40',
    rating: 5,
    reviewCount: 96,
    image: '/feature-deals-assets/samsung-galaxy-s26-ultra.png',
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'White', hex: '#e0e0e0' },
    ],
  },
  {
    id: 'apple-watch-series-11',
    name: 'Apple Watch Series 11',
    category: 'Smartwatch',
    discount: 30,
    salePrice: '32.99',
    originalPrice: '46.99',
    rating: 5,
    reviewCount: 30,
    image: '/feature-deals-assets/apple-watch-series-11.png',
    colors: [
      { name: 'Gray',  hex: '#9e9e9e' },
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'White', hex: '#e0e0e0' },
    ],
  },
  {
    id: 'asus-rog-zephyrus-s',
    name: 'ASUS ROG Zephyrus S',
    category: 'Gaming Laptop',
    discount: 10,
    salePrice: '815.99',
    originalPrice: '3,200.00',
    rating: 5,
    reviewCount: 2,
    image: '/feature-deals-assets/asus-rog-zephyrus-s.png',
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'White', hex: '#e0e0e0' },
    ],
  },
  {
    id: 'sony-ps5-dualsense',
    name: 'Sony PS5 DualSense',
    category: 'Controller',
    discount: 30,
    salePrice: '59.99',
    originalPrice: '85.99',
    rating: 5,
    reviewCount: 25,
    image: '/feature-deals-assets/sony-ps5-dualsense.png',
    colors: [
      { name: 'White', hex: '#e0e0e0' },
      { name: 'Red',   hex: '#c62828' },
    ],
  },
] as const