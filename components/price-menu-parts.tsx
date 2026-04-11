import type { PriceItem } from "@/lib/prices-menu"
import { priceRowUsesShiftPadding } from "@/lib/prices-menu"

const DEFAULT_INK = "#1A1A1A"

type PriceCategoryHeaderProps = {
  title: string
  /** Text / border colour (e.g. home vs /prices) */
  color?: string
}

export function PriceCategoryHeader({ title, color = DEFAULT_INK }: PriceCategoryHeaderProps) {
  return (
    <div className="price-menu-header-satin mx-auto w-full max-w-md px-3 py-2 md:max-w-lg md:px-4">
      <span className="price-menu-header-satin__shimmer" aria-hidden />
      <h2
        className="relative z-[1] text-center text-[10px] font-semibold uppercase leading-snug tracking-[0.32em] sm:text-[11px] sm:tracking-[0.38em] md:text-[12px] md:tracking-[0.45em]"
        style={{
          fontFamily: "Optima, var(--font-cormorant), Georgia, serif",
          color,
        }}
      >
        {title}
      </h2>
    </div>
  )
}

type PriceMenuRowProps = {
  item: PriceItem
  color?: string
}

export function PriceMenuRow({ item, color = DEFAULT_INK }: PriceMenuRowProps) {
  const shiftRight = priceRowUsesShiftPadding(item.name)
  return (
    <div className="py-4">
      <div className="flex items-baseline justify-between gap-6">
        <div
          className="text-[16px] md:text-[17px] leading-snug"
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
        <div className="mt-2 text-[12px] opacity-75" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color }}>
          {item.note}
        </div>
      ) : null}
    </div>
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
