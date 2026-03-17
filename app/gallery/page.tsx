"use client"

import { useState } from "react"
import { X } from "lucide-react"

const NAIL_ART_ITEMS = [
  { id: "n1", aspect: "aspect-[3/4]" },
  { id: "n2", aspect: "aspect-[4/5]" },
  { id: "n3", aspect: "aspect-square" },
  { id: "n4", aspect: "aspect-[5/4]" },
  { id: "n5", aspect: "aspect-[3/4]" },
  { id: "n6", aspect: "aspect-[4/3]" },
  { id: "n7", aspect: "aspect-square" },
  { id: "n8", aspect: "aspect-[3/4]" },
]

const FINE_ART_ITEMS = [
  { id: "f1", aspect: "aspect-[4/5]" },
  { id: "f2", aspect: "aspect-[3/4]" },
  { id: "f3", aspect: "aspect-square" },
  { id: "f4", aspect: "aspect-[5/4]" },
  { id: "f5", aspect: "aspect-[3/4]" },
  { id: "f6", aspect: "aspect-[4/3]" },
]

const PLACEHOLDER_NAIL = "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=85"
const PLACEHOLDER_ART = "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=85"

function MasonryGrid({
  items,
  imageUrl,
  borderClass = "border-[#C9A962]",
}: {
  items: { id: string; aspect: string }[]
  imageUrl: string
  borderClass?: string
}) {
  const [lightbox, setLightbox] = useState<string | null>(null)
  return (
    <>
      <div className="masonry">
        {items.map((item) => (
          <div key={item.id} className="masonry-item">
            <button
              type="button"
              onClick={() => setLightbox(item.id)}
              className={`block w-full overflow-hidden border ${borderClass} ${item.aspect} bg-[#050808] focus:outline-none focus:ring-1 focus:ring-[#C9A962]`}
            >
              <div
                className="h-full w-full bg-cover bg-center bg-no-repeat opacity-95 hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
            </button>
          </div>
        ))}
      </div>
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#050808]/98 p-6"
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => e.key === "Escape" && setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 p-2 text-[#F2EDE4]/70 hover:text-[#F2EDE4]"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <div
            className="max-w-4xl w-full aspect-[4/5] max-h-[85vh] bg-cover bg-center border border-[#C9A962]"
            style={{ backgroundImage: `url(${imageUrl})` }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <p
          className="text-[10px] tracking-[0.5em] uppercase text-[#C9A962] mb-2"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Portfolio
        </p>
        <h1
          className="text-3xl md:text-4xl font-light text-[#F2EDE4] mb-20"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Gallery
        </h1>

        <section className="mb-24">
          <h2
            className="text-sm tracking-[0.35em] uppercase text-[#F2EDE4]/90 mb-8"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Nail Art
          </h2>
          <MasonryGrid items={NAIL_ART_ITEMS} imageUrl={PLACEHOLDER_NAIL} />
        </section>

        <section>
          <h2
            className="text-sm tracking-[0.35em] uppercase text-[#F2EDE4]/90 mb-8"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Fine Art
          </h2>
          <MasonryGrid items={FINE_ART_ITEMS} imageUrl={PLACEHOLDER_ART} />
        </section>
      </div>
    </main>
  )
}
