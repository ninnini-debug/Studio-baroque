const MARBLE_BUST = "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=1200&q=85"
const ORCHID = "https://images.unsplash.com/photo-1510883056135-32418a5d4d2b?w=1200&q=85"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <div
        className="about-watermark absolute top-0 left-0 w-full h-full max-w-[80vw] max-h-[80vh]"
        style={{ backgroundImage: `url(${MARBLE_BUST})`, top: "10%", left: "5%" }}
        aria-hidden
      />
      <div
        className="about-watermark absolute top-1/2 right-0 w-[70%] h-[60%]"
        style={{ backgroundImage: `url(${ORCHID})`, top: "40%", right: "-10%" }}
        aria-hidden
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <p
          className="text-[10px] tracking-[0.5em] uppercase text-[#C9A962] mb-4"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          The Artist
        </p>
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-light text-[#F2EDE4] mb-12"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Behind the Paintbrush
        </h1>
        <div
          className="space-y-6 text-[#B8B4A8] leading-relaxed text-[15px] md:text-base"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <p>
            With 17 years dedicated to the arts and over 4 years perfecting the craft of nail artistry,
            I bring a unique perspective to every set I create.
          </p>
          <p>
            My journey began with a brush in hand—exploring every medium from oils to watercolours,
            sculptures to digital art. This lifelong passion for precision and detail naturally evolved
            into nail artistry: a canvas that travels with you.
          </p>
          <p>
            Studio Baroque was born from a desire to merge classical elegance with modern beauty.
            Every appointment is a collaborative experience where your vision meets my artistry.
          </p>
        </div>

        <div className="mt-24 md:mt-32 flex justify-center">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border border-[#C9A962]/50 bg-[#0D1212] flex items-center justify-center overflow-hidden">
            <span
              className="text-[10px] tracking-[0.4em] uppercase text-[#8A8A82] text-center px-4"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Portrait
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
