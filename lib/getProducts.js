import { client } from "./sanity"

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

export async function getProductById(id) {
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

export async function getSlideshow() {
  return await client.fetch(`
    *[_type == "slideshow"]{
      title,
      "image": image.asset->url,
      "productId": product->_id,
      "productName": product->name,
    }
  `)
}