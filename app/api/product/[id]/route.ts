import { NextRequest } from "next/server"
import { getProductById, getProducts } from "@/lib/getProducts"

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  let id = params?.id

  if (!id) {
    const products = await getProducts()
    return Response.json(products)
  }

  const product = await getProductById(id)
  return Response.json(product)
}
