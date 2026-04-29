"use client"

import Link from "next/link"
import { Cpu, Facebook, Instagram, MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { SanityCategory } from "@/lib/types"
import { getCategories } from "@/lib/getCategories"

export function SiteFooter() {
  const [categories, setCategories] = useState<SanityCategory[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch(err => {
        console.error("Failed to load footer categories:", err)
        setCategories([])
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Cpu className="h-5 w-5" />
              </div>
              <span>HyperTech</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted source for quality computer parts. Building dreams, one component at a time.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Categories</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              {!loading && categories.slice(0, 4).map((category) => (
                <li key={category._id}>
                  <Link
                    href={`/category/${category.slug || "uncategorized"}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Categories */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">More</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              {!loading && categories.slice(4).map((category) => (
                <li key={category._id}>
                  <Link
                    href={`/category/${category.slug || "uncategorized"}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Support</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/warranty" className="transition-colors hover:text-foreground">
                  Warranty
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Us */}
        <div className="mt-8 border-t pt-8">
          <h3 className="mb-4 text-base font-semibold">اتصل بنا</h3>
          <div className="flex flex-wrap gap-8">
            <Link
              href="https://www.facebook.com/profile.php?id=61586321427708"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              <Facebook className="h-5 w-5" />
              Facebook
            </Link>
            <Link
              href="https://www.instagram.com/hyper1_tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </Link>
            <Link
              href="https://wa.me/9647768477953"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp: 0776 847 7953
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} HyperTech. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
