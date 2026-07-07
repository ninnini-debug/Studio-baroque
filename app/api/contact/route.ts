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
    const formData = await request.formData()
    const res = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })

    const data = (await res.json().catch(() => ({}))) as {
      error?: string
      errors?: { message: string }[]
      ok?: boolean
    }

    if (res.ok) {
      return NextResponse.json({ ok: true })
    }

    const message =
      data.error ||
      data.errors?.map((err) => err.message).join(" ") ||
      "Something went wrong. Please try again."

    return NextResponse.json({ error: message }, { status: res.status })
  } catch {
    return NextResponse.json(
      { error: "Could not send your enquiry. Please try again in a moment." },
      { status: 502 },
    )
  }
}
