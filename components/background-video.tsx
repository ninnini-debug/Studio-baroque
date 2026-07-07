"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export type BackgroundVideoProps = {
  src: string
  className?: string
  style?: React.CSSProperties
  /** Above-the-fold: fetch early with preload="metadata". */
  priority?: boolean
  poster?: string
  /** How far before the viewport to start lazy loads. */
  rootMargin?: string
}

export function BackgroundVideo({
  src,
  className,
  style,
  priority = false,
  poster,
  rootMargin = "320px 0px",
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(priority)

  useEffect(() => {
    if (priority) return
    const node = videoRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold: 0 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [priority, rootMargin])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !shouldLoad) return

    const play = () => {
      void video.play().catch(() => {})
    }

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      play()
      return
    }

    video.addEventListener("loadeddata", play, { once: true })
    return () => video.removeEventListener("loadeddata", play)
  }, [shouldLoad, src])

  return (
    <video
      ref={videoRef}
      className={cn(className)}
      style={style}
      src={shouldLoad ? src : undefined}
      poster={poster}
      muted
      loop
      playsInline
      autoPlay={priority}
      preload={shouldLoad ? (priority ? "metadata" : "auto") : "none"}
      {...(priority ? { fetchPriority: "high" as const } : { fetchPriority: "low" as const })}
      aria-hidden
    />
  )
}
