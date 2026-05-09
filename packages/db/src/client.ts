import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

/** Browser/client-side Supabase client (anon key, RLS enforced) */
export function getSupabaseClient() {
  const url = process.env['NEXT_PUBLIC_SUPABASE_URL']
  const key = process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY']
  if (!url || !key) throw new Error('Missing Supabase env vars')
  return createClient<Database>(url, key)
}

/** Server-side admin client (service role key, bypasses RLS — use carefully) */
export function createAdminClient() {
  const url = process.env['NEXT_PUBLIC_SUPABASE_URL']
  const serviceKey = process.env['SUPABASE_SERVICE_ROLE_KEY']
  if (!url || !serviceKey) throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY')
  return createClient<Database>(url, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
}
