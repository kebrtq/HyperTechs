"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Search } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { getProducts } from "@/lib/getProducts"

export function SearchResults() {
const searchParams = useSearchParams()
const [query, setQuery] = useState("")

useEffect(() => {
  const q = (searchParams.get("q") || "").toLowerCase().trim()
  setQuery(q)
}, [searchParams])

  const [products, setProducts] = useState([])
  const [results, setResults] = useState([])

  useEffect(() => {
    async function load() {
      const data = await getProducts()
      setProducts(data)
    }
    load()
  }, [])

  useEffect(() => {
    if (!query) {
      setResults([])
      return
    }

    const filtered = products.filter((p) =>
      p.name?.toLowerCase().includes(query)
    )

    setResults(filtered)
  }, [query, products])

  return (
    <div>

      {query ? (
        <>
          <h1 className="text-2xl font-bold mb-6">
            {results.length} results for "{query}"
          </h1>

          {results.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {results.map((product) => (
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