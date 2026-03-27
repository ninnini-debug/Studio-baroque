"use client"

import { useState } from "react"
import { X } from "lucide-react"

type GalleryItem = {
  id: string
  src: string
  aspect: string
  title: string
  description: string
}

const NAIL_ART_ITEMS: GalleryItem[] = [
  {
    id: "n1",
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=85",
    aspect: "aspect-[4/5]",
    title: "Nail Study I",
    description: "CUSTOM SET • GEL / ACRYLIC",
  },
  {
    id: "n2",
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=85",
    aspect: "aspect-square",
    title: "Nail Study II",
    description: "DETAIL WORK • HAND-PAINTED",
  },
  {
    id: "n3",
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=85",
    aspect: "aspect-[3/4]",
    title: "Nail Study III",
    description: "FRENCH • MODERN CLASSIC",
  },
]

const INDIVIDUAL_NAIL_ART_ITEMS: GalleryItem[] = [
  {
    id: "in1",
    src: "https://images.unsplash.com/photo-1602585574617-9e7a6f76f6de?w=1200&q=85",
    aspect: "aspect-[4/5]",
    title: "Individual Detail I",
    description: "SINGLE NAIL • MICRO DETAIL",
  },
  {
    id: "in2",
    src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=1200&q=85",
    aspect: "aspect-square",
    title: "Individual Detail II",
    description: "PRECISION • STUDIO FINISH",
  },
  {
    id: "in3",
    src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=1200&q=85",
    aspect: "aspect-[3/4]",
    title: "Individual Detail III",
    description: "SIGNATURE • HAND-PAINTED",
  },
]

// Note: using the 3 Fine Art files currently present in `public/`.
const FINE_ART_ITEMS: GalleryItem[] = [
  {
    id: "f2jpg",
    src: "/fine-art-2.jpg",
    aspect: "aspect-[4/5]",
    title: "Still Life",
    description: "OIL • FLORAL STUDY",
  },
  {
    id: "f2png",
    src: "/fine-art-2.PNG",
    aspect: "aspect-[3/4]",
    title: "Vase & Bloom",
    description: "MIXED MEDIA • ATMOSPHERE",
  },
  {
    id: "f3png",
    src: "/fine-art-3.PNG",
    aspect: "aspect-square",
    title: "Portrait",
    description: "OIL • FIGURE STUDY",
  },
]

function VaultGrid({ items }: { items: GalleryItem[] }) {
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null)
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {items.map((item) => (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => setLightbox(item)}
              className={`gallery-bedframe block w-full overflow-hidden ${item.aspect} bg-[#FDFCF9] focus:outline-none focus:ring-1 focus:ring-[#1A1A1A]/30`}
              style={{ borderWidth: "0.5px" }}
            >
              <div
                className="h-full w-full bg-cover bg-center bg-no-repeat opacity-100 hover:opacity-90 transition-opacity duration-300"
                style={{ backgroundImage: `url(${item.src})` }}
              />
            </button>
          </div>
        ))}
      </div>
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#050505]/98 p-6"
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => e.key === "Escape" && setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image"
          tabIndex={-1}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 p-2 text-[#E5DFD3]/70 hover:text-[#E5DFD3]"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full max-h-[78vh] flex items-center justify-center">
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-[#050505]/70 text-[#E5DFD3]/90 hover:text-[#E5DFD3] border border-[#E5DFD3]/30"
                aria-label="Close image"
              >
                <X size={18} />
              </button>
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-h-[78vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="mt-6 text-center">
              <div
                className="text-5xl sm:text-6xl font-normal"
                style={{ fontFamily: "var(--font-logo), cursive", color: "#E5DFD3" }}
              >
                {lightbox.title}
              </div>
              <div
                className="mt-3 text-[10px] tracking-[0.5em] uppercase opacity-80"
                style={{ fontFamily: "Optima, var(--font-cormorant), Georgia, serif", color: "#E5DFD3" }}
              >
                {lightbox.description}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default function GalleryPage() {
  return (
    <main
      className="min-h-screen -mt-16 pt-16 relative overflow-hidden"
      style={{
        minHeight: "100vh",
        backgroundColor: "#FDFCF9",
      }}
    >
      {/* Same source as About hero — zoomed + blurred so gallery feels soft, not flat */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: 0 }}
        aria-hidden
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src="/studio-process.mp4"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "120vw",
            height: "120vh",
            minWidth: "100%",
            minHeight: "100%",
            transform: "translate(-50%, -50%) scale(1.12)",
            objectFit: "cover",
            objectPosition: "center",
            filter: "blur(6px)",
            WebkitFilter: "blur(6px)",
            opacity: 1,
          }}
        />
      </div>
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: "rgba(253,252,249,0.62)",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
        }}
        aria-hidden
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <p
          className="text-[10px] tracking-[0.5em] uppercase text-[#4A453E] mb-2"
          style={{ fontFamily: "Optima, var(--font-cormorant), Georgia, serif" }}
        >
          Portfolio
        </p>
        <h1
          className="text-3xl md:text-4xl font-light text-[#1A1A1A] mb-20"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Gallery
        </h1>

        <section className="mb-24">
          <h2
            className="text-[10px] tracking-[0.45em] uppercase text-[#4A453E] mb-10"
            style={{ fontFamily: "Optima, var(--font-cormorant), Georgia, serif" }}
          >
            Nail Art
          </h2>
          <VaultGrid items={NAIL_ART_ITEMS} />
        </section>

        <section className="mb-24">
          <h2
            className="text-[10px] tracking-[0.45em] uppercase text-[#4A453E] mb-10"
            style={{ fontFamily: "Optima, var(--font-cormorant), Georgia, serif" }}
          >
            Individual Nail Art
          </h2>
          <VaultGrid items={INDIVIDUAL_NAIL_ART_ITEMS} />
        </section>

        <section>
          <h2
            className="text-[10px] tracking-[0.45em] uppercase text-[#4A453E] mb-10"
            style={{ fontFamily: "Optima, var(--font-cormorant), Georgia, serif" }}
          >
            Fine Art
          </h2>
          <VaultGrid items={FINE_ART_ITEMS} />
        </section>
      </div>
    </main>
  )
}
