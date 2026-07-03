import type { PriceItem, PriceSection } from "@/lib/prices-menu"
import { priceRowUsesShiftPadding } from "@/lib/prices-menu"
import { ACTIVE_PRICE_CARD_THEME } from "@/lib/price-card-theme"

const SERIF = "var(--font-cormorant), Optima, Georgia, serif"

type PriceCategoryHeaderProps = {
  title: string
  color: string
}

export function PriceCategoryHeader({ title, color }: PriceCategoryHeaderProps) {
  return (
    <h2
      className="text-center text-[10px] font-medium uppercase tracking-[0.42em] sm:text-[11px] md:text-[12px] md:tracking-[0.48em]"
      style={{
        fontFamily: SERIF,
        color,
      }}
    >
      {title}
    </h2>
  )
}

type PriceMenuRowProps = {
  item: PriceItem
  textColor: string
  priceColor: string
  noteColor: string
}

export function PriceMenuRow({ item, textColor, priceColor, noteColor }: PriceMenuRowProps) {
  const shiftRight = priceRowUsesShiftPadding(item.name)
  return (
    <div className="py-6 md:py-7">
      <div className="flex items-baseline justify-between gap-8">
        <div
          className="text-[16px] leading-snug md:text-[17px]"
          style={{
            fontFamily: SERIF,
            color: textColor,
            paddingLeft: shiftRight ? 8 : undefined,
          }}
        >
          {item.name}
        </div>
        <div
          className="whitespace-nowrap text-[14px] tracking-[0.12em] md:text-[15px]"
          style={{ fontFamily: SERIF, color: priceColor, letterSpacing: "0.12em" }}
        >
          {item.price}
        </div>
      </div>
      {item.note ? (
        <div
          className="mt-2.5 text-[12px] opacity-75"
          style={{ fontFamily: SERIF, color: noteColor }}
        >
          {item.note}
        </div>
      ) : null}
    </div>
  )
}

type PriceMenuSectionProps = {
  section: PriceSection
  /** Legacy prop — page-level ink; card theme colours take precedence inside the panel */
  color?: string
}

export function PriceMenuSection({ section }: PriceMenuSectionProps) {
  const theme = ACTIVE_PRICE_CARD_THEME

  return (
    <section>
      <div
        className={`mx-auto max-w-xl rounded-sm px-8 py-10 md:px-14 md:py-14 ${theme.cardClassName}`}
      >
        <div className="mb-10 md:mb-12">
          <PriceCategoryHeader title={section.category} color={theme.categoryColor} />
        </div>

        <div className="mx-auto max-w-lg">
          {section.items.map((item, idx) => (
            <div
              key={`${section.category}-${item.name}`}
              className={
                idx < section.items.length - 1 ? `border-b ${theme.dividerClassName}` : undefined
              }
            >
              <PriceMenuRow
                item={item}
                textColor={theme.textColor}
                priceColor={theme.priceColor}
                noteColor={theme.noteColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PriceMenuDisclaimer() {
  return (
    <p
      className="mx-auto mt-16 max-w-xl px-2 text-center text-base leading-relaxed tracking-[0.02em] md:text-lg"
      style={{ fontFamily: SERIF, color: "#000000" }}
    >
      Prices listed are base rates. Detailed hand-painted art is quoted upon enquiry based on complexity and time.
    </p>
  )
}
