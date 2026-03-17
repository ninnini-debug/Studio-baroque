"use client"

import { useState } from "react"
import { X } from "lucide-react"

/* Editorial-style placeholders: varied aspect ratios for masonry */
const MASONRY_ITEMS = [
  { id: 1, aspect: "aspect-[3/4]" },
  { id: 2, aspect: "aspect-[4/5]" },
  { id: 3, aspect: "aspect-square" },
  { id: 4, aspect: "aspect-[5/4]" },
  { id: 5, aspect: "aspect-[3/4]" },
  { id: 6, aspect: "aspect-[4/3]" },
  { id: 7, aspect: "aspect-square" },
  { id: 8, aspect: "aspect-[3/4]" },
  { id: 9, aspect: "aspect-[5/4]" },
  { id: 10, aspect: "aspect-[4/5]" },
  { id: 11, aspect: "aspect-[3/4]" },
  { id: 12, aspect: "aspect-square" },
]

const EDITORIAL_PLACEHOLDER = "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80"

export function Gallery() {
  const [lightboxId, setLightboxId] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-24 md:py-32 lg:py-40">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="masonry">
          {MASONRY_ITEMS.map((item) => (
            <div key={item.id} className="masonry-item">
              <button
                type="button"
                onClick={() => setLightboxId(item.id)}
                className={`block w-full overflow-hidden border border-[#C9A962] ${item.aspect} bg-[#0D1616] focus:outline-none focus:ring-1 focus:ring-[#C9A962]`}
              >
                <div
                  className="h-full w-full bg-cover bg-center bg-no-repeat opacity-90 hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${EDITORIAL_PLACEHOLDER})` }}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {lightboxId !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D1616]/98 p-6"
          onClick={() => setLightboxId(null)}
          onKeyDown={(e) => e.key === "Escape" && setLightboxId(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image view"
        >
          <button
            type="button"
            onClick={() => setLightboxId(null)}
            className="absolute top-6 right-6 p-2 text-[#F2EDE4]/70 hover:text-[#F2EDE4] transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <div
            className="max-w-4xl w-full aspect-[4/5] max-h-[85vh] bg-cover bg-center border border-[#C9A962]"
            style={{ backgroundImage: `url(${EDITORIAL_PLACEHOLDER})` }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
