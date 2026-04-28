import { NextResponse } from "next/server"
import { getProductById, getProducts } from "@/lib/getProducts"

export async function GET(request, { params }) {
  let id = params?.id

  if (!id) {
    const url = new URL(request.url)
    const pathnameSegments = url.pathname.split("/").filter(Boolean)
    id = pathnameSegments[pathnameSegments.length - 1]
  }

  if (!id) {
    return NextResponse.json({ error: "Missing product id" }, { status: 400 })
  }

  let product = await getProductById(id)

  if (!product) {
    const products = await getProducts()
    product = products.find((item) => item.id === id)
  }

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }

  return NextResponse.json(product)
}
