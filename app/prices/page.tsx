const IVORY = "#1A1A1A"

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
        color: IVORY,
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
            color: IVORY,
            paddingLeft: shiftRight ? 8 : undefined,
          }}
        >
          {item.name}
        </div>
        <div
          className="text-[13px] md:text-[14px] tracking-[0.12em] whitespace-nowrap"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: IVORY, letterSpacing: "0.12em" }}
        >
          {item.price}
        </div>
      </div>
      {item.note ? (
        <div className="mt-2 text-[12px] opacity-75" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: IVORY }}>
          {item.note}
        </div>
      ) : null}
    </div>
  )
}

export default function PricesPage() {
  return (
    <main
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundColor: "#FDFCF9",
      }}
    >
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} aria-hidden>
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
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: "rgba(253,252,249,0.78)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
        aria-hidden
      />
      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="flex flex-col items-center mb-16">
          <p
            className="text-[10px] tracking-[0.5em] uppercase text-center mb-3"
            style={{ fontFamily: "Optima, var(--font-cormorant), Georgia, serif", color: IVORY, letterSpacing: "0.5em" }}
          >
            Prices
          </p>
          <h1
            className="text-6xl sm:text-7xl md:text-8xl font-normal text-center leading-none"
            style={{ fontFamily: "var(--font-logo), cursive", color: IVORY }}
          >
            <span className="inline-block" style={{ transform: "translateX(-0.36em)" }}>
              Menu
            </span>
          </h1>
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

        <p
          className="mt-16 text-[12px] opacity-70 text-center"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: IVORY }}
        >
          Replace the “£—” placeholders with your exact prices and I’ll format everything perfectly.
        </p>
      </div>
    </main>
  )
}

