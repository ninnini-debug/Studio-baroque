import { EDITORIAL } from "@/lib/editorial-theme"

type PageEditorialHeaderProps = {
  /** Small caps label, e.g. "About" or "Enquiries" */
  eyebrow: string
  /** Main title — script accent or serif display */
  title: string
  titleStyle?: "script" | "display"
  description?: string
  className?: string
}

export function PageEditorialHeader({
  eyebrow,
  title,
  titleStyle = "script",
  description,
  className = "",
}: PageEditorialHeaderProps) {
  return (
    <header
      className={`max-w-2xl ${titleStyle === "display" ? "mx-auto text-center" : ""} ${className}`}
    >
      <p
        className="mb-3 text-[10px] tracking-[0.5em] uppercase"
        style={{ fontFamily: EDITORIAL.serif, color: titleStyle === "script" ? EDITORIAL.gold : EDITORIAL.ink }}
      >
        {eyebrow}
      </p>
      <h1
        className={
          titleStyle === "script"
            ? "mb-6 text-5xl font-normal leading-none md:text-6xl lg:text-7xl"
            : "mb-6 text-[17px] font-light uppercase tracking-[0.45em] md:text-[22px] md:tracking-[0.5em] lg:text-[24px]"
        }
        style={{
          fontFamily: titleStyle === "script" ? EDITORIAL.script : EDITORIAL.display,
          color: EDITORIAL.ink,
          letterSpacing: titleStyle === "script" ? "0.02em" : undefined,
        }}
      >
        {title}
      </h1>
      {description ? (
        <p
          className="max-w-md text-[16px] leading-relaxed md:text-[17px]"
          style={{ fontFamily: EDITORIAL.serif, color: EDITORIAL.muted }}
        >
          {description}
        </p>
      ) : null}
    </header>
  )
}

type SectionLabelProps = {
  children: React.ReactNode
  className?: string
}

/** Centered uppercase section label, e.g. "Meet the Artist" */
export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`text-center text-[17px] uppercase tracking-[0.45em] md:text-[22px] md:tracking-[0.5em] lg:text-[24px] ${className}`}
      style={{ fontFamily: EDITORIAL.display, color: EDITORIAL.ink, fontWeight: 300 }}
    >
      {children}
    </p>
  )
}

type PortraitSectionHeaderProps = {
  children: React.ReactNode
}

/** Small caps portrait header, e.g. "The Artist Portrait" */
export function PortraitSectionHeader({ children }: PortraitSectionHeaderProps) {
  return (
    <h2
      className="text-center text-[14px] font-light uppercase md:text-[16px]"
      style={{
        fontFamily: EDITORIAL.serif,
        letterSpacing: "0.3em",
        color: EDITORIAL.ink,
      }}
    >
      {children}
    </h2>
  )
}
