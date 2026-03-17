const LANDING_IMAGE = "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1920&q=90"

export function Landing() {
  return (
    <section id="home" className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${LANDING_IMAGE})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[#0D1616]/20" aria-hidden />
      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <span
          className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] font-extralight tracking-[0.35em] uppercase text-[#F2EDE4]"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Studio Baroque
        </span>
      </div>
    </section>
  )
}
