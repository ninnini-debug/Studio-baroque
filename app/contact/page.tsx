"use client"

import type { CSSProperties, FormEvent } from "react"
import { useRef, useState } from "react"
import { BackgroundVideo } from "@/components/background-video"
import { PageEditorialHeader } from "@/components/editorial/page-header"
import { StudioDetails } from "@/components/editorial/studio-details"
import { EDITORIAL } from "@/lib/editorial-theme"

const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID

const CREAM = EDITORIAL.cream
const INK = EDITORIAL.ink
const MUTED = EDITORIAL.muted
const BORDER_TAUPE = EDITORIAL.borderTaupe

const FLOWER_BG = "/fine-art-3.PNG"

const labelClass =
  "mb-2 block text-[9px] tracking-[0.42em] uppercase"
const labelStyle: CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  color: MUTED,
}

const fieldLine =
  "w-full border-0 border-b border-solid bg-transparent px-0 py-2.5 text-[15px] outline-none ring-0 transition-[border-color] duration-200 placeholder:text-[#8A8580]/90 focus:border-[#C9A962] focus:ring-0"
const fieldStyle: CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  color: INK,
  borderBottomColor: BORDER_TAUPE,
}

/** Monday–Friday only (local calendar date). */
function isWeekdayDate(dateStr: string): boolean {
  if (!dateStr) return true
  const d = new Date(`${dateStr}T12:00:00`)
  const day = d.getDay()
  return day !== 0 && day !== 6
}

const APPOINTMENT_NOTE =
  "*By appointment only. Appointments are strictly allocated within these hours to ensure dedicated, bespoke time for each client."

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [dateError, setDateError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const dateInputRef = useRef<HTMLInputElement>(null)
  const [fileLabel, setFileLabel] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitError(null)

    const preferredDate = dateInputRef.current?.value ?? ""
    if (preferredDate && !isWeekdayDate(preferredDate)) {
      setDateError("Please choose a weekday (Monday–Friday). The studio is closed on weekends.")
      dateInputRef.current?.focus()
      return
    }

    if (!FORMSPREE_FORM_ID?.trim()) {
      setSubmitError(
        "Enquiries are not connected yet. Add NEXT_PUBLIC_FORMSPREE_FORM_ID to your environment (see .env.example).",
      )
      return
    }

    const form = e.currentTarget
    const formData = new FormData(form)

    setSubmitting(true)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID.trim()}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })
      const data = (await res.json().catch(() => ({}))) as { error?: string; errors?: { message: string }[] }

      if (res.ok) {
        form.reset()
        setFileLabel(null)
        setDateError(null)
        setSent(true)
        return
      }

      const msg =
        data.error ||
        data.errors?.map((err) => err.message).join(" ") ||
        "Something went wrong. Please try again or email directly."
      setSubmitError(msg)
    } catch {
      setSubmitError("Network error. Please check your connection and try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="contact-page-root relative min-h-screen" style={{ color: INK }}>
      <BackgroundVideo
        priority
        className="pointer-events-none fixed inset-0 z-0 h-full w-full object-cover"
        src="/Video%203.mp4"
      />
      <div
        className="pointer-events-none fixed inset-0 z-[1] bg-[#FDFCF9]/52"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-10 md:px-10 md:pb-32 md:pt-14">
        {/* Intro — full width above the two-column block */}
        <PageEditorialHeader
          className="mb-10 md:mb-14"
          eyebrow="Enquiries"
          title="Let's talk nails"
          titleStyle="script"
          description="Share your ideas, preferred dates, and any inspiration — I read every message and reply as soon as I can."
        />

        <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-16">
          <StudioDetails className="lg:col-span-5" />

          {/* Form */}
          <div className="relative lg:col-span-7">
            <div
              className="pointer-events-none absolute inset-0 -z-0 overflow-hidden rounded-sm"
              style={{
                backgroundImage: `url(${FLOWER_BG})`,
                backgroundSize: "cover",
                backgroundPosition: "center 35%",
                opacity: 0.1,
              }}
              aria-hidden
            />
            <div className="relative z-10 p-8 md:p-10" style={{ backgroundColor: CREAM }}>
              {sent ? (
                <div className="space-y-6 py-6">
                  <div className="pt-2">
                    <div
                      className="contact-submit-satin inline-flex cursor-default px-6 py-2 text-[10px] tracking-[0.45em] uppercase opacity-95"
                      style={{ color: INK }}
                      role="status"
                    >
                      <span className="relative z-[1]">MESSAGE RECEIVED</span>
                    </div>
                  </div>
                  <p
                    className="max-w-md text-[13px] leading-relaxed md:text-[14px]"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: MUTED }}
                  >
                    Thank you. I will reach out to you within 48 hours to confirm your appointment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="_subject" value="Studio Baroque — Booking enquiry" />
                  <p
                    className="pb-2 text-[13px] italic leading-relaxed md:text-[14px]"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: MUTED }}
                  >
                    {APPOINTMENT_NOTE}
                  </p>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className={labelClass} style={labelStyle}>
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        className={fieldLine}
                        style={fieldStyle}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className={labelClass} style={labelStyle}>
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="nailsbyStudioB@gmail.com"
                        className={fieldLine}
                        style={fieldStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-social" className={labelClass} style={labelStyle}>
                      Social media
                    </label>
                    <input
                      id="contact-social"
                      name="social_handle"
                      type="text"
                      autoComplete="off"
                      placeholder="@yourname"
                      className={fieldLine}
                      style={fieldStyle}
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-date" className={labelClass} style={labelStyle}>
                        Preferred date
                      </label>
                      <input
                        ref={dateInputRef}
                        id="contact-date"
                        name="preferred_date"
                        type="date"
                        className={`${fieldLine} min-h-[2.75rem] cursor-pointer [color-scheme:light]`}
                        style={fieldStyle}
                        onChange={(e) => {
                          const value = e.target.value
                          if (value && !isWeekdayDate(value)) {
                            e.target.value = ""
                            setDateError("Weekends are not available — please select Monday through Friday.")
                            return
                          }
                          setDateError(null)
                          e.target.setCustomValidity("")
                        }}
                        onInvalid={(e) => {
                          e.preventDefault()
                          const el = e.currentTarget
                          if (el.value && !isWeekdayDate(el.value)) {
                            setDateError("Weekends are not available — please select Monday through Friday.")
                          }
                        }}
                        aria-describedby={dateError ? "contact-date-error" : undefined}
                        aria-invalid={dateError ? true : undefined}
                      />
                      {dateError ? (
                        <p
                          id="contact-date-error"
                          className="mt-2 text-[12px] leading-relaxed"
                          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: INK }}
                          role="alert"
                        >
                          {dateError}
                        </p>
                      ) : null}
                    </div>
                    <div>
                      <label htmlFor="contact-time" className={labelClass} style={labelStyle}>
                        Preferred time (optional)
                      </label>
                      <input
                        id="contact-time"
                        name="preferred_time_note"
                        type="text"
                        placeholder="e.g. 12pm, early afternoon"
                        className={fieldLine}
                        style={fieldStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-booking" className={labelClass} style={labelStyle}>
                      What are you booking?
                    </label>
                    <textarea
                      id="contact-booking"
                      name="booking"
                      rows={5}
                      placeholder="Describe the set you have in mind — gel, acrylic, art style, length, references…"
                      className={`${fieldLine} resize-y min-h-[8rem]`}
                      style={fieldStyle}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className={labelClass} style={labelStyle}>
                      Anything else?
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Allergies, access needs, or other notes."
                      className={`${fieldLine} resize-y min-h-[5.5rem]`}
                      style={fieldStyle}
                    />
                  </div>

                  <div className="pt-1">
                    <input
                      ref={fileInputRef}
                      type="file"
                      name="inspiration_images"
                      accept="image/*"
                      multiple
                      className="sr-only"
                      onChange={(e) => {
                        const n = e.target.files?.length ?? 0
                        setFileLabel(n ? `${n} file${n === 1 ? "" : "s"} selected` : null)
                      }}
                    />
                    <button
                      type="button"
                      className="bg-transparent p-0 text-[13px] tracking-[0.06em] underline decoration-[#9C968C]/60 underline-offset-4 transition-colors hover:text-[#1A1A1A] hover:decoration-[#C9A962]"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: MUTED }}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      + Attach inspiration images
                    </button>
                    {fileLabel ? (
                      <p className="mt-2 text-[12px]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: MUTED }}>
                        {fileLabel}
                      </p>
                    ) : null}
                  </div>

                  <p
                    className="border-t border-solid pt-6 text-[12px] leading-relaxed"
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      color: MUTED,
                      borderTopColor: `${BORDER_TAUPE}55`,
                    }}
                  >
                    A non-refundable deposit is required to secure your booking. This will be deducted from your final
                    total.
                  </p>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      aria-busy={submitting}
                      className="contact-submit-satin px-6 py-2 text-[10px] tracking-[0.45em] uppercase enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-65"
                      style={{ color: INK }}
                    >
                      <span className="contact-submit-satin__shimmer" aria-hidden />
                      <span className="relative z-[1]">
                        {submitting ? "Sending…" : "Send enquiry"}
                      </span>
                    </button>
                    {submitError ? (
                      <p
                        className="mt-3 max-w-md text-[12px] leading-relaxed text-red-800/90"
                        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                        role="alert"
                      >
                        {submitError}
                      </p>
                    ) : null}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
