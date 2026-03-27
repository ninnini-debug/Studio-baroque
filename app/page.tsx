import Link from "next/link"

const CHARCOAL = "#1A1A1A"

type PriceItem = {
  name: string
  price: string
  note?: string
}

const PRICES: Array<{
  category: "Acrylics" | "Gel & Gel X" | "Nail Art"
  items: PriceItem[]
}> = [
  {
    category: "Acrylics",
    items: [
      { name: "Full Set", price: "£—" },
      { name: "Infill", price: "£—" },
      { name: "Removal", price: "£—" },
    ],
  },
  {
    category: "Gel & Gel X",
    items: [
      { name: "Gel Manicure", price: "£—" },
      { name: "Gel X", price: "£—" },
      { name: "Removal", price: "£—" },
    ],
  },
  {
    category: "Nail Art",
    items: [
      { name: "Simple Art (per nail)", price: "£—" },
      { name: "Detailed Art (per nail)", price: "£—" },
      { name: "Charms / 3D (from)", price: "£—" },
    ],
  },
]

function CategoryHeader({ title }: { title: string }) {
  return (
    <h2
      className="text-[11px] md:text-[12px] tracking-[0.45em] uppercase text-center font-semibold"
      style={{
        fontFamily: "Optima, var(--font-cormorant), Georgia, serif",
        color: CHARCOAL,
        letterSpacing: "0.45em",
      }}
    >
      {title}
    </h2>
  )
}

function PriceRow({ item }: { item: PriceItem }) {
  const shiftRight =
    item.name === "Full Set" ||
    item.name === "Infill" ||
    item.name === "Removal" ||
    item.name === "Gel Manicure" ||
    item.name === "Gel X" ||
    item.name === "Simple Art (per nail)" ||
    item.name === "Detailed Art (per nail)" ||
    item.name === "Charms / 3D (from)"
  return (
    <div className="py-4">
      <div className="flex items-baseline justify-between gap-6">
        <div
          className="text-[16px] md:text-[17px] leading-snug"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            color: CHARCOAL,
            paddingLeft: shiftRight ? 8 : undefined,
          }}
        >
          {item.name}
        </div>
        <div
          className="text-[13px] md:text-[14px] tracking-[0.12em] whitespace-nowrap"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: CHARCOAL, letterSpacing: "0.12em" }}
        >
          {item.price}
        </div>
      </div>
      {item.note ? (
        <div className="mt-2 text-[12px] opacity-75" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: CHARCOAL }}>
          {item.note}
        </div>
      ) : null}
    </div>
  )
}

export default function HomePage() {
  return (
    <main
      className="relative w-full overflow-y-auto"
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
          {/* Framed inset — ladybug fills the inner border only */}
          <div
            className="absolute overflow-hidden border border-[#8D8679]"
            style={{
              top: "1.5rem",
              right: "1.5rem",
              bottom: "1.5rem",
              left: "1.5rem",
            }}
          >
            <img
              src="/ladybug.jpg"
              alt=""
              className="pointer-events-none select-none"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center bottom",
              }}
              draggable={false}
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0"
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
        className="relative"
        style={{
          zIndex: 3,
          background: "transparent",
          scrollMarginTop: "7rem",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(253,252,249,0) 0%, rgba(253,252,249,0.12) 100%)",
          }}
          aria-hidden
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="flex flex-col items-center mb-16">
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

          <div className="space-y-24">
            {PRICES.map((section) => (
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
                    <CategoryHeader title={section.category} />
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
                        <PriceRow item={item} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
