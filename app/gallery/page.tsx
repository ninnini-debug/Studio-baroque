"use client"

import { useCallback, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import {
  CardStack,
  type FanItem,
  type GalleryOpenDetail,
} from "@/components/gallery-fan-stack"
import { GALLERY_HEADER_GREY } from "@/lib/gallery-theme"

const HOME_VIDEO = "/video.mp4"
const VIDEO_FLOWER = "/flower%20video.mp4"
const VIDEO_2 = "/Video%202.mp4"

function GalleryAtmosphere() {
  return (
    <div className="gallery-atmosphere pointer-events-none fixed inset-0 z-0" aria-hidden>
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HOME_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-[#FDFCF9]/50 backdrop-blur-[10px]" />
    </div>
  )
}

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

const FINE_ART_FLOWERS = [
  { id: "f1", src: "/fine-art-2.PNG", title: "Vase & Bloom" },
  { id: "f2", src: "/fine-art-2.jpg", title: "Still Life" },
  { id: "f3", src: "/fine-art-3.PNG", title: "Portrait" },
] as const

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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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

  useEffect(() => {
    if (state === null) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [state])

  if (state === null || !mounted) return null

  const { items, index } = state
  const src = items[index]
  const label = `${index + 1} / ${items.length}`

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#050505]/96 p-4 sm:p-6"
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
        className="fixed z-[210] flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/50 bg-black/75 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-black/90 sm:h-11 sm:w-11"
        style={{
          top: "max(1rem, calc(env(safe-area-inset-top, 0px) + 0.75rem))",
          right: "max(1rem, env(safe-area-inset-right, 0px))",
        }}
        aria-label="Close"
      >
        <X size={24} strokeWidth={2.25} />
      </button>

      <p
        className="pointer-events-none fixed left-1/2 z-[210] -translate-x-1/2 text-[10px] tabular-nums tracking-[0.2em] text-white/70"
        style={{
          top: "max(1rem, calc(env(safe-area-inset-top, 0px) + 0.75rem))",
          fontFamily: "var(--font-cormorant), Georgia, serif",
        }}
        aria-live="polite"
      >
        {label}
      </p>

      <div
        className="relative z-[205] flex w-full max-w-5xl items-center justify-center gap-2 sm:gap-4"
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

        <div className="relative flex min-h-0 min-w-0 flex-1 items-center justify-center">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            className="absolute right-1 top-1 z-20 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/45 bg-black/70 text-white shadow-md backdrop-blur-sm transition-colors hover:bg-black/90 sm:right-2 sm:top-2 sm:h-11 sm:w-11"
            aria-label="Close image"
          >
            <X size={20} strokeWidth={2.25} />
          </button>
          <img key={src} src={src} alt="" className="max-h-[85vh] w-auto max-w-full object-contain" />
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
    </div>,
    document.body,
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
      return { ...s, index: (s.index - 1 + s.items.length) % s.items.length }
    })
  }, [])

  const goNext = useCallback(() => {
    setLightbox((s) => {
      if (s === null || s.items.length < 2) return s
      return { ...s, index: (s.index + 1) % s.items.length }
    })
  }, [])

  return (
    <>
      <GalleryAtmosphere />

      <main className="gallery-page-root relative z-[2] min-h-screen w-full overflow-visible bg-transparent">
        {/* Unified header — nav (layout) + title share GALLERY_HEADER_GREY via CSS */}
        <header
          className="gallery-page-header w-full max-w-none"
          style={{ backgroundColor: GALLERY_HEADER_GREY }}
        >
          <div className="mx-auto max-w-[1400px] px-5 pb-6 pt-[4.5rem] text-center sm:px-12 md:px-16 md:pb-12 md:pt-24">
            <p
              className="mb-1.5 text-[9px] uppercase tracking-[0.45em] text-[#141414] md:mb-2 md:text-[10px] md:tracking-[0.5em]"
              style={{ fontFamily: "Optima, var(--font-cormorant), Georgia, serif" }}
            >
              Portfolio
            </p>
            <h1
              className="text-4xl font-normal capitalize leading-none text-[#141414] md:text-7xl lg:text-8xl"
              style={{
                fontFamily: "var(--font-calligraphy), 'Allura', cursive",
                letterSpacing: "0.02em",
              }}
            >
              Gallery
            </h1>
          </div>
        </header>

        <div className="relative mx-auto max-w-[1400px] overflow-visible px-5 pb-16 pt-0 sm:px-12 sm:pb-28 md:px-16">
          <section
            id="gallery-nail-art"
            className="relative mb-20 mt-6 flex w-full flex-col items-center justify-center overflow-visible md:mb-[150px] md:mt-12"
          >
            <SectionVideoBackdrop src={VIDEO_FLOWER} />
            <div className="relative z-10 flex w-full flex-col items-center justify-center">
              <CardStack title="Nail art" items={NAIL_ITEMS} onOpen={open} headingInsetClass="pl-[5%] md:pl-[10%]" />
            </div>
          </section>

          <section
            id="gallery-individual"
            className="relative mb-20 flex w-full flex-col items-center justify-center overflow-visible md:mb-[150px]"
          >
            <SectionVideoBackdrop src={VIDEO_2} />
            <div className="relative z-10 flex w-full flex-col items-center justify-center">
              <CardStack title="Individual art" items={INDIVIDUAL_ITEMS} onOpen={open} />
            </div>
          </section>

          <section
            id="gallery-fine-art"
            className="relative flex w-full flex-col items-center justify-center overflow-visible pb-6"
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
    </>
  )
}
