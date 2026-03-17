"use client"

import { useCallback, useEffect, useState } from "react"

const TABS = [
  { id: "home",    label: "Home",    href: "#home" },
  { id: "gallery", label: "Gallery", href: "#gallery" },
  { id: "services",label: "Services", href: "#services" },
  { id: "contact", label: "Contact", href: "#contact" },
] as const

export function NavTabs() {
  const [active, setActive] = useState<string>("home")

  const updateActive = useCallback(() => {
    if (typeof window === "undefined") return
    const threshold = 200
    let current = "home"
    TABS.forEach((tab) => {
      const el = document.getElementById(tab.id)
      if (!el) return
      const { top } = el.getBoundingClientRect()
      if (top <= threshold) current = tab.id
    })
    setActive(current)
  }, [])

  useEffect(() => {
    updateActive()
    window.addEventListener("scroll", updateActive, { passive: true })
    return () => window.removeEventListener("scroll", updateActive)
  }, [updateActive])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center gap-10 sm:gap-14 py-4 bg-[#0D1616]/90 backdrop-blur-md border-b border-[#C9A962]/20"
      role="tablist"
      aria-label="Main navigation"
    >
      {TABS.map((tab) => (
        <a
          key={tab.id}
          href={tab.href}
          role="tab"
          aria-selected={active === tab.id}
          className={`
            text-[11px] tracking-[0.4em] uppercase no-underline
            transition-colors duration-200
            ${active === tab.id ? "text-[#F2EDE4]" : "text-[#6B7568] hover:text-[#F2EDE4]/80"}
          `}
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          {tab.label}
        </a>
      ))}
    </nav>
  )
}
