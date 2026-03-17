import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#5C6B5C]/30 bg-[#2D382D]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">

          <div>
            <Link href="/" className="inline-block">
              <span
                className="text-xl font-semibold tracking-widest text-[#F2EDE4] block"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Studio Baroque
              </span>
              <span
                className="text-[9px] tracking-[0.45em] text-[#5C6B5C] uppercase mt-0.5 block"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Nail Artistry · West London
              </span>
            </Link>
            <p
              className="mt-6 text-sm text-[#9A9588] leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Bespoke nail artistry in West London. Where classical elegance meets modern beauty.
            </p>
          </div>

          <div>
            <h4
              className="text-[10px] tracking-[0.45em] uppercase text-[#5C6B5C] mb-5"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "#about",   label: "About Nina" },
                { href: "#services",label: "Services & Pricing" },
                { href: "#gallery", label: "Portfolio" },
                { href: "#contact", label: "Book Appointment" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-[#9A9588] hover:text-[#F2EDE4] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4
              className="text-[10px] tracking-[0.45em] uppercase text-[#5C6B5C] mb-5"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/studiobaroque"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[#5C6B5C]/40 text-[#9A9588] hover:text-[#F2EDE4] hover:border-[#5C6B5C]/70 transition-all duration-300"
                aria-label="Follow on Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:hello@studiobaroque.com"
                className="w-10 h-10 flex items-center justify-center border border-[#5C6B5C]/40 text-[#9A9588] hover:text-[#F2EDE4] hover:border-[#5C6B5C]/70 transition-all duration-300"
                aria-label="Send email"
              >
                <Mail size={16} />
              </a>
            </div>
            <p className="mt-6 text-sm text-[#9A9588]" style={{ fontFamily: "var(--font-sans)" }}>
              West London, UK
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#5C6B5C]/25 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-[#9A9588]/80 tracking-wide" style={{ fontFamily: "var(--font-sans)" }}>
            © {currentYear} Studio Baroque. All rights reserved.
          </p>
          <p className="text-[11px] text-[#5C6B5C]/80 tracking-[0.2em]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
            Crafted with artistry
          </p>
        </div>
      </div>
    </footer>
  )
}
