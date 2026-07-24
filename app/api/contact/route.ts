import { NextResponse } from "next/server"

/**
 * Accept either a bare Formspree ID (`xqkzabcd`) or a full endpoint URL
 * (`https://formspree.io/f/xqkzabcd`) pasted into the env var by mistake.
 */
function getFormId(): string | null {
  const raw = (process.env.FORMSPREE_FORM_ID ?? process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID)
    ?.trim()
    .replace(/^["']|["']$/g, "")
  if (!raw) return null

  const fromUrl = raw.match(/formspree\.io\/f\/([a-zA-Z0-9]+)/i)
  if (fromUrl?.[1]) return fromUrl[1]

  // Bare ID
  if (/^[a-zA-Z0-9]+$/.test(raw)) return raw

  // Last path segment fallback
  const segment = raw.split("/").filter(Boolean).pop()
  if (segment && /^[a-zA-Z0-9]+$/.test(segment)) return segment

  return null
}

export async function POST(request: Request) {
  const formId = getFormId()
  if (!formId) {
    return NextResponse.json(
      {
        error:
          "Contact form is not configured correctly. In Vercel, set NEXT_PUBLIC_FORMSPREE_FORM_ID to only the form ID (e.g. xqkzabcd), not the full URL.",
      },
      { status: 503 },
    )
  }

  try {
    const incoming = await request.formData()

    const payload: Record<string, string> = {}
    for (const [key, value] of incoming.entries()) {
      if (typeof value === "string") {
        payload[key] = value
      }
    }

    if (payload.email && !payload._replyto) {
      payload._replyto = payload.email
    }

    if (!payload._subject) {
      payload._subject = "Studio Baroque — Booking enquiry"
    }

    const res = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    const data = (await res.json().catch(() => ({}))) as {
      error?: string
      errors?: { message?: string; code?: string }[]
      ok?: boolean
    }

    if (res.ok) {
      return NextResponse.json({ ok: true })
    }

    const message =
      data.error ||
      data.errors
        ?.map((err) => err.message)
        .filter(Boolean)
        .join(" ") ||
      `Form service error (${res.status}). Please try again or email info@studiobaroque.co.uk.`

    return NextResponse.json({ error: message }, { status: res.status >= 400 && res.status < 600 ? res.status : 502 })
  } catch {
    return NextResponse.json(
      {
        error:
          "Could not send your enquiry. Please try again or email info@studiobaroque.co.uk.",
      },
      { status: 502 },
    )
  }
}
