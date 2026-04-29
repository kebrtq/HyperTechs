import type { SanityProduct } from "./types"

export declare function getProducts(): Promise<SanityProduct[]>
export declare function getProductById(id: string): Promise<SanityProduct | undefined>
export declare function getSlideshow(): Promise<{
  title: string
  image: string
  productId: string
  productName: string
}[]>
