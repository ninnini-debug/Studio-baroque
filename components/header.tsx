"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#about",    label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery",  label: "Gallery" },
  { href: "#contact",  label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#354035]/95 backdrop-blur-md border-b border-[#5C6B5C]/25">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo — sage green, all caps, thin serif */}
          <Link href="/" className="flex flex-col group">
            <span
              className="text-xl font-medium tracking-[0.28em] uppercase text-[#6B7B6A] group-hover:text-[#7D8E7A] transition-colors"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Studio Baroque
            </span>
            <span
              className="text-[9px] tracking-[0.45em] text-[#9A9588] uppercase mt-0.5"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Nail Artistry · West London
            </span>
          </Link>

          {/* Desktop Nav — sage green, all caps */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] tracking-[0.35em] uppercase text-[#6B7B6A] hover:text-[#7D8E7A] transition-colors duration-300"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="
                px-5 py-2.5 border border-[#F2EDE4]/80
                text-[#F2EDE4] text-[11px] tracking-[0.35em] uppercase
                hover:bg-[#F2EDE4]/10 hover:border-[#F2EDE4]
                transition-all duration-300
              "
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Book Now
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#6B7B6A] hover:text-[#F2EDE4] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#354035] border-t border-[#5C6B5C]/25">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base tracking-[0.2em] uppercase text-[#6B7B6A] hover:text-[#F2EDE4] transition-colors py-1.5"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 px-6 py-3 border border-[#F2EDE4]/80 text-[#F2EDE4] text-center text-[11px] tracking-[0.35em] uppercase"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
