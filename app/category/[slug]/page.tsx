export const dynamic = "force-dynamic"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { ProductCard } from "@/components/product-card"
import { getProducts } from "@/lib/getProducts"
import { getCategories } from "@/lib/getCategories"

export default async function CategoryPage({ params }) {

  const { slug } = await params // ✅ FIXED

  const categories = await getCategories()

  const category = categories.find(
    (c) => c.slug === slug
  )

  if (!category) {
    return (
      <div className="p-10 text-center">
        <h1>Category not found</h1>
        <p>Slug: {slug}</p>
      </div>
    )
  }

  let products = await getProducts()

  products = products.filter(
    (p) => p.categorySlug === slug
  )

  return (
    <div className="container mx-auto p-6">

      <div className="flex items-center gap-2 mb-6">
        <Link href="/">Home</Link>
        <ChevronRight size={16} />
        <span>{category.name}</span>
      </div>

      <h1 className="text-2xl font-bold mb-6">
        {category.name}
      </h1>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found</p>
      )}

    </div>
  )
}