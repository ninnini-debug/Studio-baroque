"use client"

import Link from "next/link"
import { CalendarDays, Images, UserRound } from "lucide-react"

const poleLinks = [
  { href: "#contact", label: "Booking",  Icon: CalendarDays },
  { href: "#gallery", label: "Gallery",  Icon: Images },
  { href: "#about",   label: "About",    Icon: UserRound },
]

export function SidePole() {
  return (
    <div
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-0"
      aria-label="Section navigation"
    >
      <div className="w-px flex-1 min-h-[48px] bg-[#5C6B5C]/50" />

      <div className="flex flex-col items-center gap-6 py-4">
        {poleLinks.map(({ href, label, Icon }) => (
          <Link
            key={href}
            href={href}
            aria-label={label}
            className="group relative flex flex-col items-center"
          >
            <span className="
              w-9 h-9 flex items-center justify-center
              rounded-full border border-[#5C6B5C]/50
              bg-[#354035]/90 backdrop-blur-sm
              text-[#5C6B5C]
              group-hover:border-[#E8E2D8]/60
              group-hover:text-[#F2EDE4]
              group-hover:bg-[#3D493D]
              transition-all duration-300
            ">
              <Icon className="w-4 h-4" strokeWidth={1.25} />
            </span>

            <span className="
              absolute right-11 top-1/2 -translate-y-1/2
              px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase
              whitespace-nowrap
              bg-[#3D493D] border border-[#5C6B5C]/40 text-[#F2EDE4]
              opacity-0 translate-x-2
              group-hover:opacity-100 group-hover:translate-x-0
              transition-all duration-300 pointer-events-none
              [font-family:var(--font-cormorant),Georgia,serif]
            ">
              {label}
            </span>
          </Link>
        ))}
      </div>

      <div className="w-px flex-1 min-h-[48px] bg-[#5C6B5C]/50" />
    </div>
  )
}
