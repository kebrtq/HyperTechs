import { NextRequest } from "next/server"
import { getProductById, getProducts } from "@/lib/getProducts.ts"

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params

  if (!id) {
    const products = await getProducts()
    return Response.json(products)
  }

  const product = await getProductById(id)
  return Response.json(product)
}
