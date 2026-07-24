export type PriceItem = {
  name: string
  price: string
  note?: string
}

export type PriceSection = {
  category: string
  items: PriceItem[]
}

export const PRICES_MENU: PriceSection[] = [
  {
    category: "Acrylics",
    items: [
      { name: "Full Set (Plain)", price: "£35—" },
      { name: "Infill", price: "£20—" },
      { name: "Removal", price: "£15—" },
    ],
  },
  {
    category: "gel & BIAB",
    items: [
      { name: "Gel Manicure", price: "£30—" },
      { name: "BIAB/ hard gel", price: "£30—" },
      { name: "Removal", price: "£10—" },
    ],
  },
  {
    category: "Nail Art (The Artist Add-ons)",
    items: [
      { name: "Simple Art (per nail)", price: "£2—" },
      { name: "Detailed Art (per nail)", price: "£5—" },
      { name: "Charms / 3D (from)", price: "£4—" },
    ],
  },
]

const SHIFT_NAMES = new Set([
  "Full Set (Plain)",
  "Infill",
  "Removal",
  "Gel Manicure",
  "BIAB/ hard gel",
  "Simple Art (per nail)",
  "Detailed Art (per nail)",
  "Charms / 3D (from)",
])

export function priceRowUsesShiftPadding(name: string): boolean {
  return SHIFT_NAMES.has(name)
}
