import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductSlider from "@/components/product-slider"
import { ProductInfo } from "@/components/product-info"
import { getProductById } from "@/lib/getProducts"
import type { Product } from "@/lib/types"

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = await getProductById(id)

  if (!product) {
    notFound()
  }

  const images = product.images?.length ? product.images : [product.image]

  return (
    <div className="container mx-auto px-4 py-0">
      <div className="flex items-center gap-2 mb-2">
        <Link href="/">Home</Link>
        <ChevronRight size={16} />
        <Link href={`/category/${product.categorySlug}`}>
          {product.categorySlug}
        </Link>
        <ChevronRight size={16} />
        <span>{product.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <ProductSlider images={images} />
        <ProductInfo product={product} />
      </div>
    </div>
  )
}
