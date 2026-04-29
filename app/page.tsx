import Link from "next/link"
import { getSlideshow } from "@/lib/getProducts.ts"
import { getCategories } from "@/lib/getCategories.ts"
import { Slideshow } from "@/components/slideshow"
import { SanityCategory } from "@/lib/types"

export default async function HomePage() {

  const categories: SanityCategory[] = await getCategories()
  const slideshowItems: { title: string; image: string; productId: string; productName: string }[] = await getSlideshow()

  // Sort categories in specific order
  const categoryOrder = ['graphic card', 'cpu', 'motherboard', 'memory', 'storage', 'power supply', 'cooler']
  categories.sort((a: SanityCategory, b: SanityCategory) => {
    const aIndex = categoryOrder.indexOf(a.name.toLowerCase())
    const bIndex = categoryOrder.indexOf(b.name.toLowerCase())
    if (aIndex === -1) return 1
    if (bIndex === -1) return -1
    return aIndex - bIndex
  })

  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold">HyperTech</h1>
        <p className="text-gray-500">Premium PC parts in Iraq</p>
      </section>

      {/* Slideshow */}
      <Slideshow items={slideshowItems} />

      {/* Categories (SAFE VERSION) */}
      <section className="container mx-auto px-4 py-12">

        {categories.length === 0 && (
          <p className="text-center text-red-500">
            No categories found
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {categories.map((category: SanityCategory) => (
            <Link
              key={category._id}
              href={`/category/${category.slug || ""}`}
              className="border rounded p-3 hover:shadow"
            >

              {/* IMAGE SAFE */}
              {category.image && (
                <div className="w-full h-40 bg-white rounded flex items-center justify-center">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="max-w-full max-h-full object-contain rounded"
                  />
                </div>
              )}

              {/* NAME */}
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