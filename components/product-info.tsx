"use client"

import { useState, ReactNode } from "react"
import { Minus, Plus, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"
import { ProductOrSanity } from "@/lib/types"

interface ProductInfoProps {
  product: ProductOrSanity
}

export function ProductInfo({ product }: ProductInfoProps) {
  const { addItem } = useCart()
  const { toast } = useToast()
  const [quantity, setQuantity] = useState(1)

  const productPrice = product.price || 0
  const originalPrice = ("oldPrice" in product && product.oldPrice) || ("originalPrice" in product && product.originalPrice)

  // Function to format description with table-like structure for multiple spaces
  const formatDescription = (description: string) => {
    const lines = description.split('\n')
    const formattedLines: ReactNode[] = []

    for (const line of lines) {
      // Check if line contains 5 or more consecutive spaces
      if (/.{0,} {5,}.*/.test(line)) {
        const parts = line.split(/\s{5,}/).map((part: string) => part.trim())
        let left = parts[0] || ''
        let right = parts.slice(1).join('   ').trim()

        // If no left part but line starts with spaces, treat the first part as right
        if (!left && line.startsWith('     ')) {
          right = parts[0]
        }

        if (right) {
          formattedLines.push(
            <div key={formattedLines.length} className="flex gap-4 py-1">
              <span className="text-gray-600 font-medium basis-40 min-w-[160px] text-left">
                {left ? `${left}:` : ''}
              </span>
              <span className="text-gray-900 flex-1 min-w-[180px]">
                {right}
              </span>
            </div>
          )
        } else {
          formattedLines.push(
            <p key={formattedLines.length} className="py-1 text-gray-600">
              {line}
            </p>
          )
        }
      } else {
        formattedLines.push(
          <p key={formattedLines.length} className="py-1 text-gray-600">
            {line}
          </p>
        )
      }
    }

    return formattedLines
  }

  const handleAddToCart = () => {
    const success = addItem(product, quantity)

    if (success) {
      toast({
        title: "Added to cart",
        description: `${quantity} x ${product.name} has been added to your cart.`,
      })
      return
    }

    toast({
      title: "Out of stock",
      description: `${product.name} is currently out of stock.`,
      variant: "destructive",
    })
  }

  const increaseQuantity = () => {
    if (product.quantity === undefined || quantity < product.quantity) {
      setQuantity(quantity + 1)
    }
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">{product.name}</h1>

      <p className="text-xl mt-4 font-semibold">
        {productPrice.toLocaleString()} IQD
      </p>

      {originalPrice && (
        <div className="mt-2">
          <span className="text-sm text-muted-foreground line-through">
            {originalPrice.toLocaleString()} IQD
          </span>
          <span className="text-sm text-red-500 ml-2">
            -{Math.round((1 - productPrice / originalPrice) * 100)}%
          </span>
        </div>
      )}

      <div className="mt-4 text-gray-600 leading-relaxed">
        {formatDescription(product.description)}
      </div>

      <p className="mt-4">
        {(product.inStock ?? false) ? (
          <span className="text-green-600">
            ✅ In Stock {"quantity" in product ? `(${product.quantity || 0} available)` : ""}
          </span>
        ) : (
          <span className="text-red-600">
            ❌ Out of Stock
          </span>
        )}
      </p>

      {(product.inStock ?? false) && (
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-4">
            <span className="font-medium">Quantity:</span>
            <div className="flex items-center rounded-md border">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-r-none"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <div className="flex h-8 w-12 items-center justify-center text-sm">
                {quantity}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-l-none"
                onClick={increaseQuantity}
                disabled={product.quantity !== undefined && quantity >= product.quantity}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>

          <Button onClick={handleAddToCart} className="w-full" size="lg">
            <ShoppingCart className="mr-2 h-5 w-5" />
            اضافة الى السلة - {((product.price || 0) * quantity).toLocaleString()} IQD
          </Button>
        </div>
      )}
    </div>
  )
}
