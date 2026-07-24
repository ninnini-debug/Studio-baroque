import { NextResponse } from "next/server"

function getFormId(): string | null {
  const id = process.env.FORMSPREE_FORM_ID ?? process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
  return id?.trim() || null
}

export async function POST(request: Request) {
  const formId = getFormId()
  if (!formId) {
    return NextResponse.json(
      { error: "Contact form is not configured yet." },
      { status: 503 },
    )
  }

  try {
    const incoming = await request.formData()

    // Build a JSON payload Formspree accepts reliably from server-side posts.
    // Skip binary file uploads for the JSON path (Formspree free tier is email-first).
    const payload: Record<string, string> = {}
    for (const [key, value] of incoming.entries()) {
      if (typeof value === "string") {
        payload[key] = value
      }
    }

    if (payload.email && !payload._replyto) {
      payload._replyto = payload.email
    }

    // Always notify the studio mailbox subject line clearly
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
      errors?: { message?: string; code?: string; field?: string }[]
      ok?: boolean
      next?: string
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

    return NextResponse.json(
      {
        error: message,
        status: res.status,
      },
      { status: res.status >= 400 && res.status < 600 ? res.status : 502 },
    )
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
