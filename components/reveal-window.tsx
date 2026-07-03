/** Reveal ribbon — full nail image sticks to viewport while page scrolls past (no JS). */
const REVEAL_IMAGE = "/Untitled%20design%204.png"

export function RevealWindow() {
  return (
    <section
      className="relative z-10 mt-[100px] mb-[100px]"
      aria-label="Reveal window"
    >
      <div className="relative w-full">
        <div className="sticky top-0 z-[5] overflow-hidden border border-[#8D8679]">
          <div className="relative h-[50vh] min-h-[300px] w-full sm:h-[420px]">
            <img
              src={REVEAL_IMAGE}
              alt="Nail art detail"
              className="absolute inset-0 h-full w-full object-cover object-[center_72%]"
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
        </div>
        {/* Short scroll runway — keeps reveal without a large black band */}
        <div className="h-[10vh] sm:h-[12vh]" aria-hidden />
      </div>
    </section>
  )
}
