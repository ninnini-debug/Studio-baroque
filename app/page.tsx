import Link from "next/link"
import { PriceMenuDisclaimer, PriceMenuSection } from "@/components/price-menu-parts"
import { PRICES_MENU } from "@/lib/prices-menu"

const CHARCOAL = "#1A1A1A"

export default function HomePage() {
  return (
    <main
      className="home-page-root relative w-full overflow-y-auto"
      style={{ minHeight: "200vh", background: "transparent" }}
    >
      {/* Full-screen video background */}
      <div
        className="pointer-events-none"
        style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1 }}
        aria-hidden
      >
        <video
          className="home-hero-video"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
          }}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src="/video.mp4"
        />
      </div>

      {/* Hero: title + CTA */}
      <section className="relative min-h-[calc(100vh-4rem)] w-full flex flex-col z-10">
        <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-6">
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal text-center"
            style={{
              fontFamily: "var(--font-cormorant), Optima, Georgia, serif",
              color: CHARCOAL,
              letterSpacing: "0.02em",
            }}
          >
            STUDIO BAROQUE
          </h1>
          <p
            className="mt-3 text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-center"
            style={{
              fontFamily: "var(--font-cormorant), Optima, Georgia, serif",
              color: CHARCOAL,
            }}
          >
            Precision. Detail. Artistry
          </p>
        </div>

        <div className="relative z-20 flex justify-center pb-16">
          <Link
            href="/contact"
            className="home-cta text-[10px] tracking-[0.45em] uppercase border px-6 py-2 transition-all duration-300"
            style={{
              fontFamily: "var(--font-cormorant), Optima, Georgia, serif",
              color: CHARCOAL,
              borderWidth: "1px",
              borderColor: CHARCOAL,
            }}
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* Reveal-Window — work photo ribbon, fixed background clipped to box */}
      <section
        style={{
          marginTop: 100,
          marginBottom: 100,
          position: "relative",
          zIndex: 0,
        }}
        aria-label="Reveal window"
      >
        <div
          className="relative w-full overflow-hidden"
          style={{
            height: 450,
            clipPath: "inset(0 0 0 0)",
            WebkitClipPath: "inset(0 0 0 0)",
          }}
          aria-hidden
        >
          {/* Framed inset — photo above vignette layer */}
          <div
            className="absolute z-10 overflow-hidden border border-[#8D8679]"
            style={{
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            {/* cover = fills frame; fixed = image stays put while page scrolls (clipped to this box) */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage: "url(/ladybug2.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center 38%",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
              }}
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.12)",
              boxShadow: "inset 0 0 110px rgba(0,0,0,0.35)",
            }}
            aria-hidden
          />
        </div>
      </section>

      <section
        id="prices-section"
        className="prices-section-root relative"
        style={{
          zIndex: 3,
          scrollMarginTop: "calc(7rem + 40px)",
        }}
      >
        <div className="prices-section-content max-w-3xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="prices-menu-hero mb-16 flex flex-col items-center">
            <p
              className="text-[10px] tracking-[0.5em] uppercase text-center mb-3"
              style={{ fontFamily: "Optima, var(--font-cormorant), Georgia, serif", color: CHARCOAL, letterSpacing: "0.5em" }}
            >
              Prices
            </p>
            <h2
              className="text-6xl sm:text-7xl md:text-8xl font-normal text-center leading-none"
              style={{ fontFamily: "var(--font-logo), cursive", color: CHARCOAL }}
            >
              <span className="inline-block" style={{ transform: "translateX(-0.36em)" }}>
                Menu
              </span>
            </h2>
          </div>

          <div className="space-y-16 md:space-y-20">
            {PRICES_MENU.map((section) => (
              <PriceMenuSection key={section.category} section={section} color={CHARCOAL} />
            ))}
          </div>

          <PriceMenuDisclaimer color={CHARCOAL} />
        </div>
      </section>
    </main>
  )
}
