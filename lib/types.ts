export type Category = 
  | "cpus"
  | "gpus"
  | "ram"
  | "storage"
  | "motherboards"
  | "cases"
  | "psus"
  | "cooling"

export interface Product {
  id: string
  name: string
  brand: string
  category: Category
  price: number
  oldPrice?: number
  image: string
  description: string
  specs: Record<string, string>
  rating: number
  reviewCount: number
  quantity: number
  inStock: boolean
  featured?: boolean
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface CategoryInfo {
  slug: Category
  name: string
  description: string
  icon: string
}

export const categories: CategoryInfo[] = [
  {
    slug: "cpus",
    name: "Processors",
    description: "High-performance CPUs for gaming and productivity",
    icon: "cpu"
  },
  {
    slug: "gpus",
    name: "Graphics Cards",
    description: "Powerful GPUs for gaming and creative work",
    icon: "gpu"
  },
  {
    slug: "ram",
    name: "Memory",
    description: "Fast DDR5 and DDR4 RAM modules",
    icon: "ram"
  },
  {
    slug: "storage",
    name: "Storage",
    description: "SSDs and HDDs for all your storage needs",
    icon: "storage"
  },
  {
    slug: "motherboards",
    name: "Motherboards",
    description: "Feature-rich motherboards for every build",
    icon: "motherboard"
  },
  {
    slug: "cases",
    name: "Cases",
    description: "Stylish and functional PC cases",
    icon: "case"
  },
  {
    slug: "psus",
    name: "Power Supplies",
    description: "Reliable power for your system",
    icon: "psu"
  },
  {
    slug: "cooling",
    name: "Cooling",
    description: "Air and liquid cooling solutions",
    icon: "cooling"
  }
]
