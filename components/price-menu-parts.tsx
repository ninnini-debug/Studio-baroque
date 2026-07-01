import type { PriceItem, PriceSection } from "@/lib/prices-menu"
import { priceRowUsesShiftPadding } from "@/lib/prices-menu"

const DEFAULT_INK = "#1A1A1A"

type PriceCategoryHeaderProps = {
  title: string
  /** Text colour (e.g. home vs /prices) */
  color?: string
}

export function PriceCategoryHeader({ title, color = DEFAULT_INK }: PriceCategoryHeaderProps) {
  return (
    <h2
      className="text-center text-[10px] font-medium uppercase tracking-[0.42em] sm:text-[11px] md:text-[12px] md:tracking-[0.48em]"
      style={{
        fontFamily: "Optima, var(--font-cormorant), Georgia, serif",
        color,
      }}
    >
      {title}
    </h2>
  )
}

type PriceMenuRowProps = {
  item: PriceItem
  color?: string
}

export function PriceMenuRow({ item, color = DEFAULT_INK }: PriceMenuRowProps) {
  const shiftRight = priceRowUsesShiftPadding(item.name)
  return (
    <div className="py-6 md:py-7">
      <div className="flex items-baseline justify-between gap-8">
        <div
          className="text-[16px] leading-snug md:text-[17px]"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            color,
            paddingLeft: shiftRight ? 8 : undefined,
          }}
        >
          {item.name}
        </div>
        <div
          className="whitespace-nowrap text-[13px] tracking-[0.12em] md:text-[14px]"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color, letterSpacing: "0.12em" }}
        >
          {item.price}
        </div>
      </div>
      {item.note ? (
        <div className="mt-2.5 text-[12px] opacity-75" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color }}>
          {item.note}
        </div>
      ) : null}
    </div>
  )
}

type PriceMenuSectionProps = {
  section: PriceSection
  color?: string
}

export function PriceMenuSection({ section, color = DEFAULT_INK }: PriceMenuSectionProps) {
  return (
    <section>
      <div className="mx-auto max-w-xl rounded-sm border border-[#8D8679]/22 bg-white/40 px-8 py-10 backdrop-blur-md md:px-14 md:py-14">
        <div className="mb-10 md:mb-12">
          <PriceCategoryHeader title={section.category} color={color} />
        </div>

        <div className="mx-auto max-w-lg">
          {section.items.map((item, idx) => (
            <div
              key={`${section.category}-${item.name}`}
              className={idx < section.items.length - 1 ? "border-b border-[#8D8679]/10" : undefined}
            >
              <PriceMenuRow item={item} color={color} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PriceMenuDisclaimer({ color = DEFAULT_INK }: { color?: string }) {
  return (
    <p
      className="mx-auto mt-16 max-w-xl px-2 text-center text-[11px] leading-relaxed tracking-[0.02em] md:text-[12px]"
      style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color }}
    >
      Prices listed are base rates. Detailed hand-painted art is quoted upon enquiry based on complexity and time.
    </p>
  )
}
