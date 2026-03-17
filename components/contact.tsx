"use client"

import { useState } from "react"

export function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40">
      <div className="max-w-2xl mx-auto px-6 md:px-10">
        <p
          className="text-[10px] tracking-[0.5em] uppercase text-[#C9A962] mb-4"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Book
        </p>
        <h2
          className="text-3xl md:text-4xl font-light text-[#F2EDE4] mb-12"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Get in Touch
        </h2>
        {sent ? (
          <p
            className="text-[#B8B4A8] text-[15px]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Thank you. I will be in touch soon.
          </p>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                required
                className="w-full bg-transparent border-b border-[#C9A962]/40 py-3 text-[#F2EDE4] placeholder:text-[#6B7568] focus:outline-none focus:border-[#C9A962] text-[15px]"
                style={{ fontFamily: "var(--font-sans)" }}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                required
                className="w-full bg-transparent border-b border-[#C9A962]/40 py-3 text-[#F2EDE4] placeholder:text-[#6B7568] focus:outline-none focus:border-[#C9A962] text-[15px]"
                style={{ fontFamily: "var(--font-sans)" }}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                placeholder="Message"
                rows={4}
                required
                className="w-full bg-transparent border-b border-[#C9A962]/40 py-3 text-[#F2EDE4] placeholder:text-[#6B7568] focus:outline-none focus:border-[#C9A962] resize-none text-[15px]"
                style={{ fontFamily: "var(--font-sans)" }}
              />
            </div>
            <button
              type="submit"
              className="mt-8 text-[11px] tracking-[0.4em] uppercase text-[#F2EDE4] border border-[#C9A962] px-8 py-3 hover:bg-[#C9A962]/10 transition-colors duration-200"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
