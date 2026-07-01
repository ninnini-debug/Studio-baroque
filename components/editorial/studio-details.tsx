import { EDITORIAL } from "@/lib/editorial-theme"

type StudioDetailsProps = {
  className?: string
}

/** Left-column studio block for Contact page */
export function StudioDetails({ className = "" }: StudioDetailsProps) {
  const labelStyle = {
    fontFamily: EDITORIAL.serif,
    color: EDITORIAL.muted,
  }

  return (
    <div className={className}>
      <dl
        className="space-y-6 border-t border-solid pt-0"
        style={{ borderTopColor: `${EDITORIAL.borderTaupe}99` }}
      >
        <div className="pt-10">
          <dt className="mb-1 text-[9px] tracking-[0.42em] uppercase" style={labelStyle}>
            Studio
          </dt>
          <dd className="space-y-1 text-[15px] leading-snug" style={{ fontFamily: EDITORIAL.serif }}>
            <p>West London · by appointment</p>
            <p className="text-[14px]" style={{ color: EDITORIAL.muted }}>
              Near Uxbridge station (Tube)
            </p>
          </dd>
        </div>
        <div>
          <dt className="mb-1 text-[9px] tracking-[0.42em] uppercase" style={labelStyle}>
            Reply time
          </dt>
          <dd className="text-[15px] leading-snug" style={{ fontFamily: EDITORIAL.serif }}>
            Usually within 48 hours
          </dd>
        </div>
        <div>
          <dt className="mb-1 text-[9px] tracking-[0.42em] uppercase" style={labelStyle}>
            Hours
          </dt>
          <dd className="space-y-1 text-[15px] leading-snug" style={{ fontFamily: EDITORIAL.serif }}>
            <p>Mon – Fri: 12:00 PM – 6:00 PM</p>
            <p>Sat &amp; Sun: Closed</p>
          </dd>
        </div>
      </dl>
      <p
        className="mt-8 border-t border-solid pt-8 text-[13px] leading-relaxed md:text-[14px]"
        style={{
          fontFamily: EDITORIAL.serif,
          color: EDITORIAL.muted,
          borderTopColor: `${EDITORIAL.borderTaupe}99`,
        }}
      >
        Once your request is reviewed, I will reach out via email to finalize the date. The full studio address
        and entry instructions are provided upon booking confirmation.
      </p>
    </div>
  )
}
