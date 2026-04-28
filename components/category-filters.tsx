"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"

interface CategoryFiltersProps {
  brands: string[]
  currentBrand?: string
  currentSort?: string
  currentMinPrice?: string
  currentMaxPrice?: string
}

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
  { value: "name", label: "Name" },
]

export function CategoryFilters({
  brands,
  currentBrand,
  currentSort,
  currentMinPrice,
  currentMaxPrice,
}: CategoryFiltersProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (params: Record<string, string | undefined>) => {
      const newParams = new URLSearchParams(searchParams.toString())
      
      Object.entries(params).forEach(([key, value]) => {
        if (value === undefined || value === "") {
          newParams.delete(key)
        } else {
          newParams.set(key, value)
        }
      })

      return newParams.toString()
    },
    [searchParams]
  )

  const updateFilter = (params: Record<string, string | undefined>) => {
    const queryString = createQueryString(params)
    router.push(`${pathname}${queryString ? `?${queryString}` : ""}`)
  }

  const clearFilters = () => {
    router.push(pathname)
  }

  const hasFilters = currentBrand || currentSort || currentMinPrice || currentMaxPrice

  return (
    <div className="space-y-6">
      {/* Sort */}
      <div>
        <h3 className="mb-3 font-semibold">Sort By</h3>
        <RadioGroup
          value={currentSort || "featured"}
          onValueChange={(value) => updateFilter({ sort: value === "featured" ? undefined : value })}
        >
          {sortOptions.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <RadioGroupItem value={option.value} id={`sort-${option.value}`} />
              <Label htmlFor={`sort-${option.value}`} className="cursor-pointer text-sm">
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <Separator />

      {/* Brand Filter */}
      {brands.length > 1 && (
        <>
          <div>
            <h3 className="mb-3 font-semibold">Brand</h3>
            <RadioGroup
              value={currentBrand || "all"}
              onValueChange={(value) => updateFilter({ brand: value === "all" ? undefined : value })}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="brand-all" />
                <Label htmlFor="brand-all" className="cursor-pointer text-sm">
                  All Brands
                </Label>
              </div>
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <RadioGroupItem value={brand} id={`brand-${brand}`} />
                  <Label htmlFor={`brand-${brand}`} className="cursor-pointer text-sm">
                    {brand}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <Separator />
        </>
      )}

      {/* Price Range */}
      <div>
        <h3 className="mb-3 font-semibold">Price Range</h3>
        <div className="flex items-center gap-2">
          <Input
            type="number"
            placeholder="Min"
            value={currentMinPrice || ""}
            onChange={(e) => updateFilter({ minPrice: e.target.value || undefined })}
            className="w-24"
          />
          <span className="text-muted-foreground">-</span>
          <Input
            type="number"
            placeholder="Max"
            value={currentMaxPrice || ""}
            onChange={(e) => updateFilter({ maxPrice: e.target.value || undefined })}
            className="w-24"
          />
        </div>
      </div>

      {hasFilters && (
        <>
          <Separator />
          <Button variant="outline" className="w-full" onClick={clearFilters}>
            Clear Filters
          </Button>
        </>
      )}
    </div>
  )
}
