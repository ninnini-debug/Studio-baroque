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
          zIndex: 0,
        }}
        aria-hidden
      />

      {/* Hero: title + CTA */}
      <section className="relative min-h-[calc(100vh-4rem)] w-full flex flex-col z-20">
        <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-6">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-center tracking-[0.35em]"
            style={{
              fontFamily: "var(--font-cormorant), Optima, Georgia, serif",
              color: IVORY,
            }}
          >
            STUDIO BAROQUE
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

      {/* Intro / Services — scroll to reveal; dark overlay for legibility */}
      <section className="relative z-20 pt-[80vh] pb-20 md:pb-28">
        {/* 20% black overlay so text is crisp over the background */}
        <div
          className="absolute inset-0 bg-black/20"
          aria-hidden
        />
        <div className="relative z-10 px-6 md:px-10 max-w-2xl mx-auto">
          <p
            className="text-[10px] tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-cormorant), Optima, Georgia, serif", color: IVORY, letterSpacing: "0.4em" }}
          >
            SERVICES
          </p>
          <h2
            className="text-3xl md:text-4xl font-light italic mb-8 tracking-[0.08em]"
            style={{ fontFamily: "var(--font-cormorant), Optima, Georgia, serif", color: IVORY }}
          >
            Nail artistry reimagined
          </h2>
          <p
            className="text-[15px] leading-relaxed opacity-90"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: IVORY }}
          >
            Bespoke manicures, gel, acrylics, and custom nail art in West London. Classical elegance meets modern beauty—every set is a collaboration.
          </p>
          <Link
            href="/gallery"
            className="home-cta inline-block mt-10 text-[10px] tracking-[0.45em] uppercase border px-6 py-2 transition-all duration-300"
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
