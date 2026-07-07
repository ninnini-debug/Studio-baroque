import { AboutBioReveal } from "@/components/about-bio-reveal"
import { BackgroundVideo } from "@/components/background-video"
import { PageEditorialHeader, PortraitSectionHeader } from "@/components/editorial/page-header"

const ARTIST_PORTRAIT = "/IMG_9037.jpg"

export default function AboutPage() {
  return (
    <main className="about-page-root relative w-full min-h-screen overflow-visible bg-transparent">
      {/* Fixed video — full viewport, behind UI */}
      <div className="about-page-video-layer home-hero-video">
        <BackgroundVideo priority src="/studio-process.mp4" />
      </div>

      {/* Opening headline over video */}
      <div
        className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center bg-transparent px-6"
        style={{ height: "100vh", width: "100vw" }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display), Cinzel, Georgia, serif",
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

      {/* Editorial cream section — scrolls over video */}
      <section className="about-cream-curtain w-full pt-[15vh] pb-20 md:pb-28">
        <div className="relative z-[1] mx-auto w-full max-w-[1400px] px-6 md:px-10">
          <AboutBioReveal>
            <div className="mx-auto mb-10 max-w-xl text-center md:mb-12">
              <PageEditorialHeader
                eyebrow="About"
                title="Meet the Artist"
                titleStyle="display"
                className="mx-auto"
              />
            </div>

            <div className="about-editorial-body mx-auto max-w-3xl space-y-8 md:space-y-10">
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

          <div className="mt-16 md:mt-20">
            <PortraitSectionHeader>The Artist Portrait</PortraitSectionHeader>
          </div>

          <div className="relative mt-10 flex justify-center md:mt-12">
            <div className="film-portrait-frame">
              <div className="film-portrait-image-wrap">
                <img
                  src={ARTIST_PORTRAIT}
                  alt="Artist portrait"
                  className="h-full w-full scale-[1.02] object-cover"
                  style={{ filter: "contrast(1.28) brightness(0.94) grayscale(1)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
