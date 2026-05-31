// Barrel file for all static local assets.
// Components must import from here — never reference /public paths directly.

export const CATEGORIES = [
  { name: 'Phones',       slug: 'phones',       image: '/category/phone-cat.png'      },
  { name: 'Cameras',      slug: 'cameras',      image: '/category/digitalcam-cat.png' },
  { name: 'Headphones',   slug: 'headphones',   image: '/category/headphone-cat.png'  },
  { name: 'Smartwatches', slug: 'smartwatches', image: '/category/smartwatch-cat.png' },
  { name: 'Desktops',     slug: 'desktops',     image: '/category/desktop-cat.png'    },
  { name: 'Controllers',  slug: 'controllers',  image: '/category/controller-cat.png' },
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