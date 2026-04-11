"use client"

import type { CSSProperties, FormEvent } from "react"
import { useRef, useState } from "react"

const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID

const CREAM = "#FDFCF9"
const INK = "#1A1A1A"
const GOLD = "#C9A962"
const MUTED = "#4A453E"
const BORDER_TAUPE = "#9C968C"

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

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [fileLabel, setFileLabel] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitError(null)

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
      <video
        className="pointer-events-none fixed inset-0 z-0 h-full w-full object-cover"
        src="/Video%203.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 z-[1] bg-[#FDFCF9]/52"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-10 md:px-10 md:pb-32 md:pt-14">
        {/* Intro — full width above the two-column block */}
        <div className="mb-10 max-w-2xl md:mb-14">
          <p
            className="mb-4 text-[10px] tracking-[0.5em] uppercase"
            style={{ fontFamily: "var(--font-sans)", color: GOLD }}
          >
            Enquiries
          </p>
          <h1
            className="mb-6 text-5xl font-normal leading-none md:text-6xl lg:text-7xl"
            style={{
              fontFamily: "var(--font-calligraphy), 'Allura', cursive",
              letterSpacing: "0.02em",
            }}
          >
            Let&apos;s talk nails
          </h1>
          <p
            className="max-w-md text-[16px] leading-relaxed md:text-[17px]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: MUTED }}
          >
            Share your ideas, preferred dates, and any inspiration — I read every message and reply as soon as I can.
          </p>
        </div>

        <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-16">
          {/* Left: Studio + reply — top-aligned with form */}
          <div className="lg:col-span-5">
            <dl className="space-y-6 border-t border-solid pt-0" style={{ borderTopColor: `${BORDER_TAUPE}99` }}>
              <div className="pt-10">
                <dt className="mb-1 text-[9px] tracking-[0.42em] uppercase" style={labelStyle}>
                  Studio
                </dt>
                <dd
                  className="space-y-1 text-[15px] leading-snug"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  <p>West London · by appointment</p>
                  <p className="text-[14px] text-[#4A453E]">Near Uxbridge station (Tube)</p>
                </dd>
              </div>
              <div>
                <dt className="mb-1 text-[9px] tracking-[0.42em] uppercase" style={labelStyle}>
                  Reply time
                </dt>
                <dd
                  className="text-[15px] leading-snug"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  Usually within 48 hours
                </dd>
              </div>
            </dl>
            <p
              className="mt-8 border-t border-solid pt-8 text-[13px] leading-relaxed md:text-[14px]"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                color: MUTED,
                borderTopColor: `${BORDER_TAUPE}99`,
              }}
            >
              Once your request is reviewed, I will reach out via email to finalize the date. The full studio address
              and entry instructions are provided upon booking confirmation.
            </p>
          </div>

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
                        id="contact-date"
                        name="preferred_date"
                        type="date"
                        className={`${fieldLine} min-h-[2.75rem] cursor-pointer [color-scheme:light]`}
                        style={fieldStyle}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-time" className={labelClass} style={labelStyle}>
                        Preferred time (optional)
                      </label>
                      <input
                        id="contact-time"
                        name="preferred_time_note"
                        type="text"
                        placeholder="e.g. after 6pm, morning"
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
