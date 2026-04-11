"use client"

import { animate } from "framer-motion"

/** ~1.5s glide — constant speed (linear), predictable start-to-stop. */
export const LUXURY_SCROLL_DURATION_S = 1.5

let active: ReturnType<typeof animate> | null = null
/** Bumps when cancelling so pending `luxuryScrollToHashWhenReady` RAF loops exit. */
let hashPollGen = 0

function cancelActive() {
  active?.stop()
  active = null
}

/** Stops any in-flight luxury scroll and aborts hash polling (e.g. before instant route change). */
export function cancelLuxuryScroll() {
  cancelActive()
  hashPollGen++
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function clampScrollY(y: number): number {
  const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
  return Math.min(Math.max(0, y), max)
}

function getNavHeightPx(): number {
  const nav = document.getElementById("main-site-nav")
  if (!nav) return 96
  return Math.ceil(nav.getBoundingClientRect().height)
}

/**
 * Scrolls the window so `el` lands with correct top offset:
 * uses CSS `scroll-margin-top` when set (e.g. #prices-section), otherwise nav height + buffer.
 */
export function luxuryScrollToElement(el: HTMLElement): Promise<void> {
  const marginStr = getComputedStyle(el).scrollMarginTop
  const marginPx = parseFloat(marginStr) || 0
  const navH = getNavHeightPx()
  const offsetTop = marginPx > 0 ? marginPx : navH + 12
  const rect = el.getBoundingClientRect()
  const targetY = clampScrollY(rect.top + window.scrollY - offsetTop)
  return luxuryScrollToY(targetY)
}

export function luxuryScrollToY(targetY: number): Promise<void> {
  return new Promise((resolve) => {
    cancelActive()
    const clamped = clampScrollY(targetY)
    const start = window.scrollY

    if (Math.abs(start - clamped) < 1) {
      resolve()
      return
    }

    if (prefersReducedMotion()) {
      window.scrollTo(0, clamped)
      resolve()
      return
    }

    const anim = animate(start, clamped, {
      type: "tween",
      duration: LUXURY_SCROLL_DURATION_S,
      ease: "linear",
      onUpdate: (latest) => {
        window.scrollTo(0, latest)
      },
    })
    active = anim
    void anim.then(() => {
      active = null
      window.scrollTo(0, clamped)
      resolve()
    })
  })
}

/** Same-page hash target. */
export function luxuryScrollToHash(elementId: string): Promise<void> {
  const el = document.getElementById(elementId)
  if (!el) return Promise.resolve()
  return luxuryScrollToElement(el)
}

/**
 * After `router.push('/')`, the target may not exist yet — poll until it mounts, then glide.
 * Aborted when `cancelLuxuryScroll()` runs (e.g. user navigates away).
 */
export function luxuryScrollToHashWhenReady(elementId: string): void {
  const myGen = ++hashPollGen
  let frames = 0
  const maxFrames = 180

  const tick = () => {
    if (myGen !== hashPollGen) return
    const el = document.getElementById(elementId)
    if (el) {
      void luxuryScrollToElement(el)
      return
    }
    if (frames++ >= maxFrames) return
    requestAnimationFrame(tick)
  }

  // Defer until after ScrollToTop’s useLayoutEffect (setTimeout 0) so (0,0) runs before the glide.
  setTimeout(() => {
    requestAnimationFrame(tick)
  }, 0)
}
