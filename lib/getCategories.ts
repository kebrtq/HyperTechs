import { client } from "./sanity"
import { SanityCategory } from "./types"

export async function getCategories(): Promise<SanityCategory[]> {
  return await client.fetch(`
    *[_type == "category"]{
      _id,
      name,
      "slug": slug.current,
      "image": image.asset->url
    }
  `)
}