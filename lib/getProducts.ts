import { SanityProduct } from "./types"
import { fetchSanity } from "./getCategories"

type SanitySlideshowItem = {
  title: string
  image: string
  productId: string
  productName: string
}

function buildUrl(query: string) {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
  const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-01-01"

  if (!projectId || !dataset) {
    console.error("Missing Sanity env variables")
    return null
  }

  return `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`
}

// ✅ GET ALL PRODUCTS
export async function getProducts(): Promise<SanityProduct[]> {
  const query = `*[_type=="product"]{
    "id": _id,
    name,
    price,
    oldPrice,
    originalPrice,
    description,
    "image": image.asset->url,
    "images": images[].asset->url,

    // ✅ SAFE CATEGORY (VERY IMPORTANT)
    "categorySlug": coalesce(category->slug.current, "uncategorized"),
    "categoryName": coalesce(category->name, "Unknown"),

    quantity,
    "inStock": quantity > 0
  }`

  const url = buildUrl(query)
  return url ? fetchSanity(url, []) : []
}

// ✅ GET SINGLE PRODUCT
export async function getProductById(id: string): Promise<SanityProduct | undefined> {
  try {
    const escapedId = id.replace(/"/g, '\\"')

    const query = `*[_type=="product" && _id=="${escapedId}"][0]{
      "id": _id,
      name,
      price,
      oldPrice,
      originalPrice,
      description,
      "image": image.asset->url,
      "images": images[].asset->url,

      // ✅ SAME FIX HERE
      "categorySlug": coalesce(category->slug.current, "uncategorized"),
      "categoryName": coalesce(category->name, "Unknown"),

      quantity,
      "inStock": quantity > 0
    }`

    const url = buildUrl(query)
    const result = url ? fetchSanity(url, undefined) : undefined
    return result || undefined
  } catch (error) {
    console.error("getProductById error:", error)
    return undefined
  }
}

// ✅ GET SLIDESHOW
export async function getSlideshow(): Promise<SanitySlideshowItem[]> {
  const query = `*[_type=="slideshow"]{
    title,
    "image": image.asset->url,
    "productId": product->_id,
    "productName": product->name
  }`

  const url = buildUrl(query)
  return url ? fetchSanity(url, []) : []
}