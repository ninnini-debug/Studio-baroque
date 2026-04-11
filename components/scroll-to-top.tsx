"use client"

import { usePathname } from "next/navigation"
import { useLayoutEffect, useRef } from "react"

/**
 * Resets `window` scroll on client route changes. Same-pathname anchor clicks
 * (Luxury Glide) do not change pathname, so they are unaffected.
 * Uses `useLayoutEffect` so (0,0) applies before paint — content moves under the fixed gallery frame without animation.
 */
export function ScrollToTop() {
  const pathname = usePathname()
  const isFirstPaint = useRef(true)

  useLayoutEffect(() => {
    if (isFirstPaint.current) {
      isFirstPaint.current = false
      return
    }
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
