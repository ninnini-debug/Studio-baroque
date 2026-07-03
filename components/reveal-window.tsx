"use client"

import { useEffect, useRef, useState } from "react"

/** Reveal ribbon image — iOS-safe (no background-attachment: fixed). */
const REVEAL_IMAGE = "/Untitled%20design%204.png"

export function RevealWindow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [imageTop, setImageTop] = useState(0)

  useEffect(() => {
    const update = () => {
      const el = containerRef.current
      if (!el) return

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      if (reduced) {
        setImageTop(0)
        return
      }

      const rect = el.getBoundingClientRect()
      setImageTop(-rect.top)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
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
            className="pointer-events-none absolute left-0 w-full"
            style={{
              top: imageTop,
              height: "100vh",
            }}
          >
            <img
              src={REVEAL_IMAGE}
              alt=""
              className="h-full w-full object-cover object-center sm:object-[center_38%]"
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
