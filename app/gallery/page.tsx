"use client"

import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import {
  CardStack,
  type FanItem,
  type GalleryOpenDetail,
} from "@/components/gallery-fan-stack"

const ALABASTER = "#FDFCF9"

/** URL-encoded paths in /public */
const VIDEO_FLOWER = "/flower%20video.mp4"
const VIDEO_2 = "/Video%202.mp4"

function SectionVideoBackdrop({ src }: { src: string }) {
  return (
    <video
      className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center opacity-30"
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
    />
  )
}

const NAIL_ART_SRC = [
  "/nail%20art%203.jpg",
  "/nail%20art%201.jpg",
  "/nail%20art%202.jpg",
] as const

const INDIVIDUAL_SRC = [
  "/individual%20nail%20art%201.jpg",
  "/individual%20nail%20art%202.jpg",
  "/individual%20nail%20art%203.jpg",
] as const

const FINE_ART_FLOWERS: { id: string; src: string; title: string }[] = [
  { id: "f1", src: "/fine-art-2.PNG", title: "Vase & Bloom" },
  { id: "f2", src: "/fine-art-2.jpg", title: "Still Life" },
  { id: "f3", src: "/fine-art-3.PNG", title: "Portrait" },
]

const NAIL_ITEMS: readonly [FanItem, FanItem, FanItem] = [
  { src: NAIL_ART_SRC[0], alt: "Nail art 3" },
  { src: NAIL_ART_SRC[1], alt: "Nail art 1" },
  { src: NAIL_ART_SRC[2], alt: "Nail art 2" },
]

const INDIVIDUAL_ITEMS: readonly [FanItem, FanItem, FanItem] = [
  { src: INDIVIDUAL_SRC[0], alt: "Individual art 1" },
  { src: INDIVIDUAL_SRC[1], alt: "Individual art 2" },
  { src: INDIVIDUAL_SRC[2], alt: "Individual art 3" },
]

const FINE_ITEMS: readonly [FanItem, FanItem, FanItem] = [
  { src: FINE_ART_FLOWERS[0].src, alt: FINE_ART_FLOWERS[0].title },
  { src: FINE_ART_FLOWERS[1].src, alt: FINE_ART_FLOWERS[1].title },
  { src: FINE_ART_FLOWERS[2].src, alt: FINE_ART_FLOWERS[2].title },
]

type LightboxState = { items: string[]; index: number }

function LightboxGallery({
  state,
  onClose,
  onPrev,
  onNext,
}: {
  state: LightboxState | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  useEffect(() => {
    if (state === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        onPrev()
      }
      if (e.key === "ArrowRight") {
        e.preventDefault()
        onNext()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [state, onClose, onPrev, onNext])

  if (state === null) return null

  const { items, index } = state
  const src = items[index]
  const n = items.length
  const label = `${index + 1} / ${n}`

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-[#050505]/96 p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged image"
      tabIndex={-1}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        className="fixed right-3 top-3 z-[130] flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-black/75 sm:right-5 sm:top-5"
        aria-label="Close"
      >
        <X size={22} strokeWidth={2} />
      </button>

      <p
        className="pointer-events-none fixed left-1/2 top-4 z-[130] -translate-x-1/2 text-[10px] tabular-nums tracking-[0.2em] text-white/70"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        aria-live="polite"
      >
        {label}
      </p>

      <div
        className="relative z-[50] flex w-full max-w-5xl items-center justify-center gap-2 sm:gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60 sm:h-12 sm:w-12"
          aria-label="Previous image"
        >
          <ChevronLeft size={26} strokeWidth={1.5} />
        </button>

        <div className="flex min-h-0 min-w-0 flex-1 items-center justify-center">
          <img
            key={src}
            src={src}
            alt=""
            className="max-h-[85vh] w-auto max-w-full object-contain"
          />
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60 sm:h-12 sm:w-12"
          aria-label="Next image"
        >
          <ChevronRight size={26} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  )
}

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)

  const open = useCallback((detail: GalleryOpenDetail) => {
    setLightbox({ items: [...detail.allSrcs], index: detail.index })
  }, [])

  const goPrev = useCallback(() => {
    setLightbox((s) => {
      if (s === null || s.items.length < 2) return s
      const nextIndex = (s.index - 1 + s.items.length) % s.items.length
      return { ...s, index: nextIndex }
    })
  }, [])

  const goNext = useCallback(() => {
    setLightbox((s) => {
      if (s === null || s.items.length < 2) return s
      const nextIndex = (s.index + 1) % s.items.length
      return { ...s, index: nextIndex }
    })
  }, [])

  return (
    <main
      className="gallery-page-root relative -mt-16 min-h-screen !overflow-visible pt-16"
      style={{ backgroundColor: ALABASTER, overflow: "visible" }}
    >
      {/* Frame lives in root layout (GalleryFrame) so it doesn’t flicker on route changes */}
      {/* Sits above the frame (z-100); below sticky nav (also z-110) in normal flow */}
      <header className="relative z-[110] mx-auto max-w-[1400px] px-10 pb-10 pt-[80px] text-center sm:px-12 md:px-16 md:pb-12">
        <p
          className="mb-2 text-[10px] uppercase tracking-[0.5em] text-[#141414]"
          style={{ fontFamily: "Optima, var(--font-cormorant), Georgia, serif" }}
        >
          Portfolio
        </p>
        <h1
          className="text-6xl font-normal capitalize leading-none text-[#141414] md:text-7xl lg:text-8xl"
          style={{
            fontFamily: "var(--font-calligraphy), 'Allura', cursive",
            letterSpacing: "0.02em",
          }}
        >
          Gallery
        </h1>
      </header>

      <div
        className="relative z-10 mx-auto max-w-[1400px] !overflow-visible px-10 pb-[calc(6rem+40px)] pt-0 sm:px-12 sm:pb-28 md:px-16"
        style={{ overflow: "visible" }}
      >
        <section
          id="gallery-nail-art"
          className="relative mt-10 mb-[150px] flex w-full flex-col items-center justify-center !overflow-visible md:mt-12"
          style={{ overflow: "visible" }}
        >
          <SectionVideoBackdrop src={VIDEO_FLOWER} />
          <div className="relative z-10 flex w-full flex-col items-center justify-center">
            <CardStack
              title="Nail art"
              items={NAIL_ITEMS}
              onOpen={open}
              headingInsetClass="pl-[10%]"
            />
          </div>
        </section>

        <section
          id="gallery-individual"
          className="relative mb-[150px] flex w-full flex-col items-center justify-center !overflow-visible"
          style={{ overflow: "visible" }}
        >
          <SectionVideoBackdrop src={VIDEO_2} />
          <div className="relative z-10 flex w-full flex-col items-center justify-center">
            <CardStack title="Individual art" items={INDIVIDUAL_ITEMS} onOpen={open} />
          </div>
        </section>

        <section
          id="gallery-fine-art"
          className="relative flex w-full flex-col items-center justify-center !overflow-visible pb-6"
          style={{ overflow: "visible" }}
        >
          <SectionVideoBackdrop src={VIDEO_2} />
          <div className="relative z-10 flex w-full flex-col items-center justify-center">
            <CardStack title="Fine art" items={FINE_ITEMS} onOpen={open} />
          </div>
        </section>
      </div>

      <LightboxGallery
        state={lightbox}
        onClose={() => setLightbox(null)}
        onPrev={goPrev}
        onNext={goNext}
      />
    </main>
  )
}
