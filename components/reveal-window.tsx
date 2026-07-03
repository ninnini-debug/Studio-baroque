/** Reveal ribbon — sticky full-width image clipped as the page scrolls (iOS-stable). */
const REVEAL_IMAGE = "/Untitled%20design%204.png"

export function RevealWindow() {
  return (
    <section
      className="relative z-10 mt-[100px] mb-[100px]"
      aria-label="Reveal window"
    >
      <div
        className="relative h-[min(40vh,300px)] w-full overflow-hidden bg-[#0f0f0f] sm:h-[450px]"
        aria-hidden
      >
        <div className="absolute inset-0 z-10 overflow-hidden border border-[#8D8679]">
          {/* Sticks to viewport while ribbon scrolls — reveals image without JS */}
          <div className="sticky top-0 h-[100svh] w-full">
            <img
              src={REVEAL_IMAGE}
              alt="Nail art detail"
              className="block h-auto w-full max-w-full"
              draggable={false}
            />
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-20"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.08)",
            boxShadow: "inset 0 0 80px rgba(0,0,0,0.25)",
          }}
          aria-hidden
        />
      </div>
    </section>
  )
}
