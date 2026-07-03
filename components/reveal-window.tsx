"use client"

import { useEffect, useRef } from "react"

/** Reveal ribbon image — iOS-safe parallax without React scroll re-renders. */
const REVEAL_IMAGE = "/Untitled%20design%204.png"

export function RevealWindow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageLayerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const layer = imageLayerRef.current
    if (!container || !layer) return

    let rafId = 0

    const update = () => {
      rafId = 0
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      if (reduced) {
        layer.style.transform = "translate3d(0, 0, 0)"
        return
      }

      const rect = container.getBoundingClientRect()
      const y = Math.round(-rect.top)
      layer.style.transform = `translate3d(0, ${y}px, 0)`
    }

    const scheduleUpdate = () => {
      if (rafId) return
      rafId = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", scheduleUpdate, { passive: true })
    window.addEventListener("resize", scheduleUpdate)
    return () => {
      window.removeEventListener("scroll", scheduleUpdate)
      window.removeEventListener("resize", scheduleUpdate)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section
      className="relative z-10 mt-[100px] mb-[100px]"
      aria-label="Reveal window"
    >
      <div
        ref={containerRef}
        className="relative h-[min(42vh,320px)] w-full overflow-hidden sm:h-[450px]"
        aria-hidden
      >
        <div className="absolute inset-0 z-10 overflow-hidden border border-[#8D8679]">
          <div
            ref={imageLayerRef}
            className="pointer-events-none absolute left-0 w-full will-change-transform"
            style={{ top: 0, height: "100vh" }}
          >
            <img
              src={REVEAL_IMAGE}
              alt=""
              className="h-full w-full origin-center scale-[0.82] object-cover object-center sm:scale-[0.88] sm:object-[center_38%]"
              draggable={false}
            />
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.12)",
            boxShadow: "inset 0 0 110px rgba(0,0,0,0.35)",
          }}
          aria-hidden
        />
      </div>
    </section>
  )
}
