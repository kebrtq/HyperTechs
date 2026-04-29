"use client"

import { useState } from "react"
import { ShoppingCart, Minus, Plus, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductOrSanity } from "@/lib/types"
import { useCart } from "@/lib/cart-context"

interface AddToCartButtonProps {
  product: ProductOrSanity
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addItem(product, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      {/* Quantity Selector */}
      <div className="flex items-center rounded-md border">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-r-none"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          disabled={quantity <= 1 || !(product.inStock ?? false)}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <div className="flex h-10 w-12 items-center justify-center text-sm font-medium">
          {quantity}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-l-none"
          onClick={() => setQuantity((q) => q + 1)}
          disabled={!(product.inStock ?? false)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Add to Cart Button */}
      <Button
        size="lg"
        className="flex-1 sm:flex-initial"
        onClick={handleAddToCart}
        disabled={!(product.inStock ?? false) || added}
      >
        {added ? (
          <>
            <Check className="mr-2 h-5 w-5" />
            تمت الإضافة
          </>
        ) : (
          <>
            <ShoppingCart className="mr-2 h-5 w-5" />
            اضافة الى السلة
          </>
        )}
      </Button>
    </div>
  )
}
