"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

const CARD_BORDER = "#E5E5E5"

/** Soft, editorial drop shadow */
const CARD_SHADOW =
  "0 10px 40px rgba(0, 0, 0, 0.07), 0 2px 10px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.03)"

const FAN_SPRING = { type: "spring" as const, stiffness: 150, damping: 20 }

/** Pile: top / middle / bottom */
const IDLE_ROT = [0, -4, 4] as const

/** Desktop fanned: viewport-relative spread (keeps fan on-screen) */
const FAN_X_VW_WIDE = ["-25vw", "0vw", "25vw"] as const
const FAN_ROT = [-2, 0, 2] as const

/** Mobile: tighter vw + vertical fan */
const FAN_X_MOBILE = ["-10vw", "0vw", "11vw"] as const
const FAN_Y_MOBILE = [-58, 0, 66] as const

export type FanItem = { src: string; alt: string }

function useIsMin768() {
  const [wide, setWide] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(min-width: 768px)").matches : true,
  )
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)")
    const fn = () => setWide(mq.matches)
    mq.addEventListener("change", fn)
    return () => mq.removeEventListener("change", fn)
  }, [])
  return wide
}

export type GalleryOpenDetail = {
  src: string
  index: number
  allSrcs: readonly string[]
}

type CardFrameProps = {
  src: string
  alt: string
  isOpen: boolean
  cardNumber: number
  totalCards: number
  onExpand: () => void
  onOpen: () => void
}

function CardFrame({ src, alt, isOpen, cardNumber, totalCards, onExpand, onOpen }: CardFrameProps) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation()
        if (!isOpen) onExpand()
        else onOpen()
      }}
      className={cn(
        "absolute inset-0 block h-full w-full overflow-hidden rounded-[1px] border bg-transparent p-0 text-left",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A962]/40",
        !isOpen && "pointer-events-none",
      )}
      style={{
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: CARD_BORDER,
        boxShadow: CARD_SHADOW,
      }}
    >
      <div className="relative h-full w-full">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
          draggable={false}
        />
        {isOpen ? (
          <span
            className="pointer-events-none absolute bottom-2 right-2 rounded-sm bg-[#FDFCF9]/88 px-1.5 py-0.5 text-[9px] tabular-nums tracking-[0.12em] text-[#1A1A1A]/75 shadow-sm"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            aria-hidden
          >
            {cardNumber}/{totalCards}
          </span>
        ) : null}
      </div>
    </button>
  )
}

export type CardStackProps = {
  title: string
  items: readonly [FanItem, FanItem, FanItem]
  onOpen: (detail: GalleryOpenDetail) => void
  /** e.g. pl-[10%] so category label clears the frame edge */
  headingInsetClass?: string
}

export function CardStack({ title, items, onOpen, headingInsetClass }: CardStackProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pileRef = useRef<HTMLDivElement>(null)
  const isWide = useIsMin768()
  const reduced = useReducedMotion()
  const transition = reduced
    ? {
        type: "tween" as const,
        duration: 0.32,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }
    : FAN_SPRING

  const openFan = useCallback(() => {
    setIsOpen(true)
  }, [])

  /** Outside click: use capture on "click" so it runs after expand tap completes */
  useEffect(() => {
    if (!isOpen) return
    const onDocClick = (e: MouseEvent) => {
      const t = e.target as Node
      if (pileRef.current && !pileRef.current.contains(t)) setIsOpen(false)
    }
    document.addEventListener("click", onDocClick, true)
    return () => document.removeEventListener("click", onDocClick, true)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [isOpen])

  return (
    <div
      className="relative z-[10] mx-auto w-full max-w-[960px] !overflow-visible px-3 pb-12 pt-1 md:px-8 md:pb-28 md:pt-4"
      style={{ overflow: "visible" }}
    >
      {/* Floating category label: top-left of stack column + guided line to the right */}
      <div
        className={cn(
          "relative z-20 mb-5 flex w-full max-w-[min(100vw-2rem,960px)] items-center gap-2.5 md:mb-10 md:gap-4",
          headingInsetClass,
        )}
      >
        <h2
          className="shrink-0 text-left text-[0.95rem] font-light italic leading-snug tracking-[0.04em] text-[#1A1A1A] sm:text-[1.15rem] md:text-[1.25rem]"
          style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 300 }}
        >
          {title}
        </h2>
        <div
          className="mt-[0.35em] h-[0.5px] min-h-0 min-w-0 flex-1 bg-[#1A1A1A]/14"
          aria-hidden
        />
      </div>

      <div
        ref={pileRef}
        className={cn(
          "relative mx-auto flex w-full !max-w-none flex-col items-center justify-center !overflow-visible",
          "pt-0 md:min-h-[min(460px,78vh)]",
          isOpen && !isWide && "min-h-[min(380px,72vh)]",
        )}
        style={{ overflow: "visible" }}
      >
        <div
          className="flex w-full min-w-0 max-w-[100%] flex-col items-center justify-center !overflow-visible py-3 md:py-10"
          style={{ overflow: "visible" }}
        >
          <div
            className={cn(
              "relative flex w-full min-w-0 items-center justify-center !overflow-visible px-1 md:min-h-[min(400px,70vh)] md:px-[clamp(0.5rem,4vw,3rem)]",
              isWide ? "min-w-0" : "max-w-[min(100%,260px)]",
            )}
            style={{ overflow: "visible" }}
          >
            {/* Stage: wide enough for vw-based fan; overflow never clips children */}
            <div
              className="relative mx-auto aspect-[3/4] w-[min(200px,calc(100vw-3.5rem))] max-w-[200px] !overflow-visible md:w-[min(280px,calc(100vw-2rem))] md:max-w-[280px]"
              style={{ overflow: "visible" }}
            >
              {!isOpen && (
                <button
                  type="button"
                  aria-label="Fan out photos"
                  aria-expanded={false}
                  className="absolute inset-0 z-20 cursor-pointer bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A962]/40"
                  onClick={(e) => {
                    e.stopPropagation()
                    openFan()
                  }}
                />
              )}

              {items.map((item, i) => (
                <motion.div
                  key={item.src}
                  className="absolute inset-0 !overflow-visible"
                  style={{
                    position: "absolute",
                    zIndex: 3 - i,
                    transformOrigin: "50% 50%",
                    overflow: "visible",
                  }}
                  initial={false}
                  animate={{
                    x: isOpen
                      ? isWide
                        ? FAN_X_VW_WIDE[i]
                        : FAN_X_MOBILE[i]
                      : 0,
                    y: isOpen && !isWide ? FAN_Y_MOBILE[i] : 0,
                    rotate: isOpen ? FAN_ROT[i] : IDLE_ROT[i],
                  }}
                  transition={transition}
                >
                  <CardFrame
                    src={item.src}
                    alt={item.alt}
                    isOpen={isOpen}
                    cardNumber={i + 1}
                    totalCards={items.length}
                    onExpand={openFan}
                    onOpen={() =>
                      onOpen({
                        src: item.src,
                        index: i,
                        allSrcs: items.map((it) => it.src),
                      })
                    }
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/** @deprecated Use CardStack with a `title` prop */
export function GalleryFanStack({
  items,
  onOpen,
  title = "",
}: {
  items: readonly [FanItem, FanItem, FanItem]
  onOpen: (detail: GalleryOpenDetail) => void
  title?: string
  borderColor?: string
  pileKey?: string
}) {
  return <CardStack title={title} items={items} onOpen={onOpen} />
}
