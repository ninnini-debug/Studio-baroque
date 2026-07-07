import { PriceMenuDisclaimer, PriceMenuSection } from "@/components/price-menu-parts"
import { BackgroundVideo } from "@/components/background-video"
import { PRICES_MENU } from "@/lib/prices-menu"

const IVORY = "#1A1A1A"

export default function PricesPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: "transparent",
      }}
    >
      <div className="pointer-events-none fixed inset-0" style={{ zIndex: 0 }} aria-hidden>
        <BackgroundVideo
          priority
          src="/video.mp4"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            opacity: 1,
          }}
        />
      </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <div className="prices-menu-hero mb-16 flex flex-col items-center">
          <p
            className="mb-3 text-[10px] uppercase tracking-[0.5em] text-center"
            style={{ fontFamily: "Optima, var(--font-cormorant), Georgia, serif", color: IVORY, letterSpacing: "0.5em" }}
          >
            Prices
          </p>
          <h1
            className="text-6xl font-normal leading-none text-center sm:text-7xl md:text-8xl"
            style={{ fontFamily: "var(--font-logo), cursive", color: IVORY }}
          >
            <span className="inline-block" style={{ transform: "translateX(-0.36em)" }}>
              Menu
            </span>
          </h1>
        </div>

        <div className="space-y-16 md:space-y-20">
          {PRICES_MENU.map((section) => (
            <PriceMenuSection key={section.category} section={section} color={IVORY} />
          ))}
        </div>

        <PriceMenuDisclaimer />
      </div>
    </main>
  )
}
