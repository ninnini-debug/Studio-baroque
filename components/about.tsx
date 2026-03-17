const STATUE_BG = "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=1400&q=85"

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div
        className="about-statue-bg"
        style={{ backgroundImage: `url(${STATUE_BG})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[#0D1616]/60 z-[1]" aria-hidden />
      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 pt-16">
        <p
          className="text-[10px] tracking-[0.5em] uppercase text-[#C9A962] mb-4"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          The Artist
        </p>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-light text-[#F2EDE4] mb-10"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Meet Nina
        </h2>
        <div
          className="space-y-6 text-[#B8B4A8] leading-relaxed text-[15px] md:text-base"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <p>
            With 17 years dedicated to the arts and over 4 years perfecting the craft of nail artistry,
            I bring a unique perspective to every set I create.
          </p>
          <p>
            Studio Baroque was born from a desire to merge classical elegance with modern beauty.
            Every appointment is a collaborative experience where your vision meets my artistry.
          </p>
        </div>
      </div>
    </section>
  )
}
