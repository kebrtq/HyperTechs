"use client"

import { useState, useEffect } from "react"

interface ProductSliderProps {
  images: string[]
}

export default function ProductSlider({ images }: ProductSliderProps) {
  const [current, setCurrent] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX)
    handleSwipe()
  }

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50
    if (isLeftSwipe) next()
    if (isRightSwipe) prev()
  }

  return (
    <div className="relative">

      {/* IMAGE */}
      <div
        className="w-full h-[600px] bg-white border rounded flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[current]}
          className="w-full h-full object-contain"
          alt={`Product image ${current + 1}`}
        />
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded shadow hover:bg-gray-100"
      >
        ◀
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded shadow hover:bg-gray-100"
      >
        ▶
      </button>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition-colors ${
              current === i ? "bg-black" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>

    </div>
  )
}