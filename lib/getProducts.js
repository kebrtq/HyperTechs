import { client } from "./sanity"
import { SanityProduct } from "./types"import { SanityProduct } from "./types"
export async function getProducts() {
  return await client.fetch(`
    *[_type == "product"]{
      "id": _id,
      name,
      price,
      oldPrice,
      description,
      "image": image.asset->url,
      "images": images[].asset->url,
      "categorySlug": category->slug.current,
      quantity
    }
  `)
}

export async function getProductById(id: string): Promise<SanityProduct | undefined> {
  return await client.fetch(`
    *[_type == "product" && _id == $id][0]{
      "id": _id,
      name,
      price,
      oldPrice,
      description,
      "image": image.asset->url,
      "images": images[].asset->url,
      "categorySlug": category->slug.current,
      quantity
    }
  `, { id })
}

export async function getSlideshow(): Promise<{ title: string; image: string; productId: string; productName: string }[]> {
  return await client.fetch(`
    *[_type == "slideshow"]{
      title,
      "image": image.asset->url,
      "productId": product->_id,
      "productName": product->name,
    }
  `)
}