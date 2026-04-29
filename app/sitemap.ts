import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'http://localhost:3001',
      lastModified: new Date(),
    },
    {
      url: 'http://localhost:3001/products',
      lastModified: new Date(),
    },
    {
      url: 'http://localhost:3001/contact',
      lastModified: new Date(),
    },
  ]
}