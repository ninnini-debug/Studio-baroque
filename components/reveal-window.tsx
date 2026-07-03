"use client"

import { useEffect, useRef } from "react"

const REVEAL_IMAGE = "/Untitled%20design%204.png"
const NAV_OFFSET = "4.25rem"

export function RevealWindow() {
  const trackRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const layerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    const container = containerRef.current
    const layer = layerRef.current
    if (!track || !container || !layer) return

    let rafId = 0

    const update = () => {
      rafId = 0
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      if (reduced) {
        layer.style.transform = "translate3d(0, 0, 0)"
        return
      }

      const trackRect = track.getBoundingClientRect()
      if (trackRect.bottom <= 0 || trackRect.top >= window.innerHeight) {
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
      className="reveal-window-section relative z-10 mt-[100px] mb-[100px]"
      aria-label="Reveal window"
    >
      <div
        ref={trackRef}
        className="relative h-[130vh] w-full sm:h-[115vh]"
      >
        <div
          ref={containerRef}
          className="reveal-window-frame sticky z-[5] h-[50vh] min-h-[300px] w-full sm:h-[420px]"
          style={{ top: NAV_OFFSET }}
        >
          <div className="relative h-full overflow-hidden border border-[#8D8679]">
            <div
              ref={layerRef}
              className="absolute left-0 top-0 h-[50vh] min-h-[300px] w-full will-change-transform sm:h-[420px]"
            >
              <img
                src={REVEAL_IMAGE}
                alt="Nail art detail"
                className="absolute inset-0 h-full w-full object-cover object-[center_72%]"
                draggable={false}
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 z-10"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.08)",
                boxShadow: "inset 0 0 80px rgba(0,0,0,0.25)",
              }}
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  )
}
