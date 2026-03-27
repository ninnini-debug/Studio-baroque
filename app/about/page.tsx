import { AboutBioReveal } from "@/components/about-bio-reveal"

const ARTIST_PORTRAIT = "/IMG_9037.jpg"

export default function AboutPage() {
  return (
    <main className="about-page-root relative w-full min-h-screen overflow-visible bg-transparent">
      {/* Fixed video — full viewport, behind UI */}
      <div className="about-page-video-layer home-hero-video">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src="/studio-process.mp4"
          aria-hidden
        />
      </div>

      {/* Transparent full-viewport flex layer — "Behind the Paintbrush" centered (fixed so it stays centered over video until cream covers) */}
      <div
        className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center bg-transparent px-6"
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display), 'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
            letterSpacing: "0.5rem",
            fontWeight: 300,
            textTransform: "uppercase",
            color: "#FDFCF9",
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          Behind the Paintbrush
        </h1>
      </div>

      {/* Meet the Artist — margin-top:100vh in CSS: first screen is video + headline; then cream curtain */}
      <section className="about-cream-curtain w-full pt-[15vh] pb-20 md:pb-28">
        <div className="w-full">
          <AboutBioReveal>
            <p
              className="text-[17px] md:text-[22px] lg:text-[24px] tracking-[0.45em] md:tracking-[0.5em] uppercase text-[#1A1A1A] text-center mb-10 md:mb-12"
              style={{ fontFamily: "var(--font-display), 'Playfair Display', serif" }}
            >
              MEET THE ARTIST
            </p>
            <div className="space-y-8 md:space-y-10 text-center text-[#1A1A1A]">
              <p>
                I&apos;ve been making art for as long as I can remember. Art was never something I just
                &ldquo;picked up&rdquo;, it is how I see the world. Over time, I put my creativity into doing
                nails. I found a way to combine detail, precision and personality into every set I create in a
                way that feels completely my own.
              </p>
              <p>
                The balance between expression and discipline is what I love most about nail art. Every set is a
                new opportunity to create something intentional that is carefully designed down to the smallest
                detail.
              </p>
              <p>
                This isn&apos;t just about getting your nails done, it&apos;s about creating something that feels
                personal and thoughtfully made. It&apos;s a chance to connect with one another and create new
                relationships. It&apos;s a space to relax and talk or simply enjoy a quiet moment without any
                pressure.
              </p>
              <p>
                The space is all yours. A chance to have a mini canvas on each nail to carry around with you
                anywhere. And to share a collaborative experience where your vision meets my artistry.
              </p>
            </div>
          </AboutBioReveal>

          <div className="relative mt-28 md:mt-40 flex justify-center px-6 md:px-10">
            <div className="film-portrait-frame">
              <div className="film-portrait-image-wrap">
                <img
                  src={ARTIST_PORTRAIT}
                  alt="Artist portrait"
                  className="w-full h-full object-cover scale-[1.02]"
                  style={{ filter: "contrast(1.28) brightness(0.94)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
