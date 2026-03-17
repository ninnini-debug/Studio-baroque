const CANDLE_IMAGE = "https://images.unsplash.com/photo-1602874801006-4e411e9f1ab2?w=800&q=80"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-start justify-start pt-28 pb-20 overflow-hidden">
      {/* Corner brackets — L-shaped frame */}
      <div className="absolute top-20 left-6 w-12 h-12 border-l border-t border-[#F2EDE4]/60 z-20" aria-hidden />
      <div className="absolute top-20 right-6 w-12 h-12 border-r border-t border-[#F2EDE4]/60 z-20" aria-hidden />
      <div className="absolute bottom-20 left-6 w-12 h-12 border-l border-b border-[#F2EDE4]/60 z-20" aria-hidden />
      <div className="absolute bottom-20 right-6 w-12 h-12 border-r border-b border-[#F2EDE4]/60 z-20" aria-hidden />

      {/* Candle — bottom-right, blurred, subtle glow */}
      <div
        className="absolute bottom-0 right-0 w-[45%] max-w-[520px] h-[55%] max-h-[420px] z-0 opacity-[0.14] pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${CANDLE_IMAGE})`,
            filter: "blur(6px) brightness(0.9)",
          }}
        />
      </div>

      {/* Main content — left-aligned */}
      <div className="relative z-10 max-w-2xl px-8 sm:px-12 lg:px-16 pt-4">
        {/* West London */}
        <p
          className="text-[10px] tracking-[0.5em] uppercase text-[#E8E2D8]/90 mb-8"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          West London
        </p>

        {/* Main headline — sage green, large serif */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight text-[#6B7B6A]"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Nail Artistry Reimagined
        </h1>

        {/* Tagline — light grey/off-white */}
        <p
          className="mt-8 text-base sm:text-lg text-[#E8E2D8]/85 leading-relaxed max-w-md"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Where baroque elegance meets modern precision. Every set crafted with 17 years of artistic mastery.
        </p>
      </div>
    </section>
  )
}
