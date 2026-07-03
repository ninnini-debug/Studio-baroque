"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  cancelLuxuryScroll,
  luxuryScrollToHash,
  luxuryScrollToHashWhenReady,
  luxuryScrollToY,
} from "@/lib/luxury-scroll"
import { GALLERY_HEADER_GREY } from "@/lib/gallery-theme"

const TABS = [
  { label: "Home", href: "/" },
  { label: "Prices", href: "/#prices-section" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const

function routeBase(href: string): string {
  const base = href.split("#")[0] || "/"
  return base === "" ? "/" : base
}

function sameRoute(pathname: string, href: string): boolean {
  const base = routeBase(href)
  if (base === "/") return pathname === "/"
  return pathname === base || pathname.startsWith(`${base}/`)
}

export function StickyNav() {
  const pathname = usePathname()
  const router = useRouter()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href.startsWith("/#")) return pathname === "/"
    const base = routeBase(href)
    if (base === "/") return pathname === "/"
    return pathname === base || pathname.startsWith(`${base}/`)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    cancelLuxuryScroll()

    // Same-page anchor (home → #prices): keep 1.5s linear glide only here
    if (href === "/#prices-section") {
      e.preventDefault()
      if (pathname === "/") {
        void luxuryScrollToHash("prices-section")
      } else {
        router.push("/", { scroll: false })
        luxuryScrollToHashWhenReady("prices-section")
      }
      return
    }

    // Home on current page: glide to top only (same document)
    if (href === "/") {
      e.preventDefault()
      if (pathname === "/") {
        void luxuryScrollToY(0)
      } else {
        router.push("/", { scroll: false })
      }
      return
    }

    // Same route, different scroll target (e.g. gallery → gallery): glide to top
    if (sameRoute(pathname, href)) {
      e.preventDefault()
      void luxuryScrollToY(0)
      return
    }

    // Different route: instant navigation, no scroll animation
    e.preventDefault()
    router.push(href, { scroll: false })
  }

  const isGallery = pathname === "/gallery" || pathname.startsWith("/gallery/")

  return (
    <nav
      id="main-site-nav"
      className={`fixed top-0 left-0 right-0 z-[110] flex w-full max-w-none items-center justify-center gap-x-1.5 px-[max(0.375rem,env(safe-area-inset-left))] py-3 sm:gap-x-10 sm:px-4 sm:py-4 md:gap-x-14 ${
        isGallery ? "gallery-nav-band" : "bg-[#FDFCF9]/78"
      }`}
      style={{
        backdropFilter: isGallery ? "none" : "blur(12px)",
        WebkitBackdropFilter: isGallery ? "none" : "blur(12px)",
        backgroundColor: isGallery ? GALLERY_HEADER_GREY : undefined,
        background: isGallery ? GALLERY_HEADER_GREY : undefined,
        paddingTop: "max(0.75rem, env(safe-area-inset-top))",
        paddingBottom: "0.75rem",
        margin: 0,
        borderTop: "none",
        borderBottom: "none",
        outline: "none",
        boxShadow: "none",
      }}
      role="navigation"
      aria-label="Main"
    >
      {TABS.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          scroll={false}
          onClick={(e) => handleNavClick(e, tab.href)}
          className={`
            shrink-0 text-[9px] tracking-[0.1em] uppercase no-underline
            sm:text-[11px] sm:tracking-[0.4em]
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
