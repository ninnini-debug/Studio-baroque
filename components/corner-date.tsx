"use client"

import { useEffect, useState } from "react"

export function CornerDate() {
  const [label, setLabel] = useState("")
  const [iso, setIso] = useState("")

  useEffect(() => {
    const d = new Date()
    setIso(d.toISOString().slice(0, 10))
    setLabel(
      d.toLocaleDateString("en-GB", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    )
  }, [])

  return (
    <time
      dateTime={iso || undefined}
      className="pointer-events-none fixed top-4 right-4 z-[60] text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-[#3A352E] md:right-8"
      style={{ fontFamily: "var(--font-cormorant), Optima, Georgia, serif" }}
    >
      {label || "\u00a0"}
    </time>
  )
}
