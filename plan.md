# Dikho — Master Build Prompts

> Phase-wise prompts for building **Dikho**: a WhatsApp-first website + appointment + reviews + Google Maps presence builder for Indian local-service businesses, monetized via a lead-lock paywall.

---

## How to use this file

This file contains **5 self-contained master prompts** — one per phase. Each prompt is designed to be pasted directly into Claude Code (or any agentic dev tool) without modification.

**Workflow:**

1. For each phase, paste **`PROJECT BRIEF`** (Section A) **+ the phase-specific prompt** into Claude Code.
2. Let it scaffold and execute. Use the `Acceptance Criteria` block to verify completion.
3. When the phase is complete and you have the metrics listed, move to the next phase.
4. Use the **Targeted Sub-Prompts** (Section G) when you need to build a specific tricky piece (WhatsApp bot flow, Razorpay subscription, Bhashini voice, etc.).

**Token-saving tip:** if your dev tool supports project-level context files, save Section A as `CONTEXT.md` in the project root. Then each phase prompt only needs to reference it: _"Read CONTEXT.md first, then execute this phase."_

---

## Section A — PROJECT BRIEF (paste at the start of every phase prompt)

```
You are building Dikho, a side-project SaaS startup based in Chandigarh, India. Read this entire brief before writing any code.

# MISSION
Give Indian local-service businesses (salons, dentists, clinics, tutors, vets, physios, lawyers, CAs) a WhatsApp-built website + Google Business Profile presence + WhatsApp booking + reviews — free until real customers start arriving, then ₹199–₹499/month to unlock lead details. We replace the dead Google Business Profile website builder, the painful Wix/Squarespace experience, the spammy JustDial model, and the ₹15,000–50,000 freelancer that ghosts after delivery.

# BRAND IDENTITY
- Name: Dikho (दिखो) — Hindi imperative meaning "be seen / show up"
- Why: the entire promise is "Google pe Dikho, customers tak pahuncho" (Show up on Google, reach customers). The name IS the verb the owner needs to do.
- Pronunciation: DEE-kho. Two syllables. Universally understood across Hindi, Punjabi, Urdu, and most Indian languages.
- Devanagari logo wordmark: दिखो — use this on every owner-facing surface alongside the English "Dikho" wherever space permits.
- Master tagline (English-Hinglish): "Google pe Dikho. Customers tak Pahuncho."
- Master tagline (English-only, for international/investor decks): "Be seen. Get booked."
- Brand voice: warm, action-oriented, owner-respectful. Speak like a younger cousin helping their elder uncle/aunty get online — confident but never condescending. Use "ji" liberally with older owners. Never use English jargon (no "SEO", "domain", "conversion", "funnel", "CRM"). Translate to: "Google pe dikhna", "apni website", "customer aana", "WhatsApp pe booking".
- Brand verbs (use these throughout copy): Dikho (be seen), Pahuncho (reach), Bulao (invite), Jodo (connect — careful with political associations, prefer Pahuncho).
- Color direction: warm Indian palette anchored on a primary saffron-orange (associated with energy, attention, traditional commerce) plus a trust-blue accent. Avoid the generic SaaS-purple gradient. Final palette to be defined by the design pass in Phase 0.
- Typography: Inter for English UI, Noto Sans Devanagari for Hindi/Punjabi script, both available free on Google Fonts.
- Brand DON'Ts: do not use Bollywood references in marketing (alienates older owners), do not use stock photos of obviously-foreign people, do not use the word "small" to describe customers (use "local" instead — "small business" subtly disrespects).

# TARGET CUSTOMER
- Tier-2 / Tier-3 Indian small business owners
- Operates a local service business with appointments
- Comfortable on WhatsApp and Facebook, NOT comfortable with web tools
- Speaks Hindi, English, Hinglish, Punjabi (Chandigarh launch)
- Owns a smartphone, not a desktop
- Will NOT pay upfront. Will pay when they see "1 new customer tried to book today"

# CORE INSIGHT (this is the moat — protect it in every product decision)
Owners do not buy websites. They buy customers. The website is the Trojan horse. The real product is the lead-lock paywall: the moment a real visitor tries to book → owner sees "🔔 Naya customer aaya hai — ₹299 unlock to see details" → loss aversion converts.

# POSITIONING
"They charge before customers come. We charge only when customers come."

# UNIVERSAL PRODUCT, FOCUSED LAUNCH
The product serves ALL local-service verticals (one codebase, vertical-specific templates). The launch sequence is focused:
- Wave 1 (Month 1): Salons + spas in Chandigarh
- Wave 2 (Month 2): Dentists + clinics
- Wave 3 (Month 3): Tutors, physios, vets
- Wave 4 (Month 4+): Lawyers, CAs, architects
Build one universal platform. Sell it differently per vertical.

# PRICING
Three tiers, vertical-based:
- Dikho Lite (tutors, small salons): ₹199/mo or ₹1,999/yr
- Dikho Pro (salons, spas, physios, vets, gyms, cafés): ₹299/mo or ₹2,999/yr
- Dikho Clinic (dentists, doctors, labs, lawyers, CAs): ₹499/mo or ₹4,999/yr
Free forever (the hook): subdomain site, GBP setup, WhatsApp click-to-chat, review display, lead COUNTER (locked details).
Paid unlocks: lead names + phone numbers, booking calendar, review automation, monthly GBP posts, custom domain, voice updates, ad templates.
Free → paid trigger: first lead arrives OR 15 days end (whichever first). UPI mandate via Razorpay on first paid month.

# TECH STACK (non-negotiable for v1 — do not substitute without strong reason)
- Frontend / SSR: Next.js 15 (App Router), TypeScript, shadcn/ui, Tailwind
- Hosting: Vercel (free tier, then Pro)
- DB / Auth / Storage: Supabase (Postgres + RLS + Storage + Auth)
- WhatsApp: Meta WhatsApp Cloud API (primary), Twilio (fallback)
- Payments: Razorpay (UPI-native + autopay/mandates)
- AI content generation: Claude API (Sonnet 4.5)
- Voice → text (Phase 2+): Bhashini API (Govt of India, Indian languages), Whisper API as fallback
- Google Business Profile: Google My Business API
- Analytics: PostHog free tier
- Transactional email: Resend
- Sentry for error tracking (free tier)

# DOMAIN MODEL (mental — design the schema accordingly)
- Tenant: one business, owns one or more sites
- Site: subdomain (e.g., drmehta.dikho.in), template, theme, content blocks, photos, services, hours, reviews
- Lead: a booking attempt (name, phone, requested slot, service, status)
- Subscription: tenant-level, links to Razorpay subscription_id, status (free | trialing | active | paused | cancelled)
- Owner: WhatsApp-verified user, one or more tenants
- LeadUnlockEvent: audit of paywall transitions

# CONSTRAINTS
- Bootstrapped: ₹20,000–25,000 total launch budget
- Team: 2–3 developers, side project, all on Claude subscriptions
- Timeline: first paying customer in 30 days
- Sales: friends in field sales available in Chandigarh; no Meta ad budget in Month 1
- Founders are technical, full-stack capable, fresh to the SMB space

# QUALITY BAR
- Mobile-first always. 98% of users come via mobile. If it does not look right on a 6-inch screen, it is broken.
- Hindi + English on day one. Punjabi in Phase 2. Owner-side onboarding language toggle is critical.
- Every page must work on a 3G connection. Optimize images, lazy-load everything below the fold.
- The WhatsApp bot must complete onboarding in under 10 minutes for a non-technical owner.
- Lead-lock UX must be psychologically tight: visible counter, masked preview ("Pri***" + first name + time-of-day), prominent unlock CTA, single-tap UPI checkout via Razorpay.
- No English-only error messages reach the owner. Errors are translated and friendly.

# BEHAVIORAL RULES
- When in doubt about scope, cut. Anything not explicitly listed in the current phase is v(N+1).
- Default to manual + checklist for things that are hard to automate (e.g., GBP claim flow). Automate later.
- No premature optimization. Ship the ugly version, instrument it, iterate.
- Every feature must answer: "Does this help the owner get and convert one more customer?" If no, do not build it.
- Write code your future self can read. Avoid clever. Prefer obvious.

You will receive a phase-specific brief next. Execute it given the constraints above.
```

---

## Section B — Phase 0: Project Setup (Day 0–2)

**Goal:** Bootstrap the repo, accounts, and dev environment so Phase 1 has zero friction.

### Phase 0 Master Prompt

```
[PASTE PROJECT BRIEF FROM SECTION A]

# PHASE 0 — PROJECT SETUP

GOAL: Stand up the repository, third-party accounts, and a deployable "hello world" before any product code is written. End-state: pushing to main deploys a public Next.js page on a Vercel subdomain, connected to Supabase, with environment variables wired and CI green.

DELIVERABLES:
1. Monorepo using pnpm workspaces with three packages:
   - apps/web (Next.js 15 App Router, TypeScript, Tailwind, shadcn/ui)
   - apps/bot (WhatsApp webhook handler — separate Vercel deployment or same app, your call but document the choice)
   - packages/db (Supabase client + Zod-typed schema + database types)
2. Supabase project initialized (free tier). Empty schema, but auth enabled with phone OTP provider and Google OAuth.
3. Vercel project linked to GitHub, auto-deploy on main, preview deploys on PRs.
4. Environment variables wired (use Vercel env management):
   - NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
   - WHATSAPP_VERIFY_TOKEN, WHATSAPP_ACCESS_TOKEN, WHATSAPP_PHONE_NUMBER_ID (placeholders ok)
   - RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET (placeholders ok)
   - ANTHROPIC_API_KEY
   - GOOGLE_MY_BUSINESS_CLIENT_ID, GOOGLE_MY_BUSINESS_CLIENT_SECRET (placeholders ok)
   - RESEND_API_KEY (placeholder ok)
5. Subdomain routing scaffolded: requests to *.dikho.in (or whatever domain is registered) hit a [tenant] dynamic route that resolves to a tenant-specific page. For Phase 0, render the tenant slug on screen.
6. shadcn/ui initialized with default config. Install: button, input, card, dialog, sheet, toast, badge, skeleton, form.
7. Tailwind theme: clean, mobile-first. Define brand color tokens (primary, accent, success, warning, danger). Default font: Inter for English, Noto Sans Devanagari for Hindi.
8. ESLint + Prettier + TypeScript strict mode + commit hooks via Husky.
9. README at repo root with: setup instructions, env vars, scripts, architecture diagram (text is fine), team conventions.
10. .env.example committed.

ACCEPTANCE CRITERIA:
- pnpm install && pnpm dev runs locally with no errors.
- Pushing to main deploys to Vercel and produces a public URL.
- Visiting https://test.dikho.in shows "Tenant: test" rendered server-side.
- Supabase connection verified by reading from a test "ping" table.
- Type-check passes (pnpm typecheck) and lint passes (pnpm lint).

DO NOT BUILD YET:
- WhatsApp bot logic
- Onboarding flow
- Site generator
- Owner dashboard
- Anything user-facing beyond the tenant-resolution page

ASK BEFORE PROCEEDING IF:
- The chosen domain is unavailable (suggest 3 alternatives based on Dikho brand).
- Vercel subdomain wildcard requires a custom configuration the user must do manually.
- Supabase free tier limits will be hit in Phase 1 (verify quotas).
```

---

## Section C — Phase 1: MVP (Days 3–30)

**Goal:** Ship a vertical slice end-to-end for **salons in Chandigarh**. WhatsApp onboarding → live site → lead capture → lead-lock paywall → Razorpay payment → unlocked details. Get **5 paying customers** by Day 30.

### Phase 1 Master Prompt

```
[PASTE PROJECT BRIEF FROM SECTION A]

# PHASE 1 — MVP (Days 3–30)

GOAL: Working end-to-end vertical slice for SALONS only, demonstrable to a real Chandigarh salon owner over WhatsApp. From "owner messages our number" to "owner pays ₹299 to unlock 1 lead" must work in production.

DELIVERABLES:

## 1. WhatsApp Onboarding Bot
- Meta WhatsApp Cloud API integration. Webhook receives messages, replies via Cloud API.
- Conversation flow (in Hinglish + English, language detected from first message):
  1. "Namaste 🙏 Dikho mein swagat hai. Aapke business ka 10 minute mein FREE Google website banayenge. Shuru karein? (Haan / Nahi)"
  2. Business name
  3. Business type (interactive list: Salon, Spa, Dentist, Doctor, Tutor, Vet, Physio, Other) — Phase 1 only fully supports Salon, others say "Aap waitlist mein hain")
  4. Address (Google Places autocomplete — send a location-share request)
  5. Operating hours (interactive: 9-6, 10-7, 10-9, 24/7, Custom)
  6. Top 3 services (free text or pick from a salon-specific suggestion list)
  7. Send 3 photos (1 storefront, 1 inside, 1 work sample). Validate they are images, store in Supabase Storage.
  8. Owner's name + preferred language for site (Hindi / English / Hinglish)
  9. Generate site → reply with the live URL: "Aapka website live hai 🎉 https://[slug].dikho.in — share kijiye!"
- Bot must handle: invalid input gracefully, resume mid-conversation if owner drops off (state stored in Supabase), allow "ruko" / "stop" to pause.
- Each step persists state in a `bot_sessions` table so a dropped conversation resumes from the last answered question.

## 2. AI-Generated Site (Salon Template Only for Phase 1)
- Single salon template with these blocks:
  - Hero: business name, tagline (Claude-generated from business type + services), CTA "Book on WhatsApp"
  - About: short intro paragraph (Claude-generated from owner inputs)
  - Services + indicative pricing (owner can skip pricing in onboarding)
  - Photos gallery (3 uploaded + 2 stock fallbacks if owner uploads fewer)
  - Hours
  - Map (Google Maps embed, free tier)
  - Reviews placeholder (empty in v1, we add manual import in Phase 1.5)
  - WhatsApp floating button + Book Now button (both lead to lead-capture flow)
- Server-rendered (Next.js App Router with `generateStaticParams` if possible, ISR for updates).
- LCP under 2.5s on 4G. Total page weight under 800KB. Lighthouse mobile score 85+.
- Subdomain routing: salon-name.dikho.in resolves to the tenant's site. Custom domains deferred to Phase 2.
- SEO: per-tenant <title>, meta description, OpenGraph, JSON-LD LocalBusiness schema. Sitemap auto-generated.
- Hindi + English toggle on the site (translated copy, owner picks default in onboarding).

## 3. Lead Capture Flow
- "Book Now" → modal/sheet with: name, phone (with India +91 prefix locked), preferred date, preferred time, service. Phone validation with libphonenumber-js.
- On submit: insert into `leads` table with status='new', send WhatsApp notification to owner via Cloud API: "🔔 Naya customer aaya hai! Detail dekhne ke liye Dikho app open karein." Link to owner dashboard.
- Visitor sees: "Aapki request bhej di gayi! [Owner name] aapko jaldi reply karenge."

## 4. Owner Dashboard (Mobile-First Web App)
- Auth: WhatsApp OTP via Supabase phone provider, fallback to Google OAuth.
- Home screen tabs: Leads, Site, Reviews, Settings.
- Leads tab (THE MOST IMPORTANT SCREEN):
  - List of leads. Each leads card shows:
    - If FREE plan: "🔔 New booking attempt — 2 hours ago" + masked first letter of name + masked phone "98****1234" + service + a big "Unlock for ₹299" button.
    - If PAID plan: full name, phone (tap-to-call, tap-to-WhatsApp), service, slot, status dropdown.
  - Lead counter at top: "X new this month, Y unlocked"
- Site tab: preview, share button (copies URL or opens WhatsApp share), edit basic fields (hours, services, photos).
- Reviews tab: shows manually pasted reviews for v1. Phase 2 automates collection.
- Settings: language, billing, logout.

## 5. Lead-Lock Paywall + Razorpay
- Paywall trigger: owner taps "Unlock for ₹299" OR 15 days have passed since site went live, whichever first.
- Razorpay Subscription created via API. Plan selected based on tenant's vertical (Phase 1 = Dikho Pro = ₹299/mo). Use Razorpay's "subscription with mandate" so first payment authorizes future auto-debits.
- Razorpay Checkout via UPI (preferred), card fallback. After successful first payment: tenant.plan = 'dikho_pro', subscription_status = 'active', all leads unlock.
- Webhook handler verifies signature, idempotently updates subscription state.
- "Manage billing" page in Settings: next billing date, last payment, pause/cancel.
- Failed payment grace period: 3 days. After that, leads re-lock until payment succeeds.

## 6. Google Business Profile Workflow (Semi-Manual for Phase 1)
- During onboarding bot, ask: "Aapka Google Maps pe listing hai? (Haan / Nahi / Pata nahi)"
- If Nahi or Pata nahi: bot says "Hum aapke liye Google pe set kar denge — sales team WhatsApp karegi."
- Create a `gbp_tasks` table with status pending. Sales friend gets a daily summary email of pending GBP tasks.
- Manual workflow: sales rep helps owner claim/create the listing, adds the website URL pointing to dikho.in subdomain, uploads photos. Mark task done.
- Phase 2 will automate via GMB API.

## 7. Telemetry + Founder Dashboard
- Internal-only `/admin` route, password-gated.
- Shows: total tenants, total leads, conversion rate (lead → unlock → paid), MRR, recent signups, GBP task queue, error count from Sentry.
- Daily Slack/Discord webhook with: new tenants today, new leads today, new payments today, churn events.

## 8. Hindi/English Content Library
- All bot messages, site templates, dashboard strings live in `packages/i18n/locales/{en,hi}.json`.
- All Claude-generated content is generated in the language the owner chose. Use a system prompt template like:
  "You are writing the about-section of a salon's website. Owner's name: X. Services: Y. Tone: warm, approachable, professional. Output in {language}. 60-80 words. No emojis."

ACCEPTANCE CRITERIA (Phase 1 is "done" when):
- A real salon owner who has never used the product can complete onboarding in under 10 minutes purely on WhatsApp.
- The generated site loads in under 2.5s on a Jio 4G connection in Chandigarh.
- A test visitor can submit a booking, the owner gets a WhatsApp notification within 30 seconds, and the lead appears locked in the dashboard.
- Owner can pay ₹299 via UPI in under 2 taps and see all leads unlocked immediately.
- Sentry has zero unresolved P0/P1 errors for 48 hours.
- Founder dashboard correctly reflects test transactions.
- 5 real paying customers exist in production by Day 30. (This is a GTM goal, not a code goal — but the code must support it.)

DO NOT BUILD IN PHASE 1:
- Voice input (Phase 2)
- Custom domain reselling (Phase 2)
- Calendar with slot management (Phase 2)
- Auto review collection (Phase 2)
- GBP API automation (Phase 2)
- Auto-generated GBP posts (Phase 3)
- Meta ad templates (Phase 3)
- More verticals beyond salon (Phase 2 = dentist, Phase 3 = others)
- Punjabi, Tamil, Marathi, etc. (Phase 2+)

ASK BEFORE PROCEEDING IF:
- Meta WhatsApp Cloud API verification for the business is delayed (unblock with Twilio sandbox for dev, plan production cutover).
- Razorpay KYC is taking longer than 5 days (use Stripe with USD pricing for dev only, never ship to production).
- A salon owner in user-testing finds onboarding longer than 12 minutes (re-design the flow before more dev work).

KEEP A LIVING DOC AT docs/PHASE-1-DECISIONS.md WITH:
- Every architectural choice and why
- Every cut (what we did NOT build and why)
- Every owner-feedback observation from sales tests

OUTPUT FORMAT FOR EACH WORK SESSION:
- Start by reading the latest commit history and PHASE-1-DECISIONS.md.
- State what you are about to build and why.
- Build it. Test it. Commit with a clear message.
- Update PHASE-1-DECISIONS.md if you made a meaningful choice.
- End with: "Next session, I will tackle X because Y."
```

---

## Section D — Phase 2: Expansion (Days 31–90)

**Goal:** Add **dentists** as second vertical. Ship voice input (Bhashini), custom domains, automated review collection, calendar/booking with slots, and Punjabi. Get to **50 paying customers**.

### Phase 2 Master Prompt

```
[PASTE PROJECT BRIEF FROM SECTION A]

# PHASE 2 — EXPANSION (Days 31–90)

PREREQUISITES: Phase 1 is shipped. 5+ paying customers exist. Phase 1 acceptance criteria all green.

GOAL: Layer on the differentiators (voice + auto reviews + dentist vertical) and open the second city. End-state: 50 paying customers across Chandigarh + one more Punjab city, MRR ≈ ₹17,500.

DELIVERABLES:

## 1. Voice Input via Bhashini (THE differentiator)
- New onboarding shortcut: owner sends a 30-90 second voice note in Hindi/Punjabi/English describing their business → AI transcribes via Bhashini → Claude extracts structured fields (name, services, hours, USP, tone) → site generated → owner confirms.
- Voice updates: post-onboarding, owner can send a voice note like "kal se Sunday off hai" → AI parses → schedules a hours change → owner confirms with one tap.
- Bhashini API integration for ASR (Hindi, Punjabi, English). Whisper API as fallback when Bhashini is down or confidence is low.
- Confidence threshold: if transcription confidence < 0.75, ask owner to confirm via text.
- Audio files stored in Supabase Storage with 30-day retention.

## 2. Dentist + Clinic Vertical (Dikho Clinic — ₹499/mo)
- New vertical template: "DentistTemplate" with appointment-centric layout:
  - Hero with "Book Appointment" prominent
  - Doctor bio + qualifications block
  - Treatments offered with indicative pricing
  - Insurance accepted (optional)
  - Trust signals: years in practice, patients treated, certifications
  - Testimonials block (auto-populated from review collection)
- Vertical-specific bot flow: asks for doctor name, specialization, registration number, treatments, insurance.
- Razorpay plan switched dynamically based on vertical (₹299 for salon, ₹499 for dental/clinic).
- Compliance: add a "medical disclaimer" footer block, do not generate medical claims in AI copy. Claude system prompt must include: "You are writing for a dental clinic. Do not make medical efficacy claims. Stick to professional, factual, reassuring tone."

## 3. Calendar / Booking with Real Slots
- Owner-side: calendar view showing booked slots, blocked slots, available slots. Edit hours per day.
- Customer-side: Book Now flow now shows available 30-min slots for the next 14 days. Owner can configure slot duration per service.
- Confirmation flow: customer books → owner gets WhatsApp notification with Approve/Reject buttons → if approved, customer gets WhatsApp confirmation with calendar invite (.ics).
- Cancellations: customer can cancel via WhatsApp link up to 2 hours before. Owner can cancel anytime, customer gets notified.
- Conflicts: prevent double-booking with DB-level constraints.

## 4. Custom Domain Reselling
- Integrate with a domain reseller API (BigRock, ResellerClub, or GoDaddy reseller). Pick one based on best margin + India support.
- In owner dashboard → Settings → "Get your own domain" → search availability → buy → ₹999/yr (your cost ~₹650, margin ~₹349).
- Auto-configure DNS: add CNAME pointing to dikho.in's edge router. Verify SSL via Let's Encrypt automatically.
- Keep the dikho.in subdomain active as a permanent backup (SEO juice retention).
- Migration: when custom domain goes live, set canonical tags + 301 redirects from subdomain.

## 5. Automated Review Collection
- Trigger: 4 hours after a booked appointment time, send WhatsApp message: "Namaste! [Customer name] ji, [Owner business] mein aaj ka experience kaisa raha? Ek star rating dijiye 🙏 [1] [2] [3] [4] [5]"
- If 4–5 stars: "Thank you! Kya aap Google pe bhi review de sakte hain? [Direct link to GBP review form]"
- If 1–3 stars: "Sorry to hear that. [Owner] aapse direct baat karenge — kya likhna chahein?" → forwards to owner privately, NOT public.
- Reviews captured (4-5 star public ones) auto-display on the website's reviews section.
- This is the "review funnel" pattern: maximize public good reviews, capture bad ones privately for the owner to address.

## 6. Punjabi Language Support
- Translate all UI strings, bot messages, and template copy to Punjabi (Gurmukhi script).
- Bhashini ASR for Punjabi voice input.
- Add Punjabi to language toggle on site and dashboard.
- Test with 3 Punjabi-speaking owners before production rollout.

## 7. GBP API Automation
- Replace the manual GBP task queue from Phase 1 with the Google My Business API.
- Owner connects their Google account via OAuth → we fetch their location(s) → we update website URL, hours, photos, attributes automatically.
- For owners without a GBP listing, guide them through claiming via the API where possible (some steps still require Google's verification flow).
- Phase 1's manual queue stays as a fallback when API path fails.

## 8. Self-Serve Plan Upgrade/Downgrade
- Owner can upgrade Lite → Pro → Clinic from dashboard. Razorpay handles proration.
- Yearly billing option added (₹1,999/₹2,999/₹4,999) — bigger CTA color since it improves cash flow.
- Cancellation flow: ask for reason, offer 50% off for 2 months as save attempt, then cancel cleanly. Track churn reasons in DB.

## 9. Founder + Sales Tooling
- Sales rep view in /admin: assigned leads (potential customers in pipeline), conversion status, next-action.
- Bulk WhatsApp messaging for sales rep to message warm leads via Meta-approved template messages only.
- Daily KPI digest improved: cohort retention, vertical-wise conversion, ARPU.

ACCEPTANCE CRITERIA:
- 30-second voice note successfully generates a working site for a Punjabi-speaking owner with no further input needed beyond confirmation.
- A dentist in Mohali pays ₹499/mo and gets a working clinic-style site.
- A salon owner buys a ₹999/yr custom domain in under 90 seconds; SSL is live within 10 minutes.
- A customer who books today receives a WhatsApp review request 4 hours after their appointment time.
- 50 paying customers in production. MRR > ₹15,000.

DO NOT BUILD IN PHASE 2:
- Tutors, vets, physios, gyms (Phase 3)
- Tamil, Marathi, Bengali, Gujarati (Phase 3)
- Meta/Google ad templates (Phase 3)
- Auto-generated GBP weekly posts (Phase 3)
- E-commerce / catalog (Phase 4 sub-product)
- Multi-staff calendar (defer to Phase 4)

ASK BEFORE PROCEEDING IF:
- Bhashini API quotas are insufficient or pricing changes — fall back to Whisper for affected languages and document.
- Domain reseller's margins drop below ₹250 — find an alternative or remove the feature.
- Voice transcription accuracy in Punjabi falls below 80% — escalate before shipping.
```

---

## Section E — Phase 3: Scale (Days 91–180)

**Goal:** Open 4 more verticals + 5 more languages, turn on **Meta ad funnel**, hire 1 sales rep, hit **200 paying customers** (₹65k MRR / ₹7.8L ARR).

### Phase 3 Master Prompt

```
[PASTE PROJECT BRIEF FROM SECTION A]

# PHASE 3 — SCALE (Days 91–180)

PREREQUISITES: Phase 2 is shipped. 50+ paying customers, voice working, dentist + salon both performing.

GOAL: Multiply the GTM motion. Add verticals + languages + paid acquisition. End state: 200 paying customers, ₹65k MRR, two cities live, one paid sales rep, demonstrable repeatable playbook.

DELIVERABLES:

## 1. Wave 3 Verticals
Add templates + bot flows for: tutors, physios, vets, gyms/fitness studios, diagnostic labs.
Each template needs: 1-2 vertical-specific blocks (e.g., tutors get "Subjects taught" + "Trial class"; vets get "Pet types treated" + "Emergency hours"). Re-use 80% of the salon/dentist scaffold.
Pricing assignment per vertical: tutors → Lite (₹199), physios/vets/gyms → Pro (₹299), labs → Clinic (₹499).

## 2. Multilingual Expansion
Add Marathi, Tamil, Gujarati, Bengali, Telugu (these 5 + existing Hindi/English/Punjabi = 8 languages).
- Bhashini ASR coverage for all 8.
- UI translation: use a translation memory tool (Crowdin or Lokalise free tier) so future strings auto-prompt for translations.
- AI content generation in target language with culturally appropriate tone (Claude system prompt updated per language).
- Language detection from owner's first WhatsApp message; switchable in Settings.

## 3. Meta Ad Funnel (Self-Serve Acquisition Engine)
- Landing pages per vertical + city: /salon-website-chandigarh, /dentist-website-pune, /tutor-website-online, etc.
- Conversion: visitor sees pricing + 30-second demo video → clicks "Get Free Site on WhatsApp" → opens WhatsApp deep link to bot.
- Meta ad creatives: 5 per vertical, A/B testable, video-first (15-30 sec testimonials from Phase 1/2 customers).
- Pixel + Conversions API set up. Track cost-per-WhatsApp-conversation, cost-per-paid-customer.
- Budget management: ₹500/day per vertical, scale winners.
- Target CAC < 0.5 × annual ARPU (so Dikho Pro at ₹2,999/yr → CAC < ₹1,500).

## 4. Auto-Generated GBP Posts (Weekly Content Engine)
- Weekly cron generates a GBP post per active customer via Claude:
  - Salon: "✨ This week at [Name]: try our [Service] for ₹[Price]. Book on WhatsApp."
  - Dentist: "Did you know? [Dental health tip]. Schedule a checkup at [Clinic]."
  - Tutor: "[Subject] tip of the week: [Tip]. Trial class available."
- Owner gets a WhatsApp preview → approves with 👍 → posts via GMB API.
- Tracks GBP impression lift. Show in dashboard: "Your Google views went up 23% this month."

## 5. Meta + Google Ad Templates (Customer-Facing)
- Add an "Promote" tab in dashboard.
- One-tap creation of a Meta ad: pick objective (calls / WhatsApp messages / website visits), pick budget (₹100-500/day), Claude generates ad copy + uses owner's photos.
- Owner approves → we launch the ad via Meta Marketing API on their connected ad account (or our managed account with markup, business model TBD).
- Same for Google Search ads via Google Ads API for Dikho Clinic tier customers (highest LTV).

## 6. Sales Rep Hiring + Tooling
- Hire 1 full-time sales rep in Chandigarh (CTC ₹25-35k + commission). Onboarding deck, scripts, CRM integration.
- Sales rep dashboard: territory map (Sectors of Chandigarh), assigned leads, conversion targets, commission tracker.
- Lead routing: Meta-ad-generated WhatsApp conversations that don't self-convert in 48 hours auto-route to sales rep for human follow-up.

## 7. Open Second City (Pune or Bangalore)
Pick one based on which vertical wave performs best:
- If salons + dentists are strongest → Pune (high salon density, English+Marathi+Hindi)
- If tutors + clinics → Bangalore (English-tolerant, dense)
Hire 1 part-time field agent or partner with a local sales franchise. Replicate the Chandigarh playbook.

## 8. Retention & Churn Reduction
- Cohort retention dashboard: month-over-month % of customers still paying.
- Health score per customer: based on lead volume, login frequency, GBP post engagement. Owners with score < 30 get an outreach playbook (free month, content help).
- Re-activation campaign for churned customers: "Aapke jaate hi 12 customers Google pe aa gaye. Wapas aana hai?"

## 9. Public Roadmap + Community
- Build a Discord/WhatsApp community of customers. Weekly tips, monthly winner highlights.
- Public roadmap (Trello or Linear public view) so customers can vote on features.

ACCEPTANCE CRITERIA:
- 200 paying customers across at least 5 verticals and 8 languages.
- MRR ≥ ₹65,000.
- Self-serve signup (Meta ad → WhatsApp → paid) accounts for ≥40% of new customers.
- Sales rep hits monthly quota of 25 paid customers in Chandigarh.
- Month-3 retention ≥ 75%.
- One success story (case study with metrics) per vertical, used in marketing.

DO NOT BUILD IN PHASE 3:
- E-commerce / catalog sub-product (Phase 4)
- Multi-staff calendars (Phase 4)
- Native mobile app — keep it WhatsApp + responsive web (Phase 4 evaluation)
- API for third parties (later, if at all)

ASK BEFORE PROCEEDING IF:
- CAC exceeds ₹2,000 sustainably across 30+ days — pause Meta spend, fix the funnel.
- Sales rep cannot hit 10 paid customers/month after 60 days — replace or rethink the role.
- Multilingual translations are visibly poor in user testing — invest in human translator pass before launch.
```

---

## Section F — Phase 4: National Rollout (Months 7–12)

**Goal:** Multi-city rollout, B2B distribution partnerships, optional commerce sub-product, profitability decision (raise or stay bootstrapped), **2,000 paying customers / ₹50L+ ARR**.

### Phase 4 Master Prompt

```
[PASTE PROJECT BRIEF FROM SECTION A]

# PHASE 4 — NATIONAL ROLLOUT (Months 7–12)

PREREQUISITES: Phase 3 is shipped. 200+ paying customers across 5+ verticals, repeatable acquisition, paid sales playbook validated.

GOAL: Operate as a real company. 2,000 paying customers nationwide, ₹50L+ ARR, decision point on raising vs bootstrapping. Build distribution moats that lone competitors can't replicate.

DELIVERABLES:

## 1. National Self-Serve Funnel
- Pan-India Meta + Google ad campaigns by vertical + state.
- City-specific landing pages auto-generated for top 50 cities (Tier 2/3 priority).
- WhatsApp bot serves national traffic — capacity-tested for 1,000 concurrent conversations.

## 2. B2B Distribution Channels
Pick at least 3 to launch:
- CA networks: free tool for CAs to onboard their SMB clients, revenue share on Dikho subscriptions.
- Payment aggregators (Razorpay, PayU): co-marketing with their merchant base.
- Hyperlocal newspapers / community FB groups: affiliate code system.
- Telecom resellers (Jio Saavn, Airtel Business): bundled offering.
- BharatX / Khatabook / Vyapar: API integration so their users see "Get a website with Dikho" CTA.

## 3. Optional Commerce Sub-Product
For verticals where it makes sense (salons selling products, vets selling pet food, tutors selling courses):
- Add catalog + checkout to existing site as a paid add-on (₹199/mo on top of base plan).
- Integrate with Shiprocket for shipping or D2C-style local delivery.
- Keep it deeply optional — most local-service customers will not need this.

## 4. Multi-Staff Calendars (For Salons, Clinics, Gyms)
- Multiple practitioners, each with own calendar, services, hours.
- Customer picks practitioner during booking.
- Practitioner gets their own login, sees only their leads.
- Pricing tier addition: "Dikho Pro Multi" at ₹599/mo for 3+ staff, "Dikho Clinic Multi" at ₹999/mo.

## 5. Native Mobile App (Owner-Side Only)
- React Native (Expo) wrapper around the existing web dashboard.
- Add: native push notifications for new leads (better than WhatsApp pings for hyper-active owners).
- App Store + Play Store presence improves trust signaling.
- Customer-side stays web — no consumer app, ever (anti-pattern for our model).

## 6. Profitability vs Fundraising Decision Point
At month 9, calculate:
- MRR growth rate, gross margin, CAC payback, LTV/CAC.
- If LTV/CAC > 4 and CAC payback < 6 months: stay bootstrapped, reinvest.
- Else: raise a ₹3-7cr seed (likely investors: Blume, Together Fund, India Quotient, Better Capital — sector-fit).
- Prepare data room either way: financial model, customer cohort tables, vertical economics, India SMB TAM analysis (60M+ MSMEs, addressable for Dikho ≈ 8M).

## 7. Community + Brand
- Annual "Dikho Local Heroes" awards in each city.
- YouTube channel with case studies in regional languages.
- Owner-generated content campaign: "#MeraDikhoWebsite" on Instagram.

## 8. Defensive Moats
- Lead-data network effects: predictive booking patterns from cross-tenant data → "Salons in your area get 40% more bookings on Sundays — open longer?"
- Dikho Score: a credit/trust score for each business based on their lead-to-booking conversion, on-time appointment rate, review trends. License this to lenders or insurers later.
- Exclusive integrations: WhatsApp Business Platform partnership, Google MyBusiness API premium quota.

ACCEPTANCE CRITERIA:
- 2,000+ paying customers, MRR ≥ ₹4 lakh / ARR ≥ ₹50 lakh.
- Customer acquisition through B2B partners ≥ 25% of new sign-ups.
- Active in 25+ cities.
- LTV/CAC measured and reported monthly; 90-day retention ≥ 70%.
- Decision documented: raise or bootstrap, with data justification.

DO NOT BUILD IN PHASE 4:
- International expansion (focus India for at least 18 months total).
- Generic horizontal SaaS features (CRM, marketing automation suites). Stay vertical and obsessed.
- An open API with public docs — too early.
```

---

## Section G — Targeted Sub-Prompts (Use Anytime)

These are deep-dive prompts for tricky pieces. Use them when the main phase prompt's deliverable for that piece needs more detail.

### G1. WhatsApp Bot Conversation Flow

```
Build the Dikho WhatsApp onboarding bot conversation engine using Meta WhatsApp Cloud API + Next.js webhook + Supabase state machine.

REQUIREMENTS:
- State machine with these states: GREETING, ASKING_NAME, ASKING_VERTICAL, ASKING_ADDRESS, ASKING_HOURS, ASKING_SERVICES, ASKING_PHOTOS, ASKING_LANGUAGE, GENERATING_SITE, COMPLETE.
- Each user message updates state in `bot_sessions` table (phone, current_state, collected_data jsonb, last_message_at).
- Bot uses interactive list messages and buttons where possible (faster than free text).
- Hindi-first, English fallback. Detect language from first message.
- Validation: phone number format, image MIME types, address must resolve in Google Places.
- Resume logic: if user returns after >24h, ask "Continue where we left off?"
- Idempotency: webhook is called multiple times for the same message; dedupe by message ID.
- Outbound rate limit aware (Meta caps message tiers).

EDGE CASES TO HANDLE:
- User sends gibberish or off-topic — gentle redirect.
- User sends image when text expected — graceful prompt to retry.
- User says "stop" or "ruko" — pause and confirm cancellation.
- User asks a question — bot answers from a small FAQ knowledge base, then returns to flow.

DELIVERABLE: full implementation in apps/bot, with unit tests for the state machine.
```

### G2. Lead-Lock Paywall UX (Conversion-Critical)

```
Build the lead-lock paywall in the owner dashboard. This is the MOST CONVERSION-CRITICAL screen in Dikho.

PSYCHOLOGICAL DESIGN PRINCIPLES (apply ruthlessly):
1. Loss aversion: show that customers ARE coming, owner is missing them.
2. Social proof: "12 owners unlocked their leads this week."
3. Scarcity: "These leads expire in 7 days — customers move on."
4. Frictionless payment: single-tap UPI checkout via Razorpay.
5. Hindi/regional language for ALL payment-related copy — even the smallest button.

UI ELEMENTS:
- Hero counter: big number "🔔 3 new bookings". Below: "₹299/month to see who".
- Lead cards (locked state): masked first letter "P***", masked phone "98****1234", service "Haircut", time-of-day "today, 2pm".
- Unlock CTA: full-width primary button. Razorpay opens directly, UPI selected by default.
- After unlock: confetti animation. All leads expand with full info.
- Recurring billing reminder: subtle banner "Aapki next billing 12 December ko hogi."

A/B test variants:
- Variant A: "Unlock for ₹299" (utility framing)
- Variant B: "Get these 3 customers for ₹299" (outcome framing)
- Track which converts better.

ANALYTICS EVENTS to fire:
- paywall_viewed
- paywall_cta_clicked
- razorpay_checkout_opened
- payment_succeeded
- payment_failed
- leads_unlocked

Make this screen loadable in <800ms even on 3G. Cache aggressively. Server-render the locked counter.
```

### G3. Razorpay Subscription with UPI Mandate

```
Implement the Razorpay subscription flow for Dikho with UPI autopay mandate.

REQUIREMENTS:
1. Plan creation API: 3 plans for monthly (199, 299, 499) and 3 for yearly (1999, 2999, 4999).
2. Subscription creation API: pass plan_id based on tenant.vertical.
3. Checkout opens with UPI Mandate as default method.
4. Webhook handler at /api/webhooks/razorpay:
   - Verify signature.
   - Handle events: subscription.activated, subscription.charged, subscription.completed, subscription.cancelled, subscription.halted, payment.failed.
   - Idempotent: same event ID processed once.
5. State machine for subscription_status: trialing → active → past_due → cancelled (or active → paused → active).
6. Past_due grace: 3 days. After grace, leads re-lock.
7. Pro-rated upgrade/downgrade across tiers.
8. Cancellation: end-of-cycle by default, immediate option in Settings.
9. Indian tax: GST 18% on the gross amount, displayed and collected separately.

TEST PLAN:
- UPI mandate creation in test mode.
- Mock webhook events for all 6 above.
- Failed-payment retry logic.
- Yearly billing with proration.
```

### G4. Bhashini Voice Onboarding

```
Implement the voice-onboarding shortcut: owner sends a 30-90s voice note → working Dikho site generated.

PIPELINE:
1. WhatsApp media webhook receives audio/ogg.
2. Download to Supabase Storage (transient bucket, 30-day TTL).
3. Bhashini ASR API call (specify language code from owner's stated preference; fallback to Hindi).
4. If confidence < 0.75: ask owner to confirm transcription via text.
5. Send transcription + system prompt to Claude:
   "Extract structured fields from this business owner's voice note. Output JSON with: business_name, vertical (one of: salon|spa|dentist|doctor|tutor|vet|physio|other), services (array), hours (object), address_hint, languages_spoken, tone_descriptors. If a field is missing, use null."
6. For null fields, bot asks targeted follow-up questions.
7. Generate site with extracted data.
8. Owner reviews → confirms → site goes live.

ERROR HANDLING:
- Audio too short (<5s): "Thoda aur batayein."
- Audio too long (>120s): truncate at 90s, transcribe, note in dashboard.
- Bhashini down: fallback to Whisper API (English/Hindi acceptable).
- Background noise: warn owner, ask to redo.

SUCCESS METRIC: 70%+ of voice-only onboardings complete without any text fallback.
```

### G5. Site Template System (Vertical-Aware)

```
Design the site template system so that ONE codebase serves all verticals, but each vertical feels custom.

ARCHITECTURE:
- /apps/web/src/templates/{salon|dentist|tutor|vet|physio|gym|lab|lawyer|cа|generic}/
- Each template is a React Server Component composition that consumes a TenantData prop.
- Shared block library: /apps/web/src/components/blocks/ (Hero, About, Services, Gallery, Hours, Map, Reviews, CTA, Footer, BookingButton, etc.)
- Vertical-specific blocks: e.g., DentistTemplate gets <Treatments />, <DoctorBio />, <Insurance />; TutorTemplate gets <Subjects />, <TrialClass />, <Schedule />.
- Theme tokens: each template defines color palette, typography, photo aspect ratios, CTA labels in HI/EN/PA.
- TenantData includes: language, vertical, blocks (ordered list of block IDs + props), photos, services, etc.
- Owner can re-order blocks in Phase 3+ via a drag-handle in dashboard. Phase 1: template-fixed order.

PERFORMANCE:
- Each template ships <50KB JS to client.
- All images served via Next.js Image with Vercel optimization.
- ISR revalidates on tenant content change via on-demand revalidation API.

SEO:
- Per-vertical schema.org types: HealthAndBeautyBusiness for salon, Dentist for dental, EducationalOrganization for tutor, etc.
- Per-tenant LocalBusiness JSON-LD with aggregateRating, openingHours, priceRange.
- Auto-generated sitemap including all tenant pages.
```

### G6. Field Sales Script (Hinglish/Punjabi for Chandigarh Pilot)

```
Generate the field-sales script for our friends-in-sales to use with salon owners in Chandigarh Sector 17, 22, 35, Mohali, Panchkula.

OUTPUT FORMAT:
- 60-second elevator pitch (Hinglish + Punjabi versions).
- Demo flow: 5 steps to perform on the owner's phone, in their salon, in under 8 minutes.
- Objection responses: cover the top 8 objections (free pe nahi chalega, mere paas time nahi, mera bhai banata hai, Google pe already hain, paisa kab dena hoga, app download karna padega, photos kaha se laun, mera salon chhota hai).
- Closing line that opens the door to ₹299 conversion later: "Jab pehla customer aaye to mujhe WhatsApp karna — main batauga kya karna hai."
- One-page printable PDF version with screenshots.

CONSTRAINTS:
- Avoid English jargon (no "SEO", "conversion", "domain"). Say "Google pe dikhna", "customer aana", "naam apna".
- Be respectful of older owners — use "ji" liberally.
- Never lie or oversell. The free-then-paid model only works if owners feel respected.
```

---

## Section H — Living Documents to Maintain

Create and maintain these in `/docs` of the repo. They keep the team aligned and prevent re-litigation of decided things.

| File                           | Purpose                                                                                    |
| ------------------------------ | ------------------------------------------------------------------------------------------ |
| `/docs/PRODUCT-BRIEF.md`       | Mirror of Section A. Single source of truth for what we are building.                      |
| `/docs/PHASE-{N}-DECISIONS.md` | Architectural choices, cuts, and rationale per phase.                                      |
| `/docs/CUSTOMER-INSIGHTS.md`   | Quotes and observations from real owner conversations. The most valuable doc you will own. |
| `/docs/COMPETITIVE-WATCH.md`   | Monthly: what Dukaan, Bikayi, Practo, Meta WhatsApp Business, Google GBP have shipped.     |
| `/docs/EXPERIMENTS.md`         | A/B tests run, results, decisions.                                                         |
| `/docs/CHURN-LOG.md`           | Every customer who cancelled, why (verbatim if possible), what we changed in response.     |
| `/docs/RUNBOOK.md`             | On-call procedures: WhatsApp API down, Razorpay webhook stuck, Supabase outage.            |
| `/docs/PRICING-CHANGELOG.md`   | Every pricing change, when, why, impact on conversion.                                     |

---

## Section I — Phase Exit Checklists

Don't move to the next phase until ALL boxes in the current phase's exit checklist are ticked.

### Phase 1 Exit Checklist

- [ ] 5 paying customers in production
- [ ] WhatsApp onboarding completes in <10 min for non-tech owner
- [ ] Generated site loads in <2.5s on Jio 4G
- [ ] Lead notification reaches owner within 30s
- [ ] Razorpay UPI checkout completes in ≤2 taps
- [ ] Founder dashboard live and accurate
- [ ] Zero P0/P1 errors for 48 consecutive hours
- [ ] CUSTOMER-INSIGHTS.md has at least 20 verbatim owner quotes

### Phase 2 Exit Checklist

- [ ] 50 paying customers
- [ ] Voice onboarding works end-to-end in 3 languages
- [ ] Custom domain purchase + SSL goes live in <10 min
- [ ] Auto-review collection running and capturing >30% response rate
- [ ] Dentist vertical has 5+ paying customers
- [ ] Punjabi UI tested by 3 native speakers
- [ ] GBP API automation working for ≥80% of new tenants

### Phase 3 Exit Checklist

- [ ] 200 paying customers across 5+ verticals
- [ ] MRR ≥ ₹65k
- [ ] Self-serve (Meta funnel) ≥ 40% of new sign-ups
- [ ] Sales rep hitting 25 paid/mo quota
- [ ] 8 languages live and tested
- [ ] Second city operational
- [ ] Month-3 retention ≥ 75%

### Phase 4 Exit Checklist

- [ ] 2,000 paying customers
- [ ] ARR ≥ ₹50L
- [ ] B2B partner channel ≥ 25% of new customers
- [ ] LTV/CAC ≥ 4
- [ ] Bootstrap-vs-raise decision documented
- [ ] Defensive moats live (network-effect feature, Dikho Score, partnerships)

---

_End of master prompts. Update this file as the product evolves. The brief is a living document, not a contract — but every change should be intentional and discussed._
