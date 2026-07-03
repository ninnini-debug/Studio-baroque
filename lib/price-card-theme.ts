/** Pricing card palettes — change ACTIVE_PRICE_CARD_THEME to preview each option. */
export type PriceCardTheme = {
  id: string
  label: string
  cardClassName: string
  categoryColor: string
  textColor: string
  priceColor: string
  dividerClassName: string
  noteColor: string
}

/** Option 1 — The Dark Baroque: deep charcoal card, white type */
export const PRICE_CARD_DARK_BAROQUE: PriceCardTheme = {
  id: "dark-baroque",
  label: "The Dark Baroque",
  cardClassName:
    "bg-[#1A1A1A] border border-[#C9A962]/35 shadow-[0_12px_40px_rgba(0,0,0,0.28)]",
  categoryColor: "#FFFFFF",
  textColor: "#FFFFFF",
  priceColor: "#FFFFFF",
  dividerClassName: "border-[#FFFFFF]/15",
  noteColor: "#FFFFFF",
}

/** Option 2 — Warm Stone: taupe panel, ivory type, antique gold headers */
export const PRICE_CARD_WARM_STONE: PriceCardTheme = {
  id: "warm-stone",
  label: "Warm Stone",
  cardClassName:
    "bg-[#3A352E] border border-[#9C968C]/45 shadow-[0_10px_32px_rgba(0,0,0,0.2)]",
  categoryColor: "#C9A962",
  textColor: "#FDFCF9",
  priceColor: "#E8E2D8",
  dividerClassName: "border-[#FDFCF9]/12",
  noteColor: "#E8E2D8",
}

/** Option 3 — Ivory Panel: solid warm ivory, ink text, gold rule (stronger than frosted white) */
export const PRICE_CARD_IVORY_PANEL: PriceCardTheme = {
  id: "ivory-panel",
  label: "Ivory Panel",
  cardClassName:
    "bg-[#F2EDE4] border border-[#8D8679]/55 shadow-[0_8px_28px_rgba(26,26,26,0.1)]",
  categoryColor: "#9A8562",
  textColor: "#1A1A1A",
  priceColor: "#4A453E",
  dividerClassName: "border-[#8D8679]/22",
  noteColor: "#4A453E",
}

/** Swap this constant to test: PRICE_CARD_DARK_BAROQUE | PRICE_CARD_WARM_STONE | PRICE_CARD_IVORY_PANEL */
export const ACTIVE_PRICE_CARD_THEME = PRICE_CARD_DARK_BAROQUE
