import { SanityCategory } from "./types"

export async function getCategories(): Promise<SanityCategory[]> {
  try {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
    const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-01-01"

    if (!projectId) {
      console.error("Missing SANITY PROJECT ID")
      return []
    }

    if (!dataset) {
      console.error("Missing SANITY DATASET")
      return []
    }

    const query = '*[_type=="category"]{ _id, name, "slug": slug.current, "image": image.asset->url }'
    const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`

    const res = await fetch(url, { cache: "no-store" })

    if (!res.ok) {
      console.error("Fetch failed:", res.status, url)
      return []
    }

    const data = await res.json()
    return data?.result || data || []
  } catch (error) {
    console.error("getCategories error:", error)
    return []
  }
}
