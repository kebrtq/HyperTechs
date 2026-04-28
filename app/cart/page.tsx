import { Metadata } from "next"
import { CartContent } from "@/components/cart-content"

export const metadata: Metadata = {
  title: "Shopping Cart | BuildRight",
  description: "Review your cart and proceed to checkout",
}

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Shopping Cart</h1>
      <CartContent />
    </div>
  )
}
