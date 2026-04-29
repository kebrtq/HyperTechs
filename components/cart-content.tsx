"use client"

import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart-context"

export function CartContent() {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted">
          <ShoppingBag className="h-12 w-12 text-muted-foreground" />
        </div>
        <h2 className="mt-6 text-xl font-semibold">Your cart is empty</h2>
        <p className="mt-2 text-center text-muted-foreground">
          Looks like you haven&apos;t added anything to your cart yet.
        </p>
        <Button asChild className="mt-6">
          <Link href="/">
            Start Shopping
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    )
  }

  const shipping = 5000
  const total = subtotal + shipping

  return (
    <div dir="rtl" className="grid gap-8 lg:grid-cols-3">
      {/* Cart Items */}
      <div className="lg:col-span-2">
        <div className="flex items-center justify-between mb-4">
          <p className="text-base text-muted-foreground">
            {items.length} {items.length === 1 ? "منتج" : "منتجات"} في السلة
          </p>
          <Button variant="ghost" size="sm" onClick={clearCart} className="text-destructive hover:text-destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            حذف السلة
          </Button>
        </div>

        <div className="space-y-4">
          {items.map(({ product, quantity }) => (
            <Card key={product.id}>
              <CardContent className="flex gap-4 p-4">
                {/* Product Image */}
                <Link href={`/product/${product.id}`} className="shrink-0">
                  <div className="relative h-24 w-24 overflow-hidden rounded-md bg-muted">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                </Link>

                {/* Product Details */}
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {"brand" in product ? product.brand : ""}
                      </p>
                      <Link href={`/product/${product.id}`}>
                        <h3 className="font-medium transition-colors hover:text-primary">
                          {product.name}
                        </h3>
                      </Link>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      onClick={() => removeItem(product.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Remove item</span>
                    </Button>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    {/* Quantity */}
                    <div className="flex items-center rounded-md border">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-r-none"
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <div className="flex h-8 w-10 items-center justify-center text-sm">
                        {quantity}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-l-none"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-base font-semibold">
                        {(product.price * quantity).toLocaleString()} IQD
                      </p>
                      {quantity > 1 && (
                        <p className="text-sm text-muted-foreground">
                          {product.price.toLocaleString()} IQD للواحد
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <Card className="sticky top-24">
          <CardHeader>
            <CardTitle className="text-lg">ملخص الطلب</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between text-base">
              <span className="text-muted-foreground">الإجمالي الفرعي</span>
              <span>{subtotal.toLocaleString()} IQD</span>
            </div>
            <div className="flex justify-between text-base">
              <span className="text-muted-foreground">الشحن</span>
              <span>{shipping.toLocaleString()} IQD</span>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-semibold">
              <span>الإجمالي</span>
              <span>{total.toLocaleString()} IQD</span>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-3">
            <Button className="w-full" size="lg" asChild>
              <Link href="/checkout">اتمام الطلب</Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/">متابعة التسوق</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
