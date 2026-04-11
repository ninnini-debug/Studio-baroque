"use client"

import { usePathname } from "next/navigation"

/**
 * Persistent fixed border so it doesn’t unmount/remount on client navigations — only visibility toggles.
 */
export function GalleryFrame() {
  const pathname = usePathname()
  const show = pathname === "/gallery" || pathname.startsWith("/gallery/")

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] box-border border-[40px] border-solid border-[#FDFCF9] transition-none"
      aria-hidden
      style={{
        opacity: show ? 1 : 0,
        visibility: show ? "visible" : "hidden",
      }}
    />
  )
}
