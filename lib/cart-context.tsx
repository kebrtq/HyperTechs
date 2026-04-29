"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { CartItem, ProductOrSanity } from "./types"

interface CartContextType {
  items: CartItem[]
  addItem: (product: ProductOrSanity, quantity?: number) => boolean
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  itemCount: number
  subtotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("cart")
    if (stored) {
      try {
        setItems(JSON.parse(stored))
      } catch {
        // Invalid JSON, ignore
      }
    }
    setIsInitialized(true)
  }, [])

  // Save cart to localStorage on change
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("cart", JSON.stringify(items))
    }
  }, [items, isInitialized])

  const addItem = (product: ProductOrSanity, quantity = 1) => {
    // Check if product is in stock
    if (!(product.inStock ?? false)) {
      return false // Return false to indicate failure
    }

    setItems(current => {
      const existing = current.find((item: any) => item.product.id === product.id)
      if (existing) {
        // Check if adding would exceed available stock (only for products with quantity)
        if (product.quantity !== undefined && existing.quantity + quantity > product.quantity) {
          return current // Don't add if it would exceed stock
        }
        return current.map((item: any) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...current, { product, quantity }]
    })
    return true // Return true to indicate success
  }

  const removeItem = (productId: string) => {
    setItems(current => current.filter(item => item.product.id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId)
      return
    }

    // Check if product is still in stock
    const item = items.find((item: any) => item.product.id === productId)
    if (!item || !(item.product.inStock ?? false)) {
      return // Don't allow updates for out of stock items
    }

    // Check stock limit (only for products with quantity)
    if (item.product.quantity !== undefined && quantity > item.product.quantity) {
      return // Don't allow quantity above stock
    }

    setItems(current =>
      current.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce(
    (sum, item) => sum + ((item.product.price || 0) * item.quantity),
    0
  )

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
