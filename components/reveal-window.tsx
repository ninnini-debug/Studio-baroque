/** Reveal ribbon — image pins to viewport while the page scrolls past (CSS sticky). */
const REVEAL_IMAGE = "/ladybug2.jpg"

export function RevealWindow() {
  return (
    <section
      className="relative z-10 mt-[100px] mb-[100px]"
      aria-label="Reveal window"
    >
      {/* Tall track = scroll room; image stays pinned while prices/hero move */}
      <div className="relative min-h-[125vh] w-full sm:min-h-[110vh]">
        <div className="sticky top-0 z-[5] overflow-hidden border border-[#8D8679]">
          <div className="relative h-[50vh] min-h-[300px] w-full sm:h-[420px]">
            <img
              src={REVEAL_IMAGE}
              alt="Nail art detail"
              className="absolute inset-0 h-full w-full object-cover object-[center_38%]"
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
      </div>
    </section>
  )
}
