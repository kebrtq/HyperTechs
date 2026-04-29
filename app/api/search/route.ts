import { NextRequest } from "next/server"
import { getProducts } from "@/lib/getProducts"
import { getCategories } from "@/lib/getCategories"
import { SanityProduct } from "@/lib/types"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")?.toLowerCase().trim() || ""

    const products: SanityProduct[] = await getProducts()
    const categories = await getCategories()

    if (!query) {
      return Response.json(products.slice(0, 20)) // Return first 20 products if no query
    }

    // Check if query matches a category name
    const categoryMatch = categories.find(c =>
      c.name.toLowerCase().includes(query)
    )

    if (categoryMatch) {
      // Return all products in the matching category
      const categoryProducts = products.filter(p =>
        p.categorySlug === categoryMatch.slug
      )
      return Response.json(categoryProducts)
    }

    // Fall back to text search
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    )

    return Response.json(filteredProducts)
  } catch (error) {
    console.error("Search API error:", error)
    return Response.json(
      { error: "Failed to search products" },
      { status: 500 }
    )
  }
}