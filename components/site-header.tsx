"use client"

import Link from "next/link"
import { ShoppingCart, Search, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

export function SiteHeader() {
  const { itemCount } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-20 items-center gap-4 px-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Cpu className="h-8 w-8" />
          </div>
          <span className="hidden sm:inline-block">HyperTech</span>
        </Link>

        {/* Search */}
        <form action="/search" method="get" className="flex flex-1 max-w-sm">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-6 w-6" />
            <input
              name="q"
              type="search"
              placeholder="Search..."
              className="pr-24 pl-10 h-12 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-2 text-lg shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] md:text-base"
            />
            <Button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2" size="sm">
              Search
            </Button>
          </div>
        </form>

        {/* Right */}
        <div className="flex items-center gap-2 ml-auto">

          <Link href="/cart">
            <Button variant="ghost" className="h-16 w-16 relative">
              <ShoppingCart className="h-12 w-12" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-7 w-7 rounded-full bg-red-500 text-sm text-white flex items-center justify-center font-bold">
                  {itemCount > 99 ? '99+' : itemCount}
                </span>
              )}
            </Button>
          </Link>

        </div>
      </div>
    </header>
  )
}