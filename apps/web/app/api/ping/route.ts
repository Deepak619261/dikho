import { NextResponse } from 'next/server'

/**
 * GET /api/ping
 * Phase 0: verifies Supabase connectivity by reading from the ping table.
 * Returns { ok: true, supabase: true } when healthy.
 */
export async function GET() {
  // Dynamic import so the module isn't loaded at build time (needs env vars at runtime)
  const { createAdminClient } = await import('@dikho/db')

  try {
    const admin = createAdminClient()
    const { error } = await admin
      .from('ping' as never)
      .select('*')
      .limit(1)

    if (error && error.code !== 'PGRST116') {
      // PGRST116 = table doesn't exist yet (acceptable in Phase 0 before migrations)
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true, supabase: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}
