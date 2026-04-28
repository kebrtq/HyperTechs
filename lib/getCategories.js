import { client } from "./sanity"

export async function getCategories() {
  return await client.fetch(`
    *[_type == "category"]{
      _id,
      name,
      "slug": slug.current,
      "image": image.asset->url
    }
  `)
}