import { createClient } from "@sanity/client"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "djk7wupr", // 🔥 your project
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: false,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-01-01",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
})