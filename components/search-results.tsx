"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Search } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { SanityProduct } from "@/lib/types"

export function SearchResults() {
const searchParams = useSearchParams()
const [query, setQuery] = useState("")

useEffect(() => {
  const q = (searchParams.get("q") || "").toLowerCase().trim()
  setQuery(q)
}, [searchParams])

  const [products, setProducts] = useState<SanityProduct[]>([])
  const [results, setResults] = useState<SanityProduct[]>([])

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
        if (response.ok) {
          const data: SanityProduct[] = await response.json()
          setProducts(data)
          setResults(data) // Set results directly since API already filters
        } else {
          console.error("Failed to fetch products")
          setProducts([])
          setResults([])
        }
      } catch (error) {
        console.error("Error fetching products:", error)
        setProducts([])
        setResults([])
      }
    }
    if (query) {
      load()
    } else {
      setProducts([])
      setResults([])
    }
  }, [query])

  return (
    <div>

      {query ? (
        <>
          <h1 className="text-2xl font-bold mb-6">
            {results.length} results for "{query}"
          </h1>

          {results.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {results.map((product: SanityProduct) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p>No products found</p>
          )}
        </>
      ) : (
        <div className="text-center py-10">
          <Search className="mx-auto mb-4 h-10 w-10" />
          <p>Start typing to search</p>
        </div>
      )}

    </div>
  )
}