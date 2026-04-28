"use client"

import Link from "next/link"
import Image from "next/image"
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
  if (!items.length) return null

  return (
    <section className="container mx-auto px-4 py-12">
      <Carousel className="w-full">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <Link href={`/product/${item.productId}`}>
                <div className="relative h-[15.9rem] overflow-hidden rounded-lg bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                    <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                    <p className="text-white/80">{item.productName}</p>
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