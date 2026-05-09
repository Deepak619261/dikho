import { NextRequest, NextResponse } from 'next/server'

const VERIFY_TOKEN = process.env['WHATSAPP_VERIFY_TOKEN'] ?? ''

/** Meta webhook verification (GET) */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const mode = searchParams.get('hub.mode')
  const token = searchParams.get('hub.verify_token')
  const challenge = searchParams.get('hub.challenge')

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    return new NextResponse(challenge, { status: 200 })
  }
  return new NextResponse('Forbidden', { status: 403 })
}

/** Incoming WhatsApp messages (POST) */
export async function POST(req: NextRequest) {
  const body = await req.json()

  // TODO Phase 1: route to bot session state machine
  console.log('[webhook] incoming:', JSON.stringify(body, null, 2))

  return NextResponse.json({ status: 'ok' })
}
