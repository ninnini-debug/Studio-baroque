"use client"

import { useEffect, useRef, useState } from "react"

export function AboutBioReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) {
      setVisible(true)
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      id="about-bio-section"
      className="w-[85%] max-w-[1400px] mx-auto scroll-mt-28"
    >
      <div className="about-bio-misty">
        <div className={`about-bio-misty-inner about-bio-reveal ${visible ? "visible" : ""}`}>
          {children}
        </div>
      </div>
    </div>
  )
}
