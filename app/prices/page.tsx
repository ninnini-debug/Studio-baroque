import { PriceCategoryHeader, PriceMenuDisclaimer, PriceMenuRow } from "@/components/price-menu-parts"
import { PRICES_MENU } from "@/lib/prices-menu"

const IVORY = "#1A1A1A"

export default function PricesPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: "#FDFCF9",
      }}
    >
      <div className="pointer-events-none fixed inset-0" style={{ zIndex: 0 }} aria-hidden>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
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
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          zIndex: 1,
          background: "rgba(253,252,249,0.78)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <div className="mb-16 flex flex-col items-center">
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

        <div className="space-y-24">
          {PRICES_MENU.map((section) => (
            <section key={section.category} className="space-y-6">
              <div
                className="px-7 py-8 md:px-12 md:py-10"
                style={{
                  backgroundColor: "rgba(253, 252, 249, 0.7)",
                  border: "1px solid #8D8679",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <div className="mb-6">
                  <PriceCategoryHeader title={section.category} color={IVORY} />
                </div>

                <div style={{ border: "1px solid rgba(141, 134, 121, 0.35)", maxWidth: 560, margin: "0 auto" }}>
                  {section.items.map((item, idx) => (
                    <div
                      key={`${section.category}-${item.name}`}
                      style={
                        idx < section.items.length - 1
                          ? { borderBottom: "1px solid rgba(141, 134, 121, 0.3)" }
                          : undefined
                      }
                    >
                      <PriceMenuRow item={item} color={IVORY} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        <PriceMenuDisclaimer color={IVORY} />
      </div>
    </main>
  )
}
