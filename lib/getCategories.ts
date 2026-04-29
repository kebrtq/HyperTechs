import { SanityCategory } from "./types"

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

export async function fetchSanity(url: string, defaultValue: any = []) {
  try {
    if (!url) return defaultValue

    const res = await fetch(url, { cache: "no-store" })

    if (!res.ok) {
      console.error("Sanity fetch failed:", res.status, url)
      return defaultValue
    }

    const data = await res.json()
    return data?.result || defaultValue

  } catch (error) {
    console.error("Sanity fetch error:", error)
    return defaultValue
  }
}

export async function getCategories(): Promise<SanityCategory[]> {
  const query = '*[_type=="category"]{ _id, name, "slug": slug.current, "image": image.asset->url }'
  const url = buildUrl(query)
  return url ? fetchSanity(url, []) : []
}
