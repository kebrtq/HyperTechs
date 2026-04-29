export const dynamic = "force-dynamic"
import Link from "next/link"
import { getSlideshow, getProducts } from "@/lib/getProducts"
import { getCategories } from "@/lib/getCategories"
import { Slideshow } from "@/components/slideshow"
import { SanityCategory } from "@/lib/types"

export default async function HomePage() {

  const categories: SanityCategory[] = (await getCategories().catch((e) => {
    console.error("Categories error:", e)
    return []
  })) || []

  const slideshowItems = (await getSlideshow().catch((e) => {
    console.error("Slideshow error:", e)
    return []
  })) || []

  const products = (await getProducts().catch((e) => {
    console.error("Products error:", e)
    return []
  })) || []

  const categoryOrder = ['graphic card', 'cpu', 'motherboard', 'memory', 'storage', 'power supply', 'cooler']

  categories.sort((a, b) => {
    const aIndex = categoryOrder.indexOf(a.name.toLowerCase())
    const bIndex = categoryOrder.indexOf(b.name.toLowerCase())
    if (aIndex === -1) return 1
    if (bIndex === -1) return -1
    return aIndex - bIndex
  })

  return (
    <div className="flex flex-col">

      <section className="text-center py-12">
        <h1 className="text-4xl font-bold">HyperTech</h1>
        <p className="text-gray-500">Premium PC parts in Iraq</p>
        <p className="text-sm text-gray-500 mt-2">
          Browse {products.length} products in our catalog.
        </p>
      </section>

      <Slideshow items={slideshowItems} />

      <section className="container mx-auto px-4 py-12">

        {categories.length === 0 && (
          <p className="text-center text-red-500">
            No categories found
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {categories.map((category) => (
            <Link
              key={category._id}
              href={`/category/${category.slug || "uncategorized"}`}
              className="border rounded p-3 hover:shadow"
            >

              {category.image && (
                <div className="w-full h-40 bg-white rounded flex items-center justify-center">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="max-w-full max-h-full object-contain rounded"
                  />
                </div>
              )}

              <h2 className="text-center mt-2 font-semibold">
                {category.name}
              </h2>

            </Link>
          ))}

        </div>
      </section>

    </div>
  )
}