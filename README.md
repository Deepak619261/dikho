# Dikho (दिखो)

> **Google pe Dikho. Customers tak Pahuncho.**
> WhatsApp-first website + Google Business Profile + bookings for Indian local-service businesses.

---

## Monorepo Structure

```
dikho/
├── apps/
│   ├── web/          Next.js 15 App Router — tenant sites + owner dashboard
│   └── bot/          WhatsApp webhook handler (Meta Cloud API)
├── packages/
│   ├── db/           Supabase client + Zod-typed schema
│   └── i18n/         en/hi locale strings + t() helper
├── docs/             Living architecture + decision docs
├── .env.example      All required environment variables
└── plan.md           Phase-by-phase build plan
```

## Prerequisites

- Node.js ≥ 20
- pnpm ≥ 10 (`npm install -g pnpm`)
- A Supabase project (free tier)
- A Vercel account (free tier)

## Setup

```bash
# 1. Clone
git clone https://github.com/your-org/dikho.git && cd dikho

# 2. Install
pnpm install

# 3. Environment
cp .env.example .env.local
# Fill in NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY,
# SUPABASE_SERVICE_ROLE_KEY at minimum

# 4. Dev
pnpm dev          # starts apps/web on :3000
pnpm dev:bot      # starts apps/bot on :3001
```

## Scripts

| Script           | Description                           |
| ---------------- | ------------------------------------- |
| `pnpm dev`       | Start web app (port 3000)             |
| `pnpm dev:bot`   | Start bot webhook handler (port 3001) |
| `pnpm build`     | Build all packages                    |
| `pnpm typecheck` | TypeScript check across all packages  |
| `pnpm lint`      | ESLint across all packages            |
| `pnpm format`    | Prettier format                       |

## Local Tenant Testing

In dev, visit `http://localhost:3000?tenant=test` to see the tenant page for slug `test`.

In production, `test.dikho.in` routes to the same page via middleware.

## Tech Stack

| Layer               | Choice                                                    |
| ------------------- | --------------------------------------------------------- |
| Frontend / SSR      | Next.js 15 App Router, TypeScript, shadcn/ui, Tailwind v4 |
| Hosting             | Vercel                                                    |
| DB / Auth / Storage | Supabase                                                  |
| WhatsApp            | Meta WhatsApp Cloud API                                   |
| Payments            | Razorpay (UPI-native + mandates)                          |
| AI                  | Anthropic Claude (Sonnet)                                 |
| Analytics           | PostHog                                                   |
| Email               | Resend                                                    |
| Errors              | Sentry                                                    |

## Architecture

```
                    ┌─────────────────────────────────┐
                    │         dikho.in                │
                    │   (marketing / admin)           │
                    └────────────┬────────────────────┘
                                 │
          ┌──────────────────────┼──────────────────────┐
          │                      │                      │
   *.dikho.in               /dashboard             /api/webhook
  (tenant sites)          (owner PWA)            (WhatsApp bot)
          │                      │                      │
          └──────────────────────┴──────────────────────┘
                                 │
                         Supabase (Postgres + RLS)
```

## Team Conventions

- **Branch names:** `feat/phase-1-bot`, `fix/lead-lock-ux`
- **Commit format:** `feat: add WhatsApp onboarding state machine`
- **PRs:** Must pass typecheck + lint. One reviewer minimum.
- **No English jargon in owner-facing copy.** Use the `t()` helper from `@dikho/i18n`.
- **Mobile-first always.** Test on 375px width before marking a UI task done.

## Environment Variables

See `.env.example` for the full list with descriptions.

## Deployment

1. Push to GitHub
2. Connect repo to Vercel → two projects: `dikho-web` (apps/web) + `dikho-bot` (apps/bot)
3. Set root directory per project in Vercel settings
4. Add wildcard domain `*.dikho.in` to `dikho-web`
5. Set all env vars in Vercel project settings

## Docs

| File                        | Purpose                           |
| --------------------------- | --------------------------------- |
| `docs/PRODUCT-BRIEF.md`     | What we are building and why      |
| `docs/PHASE-0-DECISIONS.md` | Architecture choices from Phase 0 |
| `docs/CUSTOMER-INSIGHTS.md` | Verbatim owner quotes             |
| `docs/RUNBOOK.md`           | On-call procedures                |
