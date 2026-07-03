/** Reveal ribbon — static full-width image (stable on iOS, no parallax shake). */
const REVEAL_IMAGE = "/Untitled%20design%204.png"

export function RevealWindow() {
  return (
    <section
      className="relative z-10 mt-[100px] mb-[100px]"
      aria-label="Reveal window"
    >
      <div className="relative w-full overflow-hidden bg-[#0f0f0f]" aria-hidden>
        <div className="relative z-10 overflow-hidden border border-[#8D8679]">
          <img
            src={REVEAL_IMAGE}
            alt="Nail art detail"
            className="block h-auto w-full max-w-full object-contain object-center"
            draggable={false}
          />
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
