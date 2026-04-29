import { SanityProduct } from "./types"

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

async function fetchSanity<T>(query: string, defaultValue: T): Promise<T> {
  try {
    const url = buildUrl(query)
    if (!url) return defaultValue

    const res = await fetch(url, { cache: "no-store" })

    if (!res.ok) {
      console.error("Sanity fetch failed:", res.status, url)
      return defaultValue
    }

    const data = await res.json()
    return data?.result ?? defaultValue
  } catch (error) {
    console.error("Sanity fetch error:", error)
    return defaultValue
  }
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

  return (await fetchSanity<SanityProduct[]>(query, [])) || []
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

    const result = await fetchSanity<SanityProduct | undefined>(query, undefined)
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

  return (await fetchSanity<SanitySlideshowItem[]>(query, [])) || []
}