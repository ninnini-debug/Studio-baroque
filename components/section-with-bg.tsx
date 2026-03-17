import { type ReactNode } from "react"

type SectionWithBgProps = {
  children: ReactNode
  /** Optional background image URL - orchids, classical art, etc. */
  imageUrl?: string
  /** Section id for anchor links */
  id?: string
  /** Extra section class names */
  className?: string
  /** Slightly stronger orchid visibility when true */
  orchid?: boolean
}

export function SectionWithBg({ children, imageUrl, id, className = "", orchid }: SectionWithBgProps) {
  return (
    <section
      id={id}
      className={`section-editorial ${orchid ? "section-with-orchids" : ""} ${className}`.trim()}
    >
      {imageUrl && (
        <div
          className="section-bg-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-hidden
        />
      )}
      <div className="section-bg-overlay" aria-hidden />
      <div className="section-bg-vignette" aria-hidden />
      {children}
    </section>
  )
}
