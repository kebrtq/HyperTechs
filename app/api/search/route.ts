import { NextRequest } from "next/server"
import { getProducts } from "@/lib/getProducts"
import { SanityProduct } from "@/lib/types"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")?.toLowerCase().trim() || ""

    const products: SanityProduct[] = await getProducts()

    if (!query) {
      return Response.json(products.slice(0, 20)) // Return first 20 products if no query
    }

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