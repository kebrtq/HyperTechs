import { Suspense } from "react"
import { SearchResults } from "@/components/search-results"

export const dynamic = "force-dynamic"

export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<div>Loading...</div>}>
        <SearchResults />
      </Suspense>
    </div>
  )
}