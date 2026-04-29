"use client"

import Link from "next/link"
import Image from "next/image"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ProductOrSanity } from "@/lib/types"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"

interface ProductCardProps {
  product: ProductOrSanity
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addItem } = useCart()
  const { toast } = useToast()

  const originalPrice = ("oldPrice" in product && product.oldPrice) || ("originalPrice" in product && product.originalPrice)

  const discount = originalPrice
    ? Math.round((1 - product.price / originalPrice) * 100)
    : 0

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    const success = addItem(product)
    if (success) {
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      })
    } else {
      toast({
        title: "Out of stock",
        description: `${product.name} is currently out of stock.`,
        variant: "destructive",
      })
    }
  }

  return (
    <Card className={cn("group overflow-hidden", className)}>
      <Link href={`/product/${encodeURIComponent(product.id)}`}>
        <div className="relative aspect-square overflow-hidden bg-white">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {discount > 0 && (
            <Badge className="absolute left-2 top-2" variant="destructive">
              -{discount}%
            </Badge>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80">
              <Badge variant="secondary">Out of Stock</Badge>
            </div>
          )}
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="mb-1 text-xs text-muted-foreground">
          {"brand" in product ? product.brand : ""}
        </div>
        <Link href={`/product/${encodeURIComponent(product.id)}`}>
          <h3 className="line-clamp-2 text-base font-bold leading-tight transition-colors hover:text-primary">
            {product.name}
          </h3>
        </Link>
        {"rating" in product && "reviewCount" in product && (
          <div className="mt-2 flex items-center gap-1">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-3 w-3",
                    i < Math.floor(product.rating)
                      ? "fill-amber-400 text-amber-400"
                      : "fill-muted text-muted"
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviewCount})
            </span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
       <div className="flex flex-col">

  <span className="text-lg font-bold">
    {product.price?.toLocaleString()} IQD
  </span>
  <span className="text-xs text-muted-foreground mt-1 block">
    {product.inStock
      ? ("quantity" in product ? `In stock: ${product.quantity}` : 'In stock')
      : 'Out of stock'}
  </span>

  {originalPrice && (
    <>
      <span className="text-xs text-muted-foreground line-through">
        {originalPrice.toLocaleString()} IQD
      </span>

      <span className="text-xs text-red-500">
        -{Math.round(
          (1 - product.price / originalPrice) * 100
        )}%
      </span>
    </>
  )}

</div>
        <Button
          size="sm"
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          <ShoppingCart className="mr-1 h-4 w-4" />
          Add
        </Button>
      </CardFooter>
    </Card>
  )
}
