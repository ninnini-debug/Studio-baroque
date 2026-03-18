import Link from "next/link"

const IVORY = "#E5DFD3"

export default function HomePage() {
  return (
    <main
      className="relative w-full overflow-y-auto"
      style={{ minHeight: "200vh" }}
    >
      {/* Sticky/fixed background — Mandy effect: art stays still while text moves */}
      <div
        className="fixed inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url(/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          zIndex: -3,
        }}
        aria-hidden
      />
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.18) 70%, rgba(0,0,0,0.32) 100%)",
          boxShadow: "inset 0 0 120px rgba(0,0,0,0.28)",
          zIndex: -2,
        }}
        aria-hidden
      />

      {/* Hero: title + CTA */}
      <section className="relative min-h-[calc(100vh-4rem)] w-full flex flex-col z-10">
        <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-6">
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal text-center"
            style={{
              fontFamily: "var(--font-logo), cursive",
              color: IVORY,
              letterSpacing: "0.02em",
            }}
          >
            Studio Baroque
          </h1>
        </div>

        <div className="relative z-20 flex justify-center pb-16">
          <Link
            href="/contact"
            className="home-cta text-[10px] tracking-[0.45em] uppercase border px-6 py-2 transition-all duration-300"
            style={{
              fontFamily: "var(--font-cormorant), Optima, Georgia, serif",
              color: IVORY,
              borderWidth: "1px",
              borderColor: IVORY,
            }}
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* Reveal-Window — slim 300px ribbon, fixed background clipped to box */}
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
          style={{
            height: 300,
            width: "100%",
            overflow: "hidden",
            clipPath: "inset(0 0 0 0)",
            WebkitClipPath: "inset(0 0 0 0)",
            backgroundImage: "url(/landscape-banner.jpg)",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          aria-hidden
        />
      </section>

      {/* Cover-up section — solid blanket over the banner */}
      <section
        className="cover-up-section"
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
        }}
      >
        <div className="flex justify-center pt-32 pb-20 md:pb-28">
          <Link
            href="/gallery"
            className="home-cta text-[10px] tracking-[0.45em] uppercase border px-6 py-2 transition-all duration-300"
            style={{
              fontFamily: "var(--font-cormorant), Optima, Georgia, serif",
              color: IVORY,
              borderWidth: "1px",
              borderColor: IVORY,
            }}
          >
            View Gallery
          </Link>
        </div>
      </section>
    </main>
  )
}
