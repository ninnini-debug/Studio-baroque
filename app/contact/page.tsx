"use client"

import { useState } from "react"

const CREAM = "#FDFCF9"
const INK = "#1A1A1A"
const GOLD = "#C9A962"
const MUTED = "#4A453E"
/** Thin field border — light taupe, harmonises with gold Enquiries accent */
const BORDER_TAUPE = "#9C968C"

const fieldClassName =
  "w-full rounded-md border bg-[#FDFCF9] px-4 py-3 text-[15px] text-[#1A1A1A] placeholder:text-[#8A8580] transition-colors focus:border-[#C9A962] focus:outline-none focus:ring-0"

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  return (
    <main
      className="contact-page-root min-h-screen"
      style={{ backgroundColor: CREAM, color: INK }}
    >
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-10 md:px-10 md:pb-32 md:pt-14">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Intro */}
          <div className="lg:col-span-5">
            <p
              className="mb-4 text-[10px] tracking-[0.5em] uppercase"
              style={{ fontFamily: "var(--font-sans)", color: GOLD }}
            >
              Enquiries
            </p>
            <h1
              className="mb-6 text-4xl font-light leading-tight tracking-tight md:text-5xl"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Let&apos;s talk nails
            </h1>
            <p
              className="mb-10 max-w-md text-[16px] leading-relaxed md:text-[17px]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: MUTED }}
            >
              Share your ideas, preferred dates, and any inspiration — I read every message and reply as soon as I can.
            </p>
            <dl
              className="space-y-6 border-t border-solid pt-10"
              style={{ borderTopColor: `${BORDER_TAUPE}99`, borderTopWidth: 1 }}
            >
              <div>
                <dt
                  className="mb-1 text-[10px] tracking-[0.35em] uppercase"
                  style={{ fontFamily: "var(--font-sans)", color: MUTED }}
                >
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
                <dt
                  className="mb-1 text-[10px] tracking-[0.35em] uppercase"
                  style={{ fontFamily: "var(--font-sans)", color: MUTED }}
                >
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
                borderTopWidth: 1,
              }}
            >
              Once your request is reviewed, I will reach out via email to finalize the date. The full studio
              address and entry instructions are provided upon booking confirmation.
            </p>
          </div>

          {/* Form — flat on cream, thin border only */}
          <div className="lg:col-span-7">
            <div
              className="rounded-lg border p-8 md:p-10"
              style={{
                backgroundColor: CREAM,
                borderColor: BORDER_TAUPE,
                borderWidth: 1,
              }}
            >
              {sent ? (
                <div className="py-10 text-center">
                  <p
                    className="mb-3 text-[11px] tracking-[0.4em] uppercase"
                    style={{ fontFamily: "var(--font-sans)", color: GOLD }}
                  >
                    Sent
                  </p>
                  <p
                    className="text-xl font-light md:text-2xl"
                    style={{ fontFamily: "var(--font-display), Georgia, serif", color: INK }}
                  >
                    Thank you
                  </p>
                  <p
                    className="mx-auto mt-4 max-w-sm text-[15px] leading-relaxed"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: MUTED }}
                  >
                    Your note is in. I&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                  className="space-y-6"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-[10px] tracking-[0.28em] uppercase"
                        style={{ fontFamily: "var(--font-sans)", color: MUTED }}
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        className={fieldClassName}
                        style={{ fontFamily: "var(--font-sans)", borderColor: BORDER_TAUPE }}
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-[10px] tracking-[0.28em] uppercase"
                        style={{ fontFamily: "var(--font-sans)", color: MUTED }}
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@email.com"
                        className={fieldClassName}
                        style={{ fontFamily: "var(--font-sans)", borderColor: BORDER_TAUPE }}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-datetime"
                      className="mb-2 block text-[10px] tracking-[0.28em] uppercase"
                      style={{ fontFamily: "var(--font-sans)", color: MUTED }}
                    >
                      Preferred date / time
                    </label>
                    <textarea
                      id="contact-datetime"
                      name="preferred_datetime"
                      rows={2}
                      placeholder="e.g. Weekday evenings after 6pm, or Saturday 15 March — morning"
                      className={`${fieldClassName} resize-y min-h-[4.5rem]`}
                      style={{ fontFamily: "var(--font-sans)", borderColor: BORDER_TAUPE }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-booking"
                      className="mb-2 block text-[10px] tracking-[0.28em] uppercase"
                      style={{ fontFamily: "var(--font-sans)", color: MUTED }}
                    >
                      What are you booking?
                    </label>
                    <textarea
                      id="contact-booking"
                      name="booking"
                      rows={6}
                      placeholder="Describe the set you have in mind — gel, acrylic, art style, length, references…"
                      className={`${fieldClassName} resize-y min-h-[10rem]`}
                      style={{ fontFamily: "var(--font-sans)", borderColor: BORDER_TAUPE }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-[10px] tracking-[0.28em] uppercase"
                      style={{ fontFamily: "var(--font-sans)", color: MUTED }}
                    >
                      Anything else?
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Allergies, access needs, or other notes."
                      className={`${fieldClassName} resize-y`}
                      style={{ fontFamily: "var(--font-sans)", borderColor: BORDER_TAUPE }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md border border-[#1A1A1A] bg-[#1A1A1A] px-6 py-3.5 text-[11px] tracking-[0.35em] text-[#FDFCF9] transition-colors hover:bg-[#2a2a2a] md:w-auto md:min-w-[200px]"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
