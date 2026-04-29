"use client"

import { useState } from "react"

interface ProductSliderProps {
  images: string[]
}

export default function ProductSlider({ images }: ProductSliderProps) {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  return (
    <div className="relative">

      {/* IMAGE */}
      <div className="w-full h-[600px] bg-white border rounded flex items-center justify-center">
        <img
          src={images[current]}
          className="w-full h-full object-contain"
        />
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded shadow"
      >
        ◀
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded shadow"
      >
        ▶
      </button>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full ${
              current === i ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

    </div>
  )
}