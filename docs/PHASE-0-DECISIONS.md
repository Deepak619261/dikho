# Phase 0 — Architecture Decisions

## Bot placement: `apps/bot` vs `apps/web/api`

**Decision:** `apps/bot` is a separate Next.js app in the monorepo.

**Why:** Keeps the WhatsApp webhook handler isolated from the tenant site renderer. In production both can be deployed as separate Vercel projects or merged — the boundary is explicit.

**Trade-off:** Two Vercel projects to manage. If this becomes a burden, merge the `/api/webhook` route into `apps/web` in Phase 1. Document that decision here.

---

## Tailwind v4

**Decision:** Using Tailwind CSS v4 (latest at scaffold time) with the `@tailwindcss/postcss` plugin.

**Why:** `create-next-app@15` defaults to Tailwind v4. v4 uses CSS `@theme inline` instead of `tailwind.config.js`. Brand tokens live in `globals.css`.

**Impact:** shadcn/ui components are hand-written (not `npx shadcn@latest add`) because shadcn's CLI targets Tailwind v3. Monitor shadcn v4 compatibility progress.

---

## shadcn/ui: CLI vs manual

**Decision:** Components are written manually in `components/ui/`, not via `npx shadcn`.

**Why:** shadcn CLI currently generates Tailwind v3 config. Manual copies are Tailwind v4-compatible and can be updated as shadcn catches up.

---

## Subdomain routing

**Decision:** Next.js middleware rewrites `{tenant}.dikho.in` → `/[tenant]` route.

**Why:** Standard Next.js multi-tenant pattern. Works on Vercel with wildcard domain config.

**Local dev:** Use `?tenant=<slug>` query param (middleware handles it) or add entries to `/etc/hosts`.

---

## Database types

**Decision:** `packages/db/src/types.ts` contains hand-written Zod schemas + a Database type skeleton.

**Why:** `supabase gen types` requires a connected project. Skeleton is replaced by generated types once the Supabase project is set up (run `pnpm supabase gen types --local > packages/db/src/database.types.ts`).
