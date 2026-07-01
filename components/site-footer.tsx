"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const FOOTER_CHARCOAL = "#2A2622"
const FOOTER_GOLD = "#9A8562"
const BOOKING_TERMS =
  "BOOKING TERMS: All appointments require a non-refundable £20 deposit to secure your slot. Cancellations or rescheduling must be done 48 hours in advance, or the deposit is forfeited. Late arrivals past 15 minutes may result in appointment cancellation."

export function SiteFooter() {
  const [open, setOpen] = useState(false)
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="site-footer relative z-10 bg-transparent px-6 pb-10 pt-8 text-center">
        <p
          className="text-[12px]"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            color: FOOTER_CHARCOAL,
            letterSpacing: "0.1em",
          }}
        >
          © {currentYear} StudioBaroqueNails
        </p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-2.5 cursor-pointer border-0 bg-transparent p-0 text-[11px] uppercase tracking-[0.1em] text-[#2A2622] transition-all duration-300 hover:text-[#1A1A1A] hover:underline underline-offset-[3px]"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            letterSpacing: "0.1em",
          }}
        >
          Studio Policies & Bookings Terms
        </button>
      </footer>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-w-md border border-[#8D8679]/40 bg-[#FDFCF9] p-8 shadow-xl sm:max-w-md"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          <DialogHeader className="sr-only">
            <DialogTitle>Studio Policies & Bookings Terms</DialogTitle>
          </DialogHeader>
          <DialogDescription
            className="text-[14px] leading-[1.75] text-[#3A352E]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            {BOOKING_TERMS}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  )
}
