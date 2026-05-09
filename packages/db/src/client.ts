import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

const supabaseUrl = process.env['NEXT_PUBLIC_SUPABASE_URL']
const supabaseAnonKey = process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY']
const supabaseServiceKey = process.env['SUPABASE_SERVICE_ROLE_KEY']

if (!supabaseUrl) throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL')
if (!supabaseAnonKey) throw new Error('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY')

/** Browser/client-side Supabase client (anon key, RLS enforced) */
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

/** Server-side admin client (service role key, bypasses RLS — use carefully) */
export function createAdminClient() {
  if (!supabaseServiceKey) throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY')
  return createClient<Database>(supabaseUrl!, supabaseServiceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
}
