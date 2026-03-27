"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const TABS = [
  { label: "Home",    href: "/" },
  { label: "Prices",  href: "/#prices-section" },
  { label: "Gallery", href: "/gallery" },
  { label: "About",   href: "/about" },
  { label: "Contact", href: "/contact" },
] as const

export function StickyNav() {
  const pathname = usePathname()
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href.startsWith("/#")) return pathname === "/"
    const base = href.split("#")[0] || href
    if (base === "/") return pathname === "/"
    return pathname === base || pathname.startsWith(`${base}/`)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center gap-10 sm:gap-14 py-4 bg-[#FDFCF9]/78"
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        margin: 0,
        paddingTop: "1rem",
        paddingBottom: "1rem",
        borderTop: "none",
        outline: "none",
      }}
      role="navigation"
      aria-label="Main"
    >
      {TABS.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`
            text-[11px] tracking-[0.4em] uppercase no-underline
            transition-colors duration-200
            ${isActive(tab.href) ? "text-[#1A1A1A]" : "text-[#3A352E] hover:text-[#1A1A1A]"}
          `}
          style={{ fontFamily: "var(--font-cormorant), Optima, Georgia, serif" }}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  )
}
