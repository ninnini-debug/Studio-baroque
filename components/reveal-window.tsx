/** Reveal ribbon — full nail image sticks to viewport while page scrolls past (no JS). */
const REVEAL_IMAGE = "/Untitled%20design%204.png"

export function RevealWindow() {
  return (
    <section
      className="relative z-10 mt-[100px] mb-[100px]"
      aria-label="Reveal window"
    >
      <div className="relative w-full bg-[#0f0f0f]">
        <div className="sticky top-0 z-[5] overflow-hidden border border-[#8D8679]">
          <img
            src={REVEAL_IMAGE}
            alt="Nail art detail"
            className="block h-auto w-full max-w-full"
            draggable={false}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.08)",
              boxShadow: "inset 0 0 80px rgba(0,0,0,0.25)",
            }}
            aria-hidden
          />
        </div>
        {/* Scroll runway — page keeps moving while image stays pinned */}
        <div className="h-[35vh] sm:h-[28vh]" aria-hidden />
      </div>
    </section>
  )
}
