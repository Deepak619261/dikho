import { z } from 'zod'

// ─── Enums ───────────────────────────────────────────────────────────────────

export const VerticalEnum = z.enum([
  'salon',
  'spa',
  'dentist',
  'doctor',
  'tutor',
  'vet',
  'physio',
  'gym',
  'lab',
  'lawyer',
  'ca',
  'other',
])
export type Vertical = z.infer<typeof VerticalEnum>

export const PlanEnum = z.enum(['free', 'dikho_lite', 'dikho_pro', 'dikho_clinic'])
export type Plan = z.infer<typeof PlanEnum>

export const SubscriptionStatusEnum = z.enum([
  'free',
  'trialing',
  'active',
  'past_due',
  'paused',
  'cancelled',
])
export type SubscriptionStatus = z.infer<typeof SubscriptionStatusEnum>

export const LeadStatusEnum = z.enum(['new', 'seen', 'contacted', 'booked', 'cancelled'])
export type LeadStatus = z.infer<typeof LeadStatusEnum>

export const BotStateEnum = z.enum([
  'GREETING',
  'ASKING_NAME',
  'ASKING_VERTICAL',
  'ASKING_ADDRESS',
  'ASKING_HOURS',
  'ASKING_SERVICES',
  'ASKING_PHOTOS',
  'ASKING_LANGUAGE',
  'GENERATING_SITE',
  'COMPLETE',
])
export type BotState = z.infer<typeof BotStateEnum>

// ─── Domain schemas (Zod) ────────────────────────────────────────────────────

export const TenantSchema = z.object({
  id: z.string().uuid(),
  slug: z.string().min(2).max(63),
  business_name: z.string().min(1).max(200),
  vertical: VerticalEnum,
  plan: PlanEnum.default('free'),
  subscription_status: SubscriptionStatusEnum.default('free'),
  razorpay_subscription_id: z.string().nullable().optional(),
  owner_id: z.string().uuid(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
})
export type Tenant = z.infer<typeof TenantSchema>

export const SiteSchema = z.object({
  id: z.string().uuid(),
  tenant_id: z.string().uuid(),
  language: z.enum(['en', 'hi', 'pa']).default('hi'),
  address: z.string().nullable().optional(),
  hours: z.record(z.string()).nullable().optional(),
  services: z.array(z.string()).default([]),
  photo_urls: z.array(z.string().url()).default([]),
  tagline: z.string().nullable().optional(),
  about: z.string().nullable().optional(),
  maps_embed_url: z.string().nullable().optional(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
})
export type Site = z.infer<typeof SiteSchema>

export const LeadSchema = z.object({
  id: z.string().uuid(),
  tenant_id: z.string().uuid(),
  name: z.string().min(1),
  phone: z.string().min(10),
  service: z.string().nullable().optional(),
  preferred_date: z.string().nullable().optional(),
  preferred_time: z.string().nullable().optional(),
  status: LeadStatusEnum.default('new'),
  unlocked_at: z.string().datetime().nullable().optional(),
  created_at: z.string().datetime(),
})
export type Lead = z.infer<typeof LeadSchema>

export const BotSessionSchema = z.object({
  id: z.string().uuid(),
  phone: z.string(),
  current_state: BotStateEnum,
  collected_data: z.record(z.unknown()).default({}),
  last_message_at: z.string().datetime(),
  created_at: z.string().datetime(),
})
export type BotSession = z.infer<typeof BotSessionSchema>

// ─── Supabase Database type skeleton (auto-generated in future by supabase gen types) ───

export type Database = {
  public: {
    Tables: {
      tenants: {
        Row: Tenant
        Insert: Omit<Tenant, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Tenant, 'id' | 'created_at'>>
      }
      sites: {
        Row: Site
        Insert: Omit<Site, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Site, 'id' | 'created_at'>>
      }
      leads: {
        Row: Lead
        Insert: Omit<Lead, 'id' | 'created_at'>
        Update: Partial<Omit<Lead, 'id' | 'created_at'>>
      }
      bot_sessions: {
        Row: BotSession
        Insert: Omit<BotSession, 'id' | 'created_at'>
        Update: Partial<Omit<BotSession, 'id' | 'created_at'>>
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
  }
}
