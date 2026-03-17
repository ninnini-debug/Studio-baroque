"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const TABS = [
  { label: "Home",    href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "About",   href: "/about" },
  { label: "Contact", href: "/contact" },
] as const

export function StickyNav() {
  const pathname = usePathname()
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center gap-10 sm:gap-14 py-4 bg-transparent"
      style={{ backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
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
            ${isActive(tab.href) ? "text-[#E5DFD3]" : "text-[#E5DFD3]/70 hover:text-[#E5DFD3]"}
          `}
          style={{ fontFamily: "var(--font-cormorant), Optima, Georgia, serif" }}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  )
}
