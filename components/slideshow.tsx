"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface SlideshowItem {
  title: string
  image: string
  productId: string
  productName: string
}

interface SlideshowProps {
  items: SlideshowItem[]
}

export function Slideshow({ items }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(100)
  const [api, setApi] = useState<any>(null)

  useEffect(() => {
    if (!items.length || !api) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % items.length
        requestAnimationFrame(() => {
          api.scrollTo(nextIndex)
        })
        setProgress(100)
        return nextIndex
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [items.length, api])

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.max(prev - 100 / 80, 0))
    }, 50)

    return () => clearInterval(progressInterval)
  }, [currentIndex])

  if (!items.length) return null

  return (
    <section className="container mx-auto px-4 py-12">
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <Link href={`/product/${item.productId}`}>
                <div className="relative h-[15.9rem] overflow-hidden rounded-lg bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                    <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                    <p className="text-white/80">{item.productName}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 bg-gray-300 w-full">
                    <div
                      className="h-1 bg-black transition-all duration-[50ms]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}