import dynamic from "next/dynamic"
import { Suspense } from "react"

const SearchResults = dynamic(
  () =>
    import("@/components/search-results").then(
      (mod) => mod.SearchResults
    ),
  { ssr: false }
)

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