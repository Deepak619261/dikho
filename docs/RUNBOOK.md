# Runbook — On-Call Procedures

## WhatsApp API Down

1. Check Meta Status: https://developers.facebook.com/status
2. Switch to Twilio fallback (env: `WHATSAPP_PROVIDER=twilio`)
3. Alert in #ops channel

## Razorpay Webhook Stuck

1. Check Razorpay dashboard → Webhooks → Failed events
2. Replay failed events manually from dashboard
3. Check `/api/webhooks/razorpay` logs in Vercel

## Supabase Outage

1. Check https://status.supabase.com
2. App enters read-only mode (new leads queue in memory/Redis — Phase 2)
3. On restore: replay queued events

## Vercel Deploy Failing

1. Check build logs in Vercel dashboard
2. Run `pnpm build` locally to reproduce
3. Check if env vars are set correctly in Vercel project settings
