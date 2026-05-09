-- ─── Extensions ──────────────────────────────────────────────────────────────
create extension if not exists "uuid-ossp";

-- ─── Enums ───────────────────────────────────────────────────────────────────
create type vertical_type as enum (
  'salon','spa','dentist','doctor','tutor','vet','physio','gym','lab','lawyer','ca','other'
);

create type plan_type as enum (
  'free','dikho_lite','dikho_pro','dikho_clinic'
);

create type subscription_status as enum (
  'free','trialing','active','past_due','paused','cancelled'
);

create type lead_status as enum (
  'new','seen','contacted','booked','cancelled'
);

create type bot_state as enum (
  'GREETING','ASKING_NAME','ASKING_VERTICAL','ASKING_ADDRESS',
  'ASKING_HOURS','ASKING_SERVICES','ASKING_PHOTOS','ASKING_LANGUAGE',
  'GENERATING_SITE','COMPLETE'
);

-- ─── Tables ──────────────────────────────────────────────────────────────────

create table owners (
  id            uuid primary key default uuid_generate_v4(),
  phone         text unique not null,
  name          text,
  language      text not null default 'hi',
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create table tenants (
  id                          uuid primary key default uuid_generate_v4(),
  slug                        text unique not null check (slug ~ '^[a-z0-9-]{2,63}$'),
  business_name               text not null,
  vertical                    vertical_type not null default 'salon',
  plan                        plan_type not null default 'free',
  subscription_status         subscription_status not null default 'free',
  razorpay_subscription_id    text,
  owner_id                    uuid not null references owners(id) on delete cascade,
  trial_started_at            timestamptz,
  subscription_started_at     timestamptz,
  created_at                  timestamptz not null default now(),
  updated_at                  timestamptz not null default now()
);

create table sites (
  id              uuid primary key default uuid_generate_v4(),
  tenant_id       uuid not null unique references tenants(id) on delete cascade,
  language        text not null default 'hi',
  address         text,
  maps_embed_url  text,
  hours           jsonb,
  services        text[] not null default '{}',
  photo_urls      text[] not null default '{}',
  tagline         text,
  about           text,
  is_published    boolean not null default false,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create table leads (
  id              uuid primary key default uuid_generate_v4(),
  tenant_id       uuid not null references tenants(id) on delete cascade,
  name            text not null,
  phone           text not null,
  service         text,
  preferred_date  date,
  preferred_time  text,
  status          lead_status not null default 'new',
  unlocked_at     timestamptz,
  created_at      timestamptz not null default now()
);

create table lead_unlock_events (
  id          uuid primary key default uuid_generate_v4(),
  lead_id     uuid not null references leads(id) on delete cascade,
  tenant_id   uuid not null references tenants(id) on delete cascade,
  unlocked_at timestamptz not null default now(),
  payment_id  text
);

create table bot_sessions (
  id                uuid primary key default uuid_generate_v4(),
  phone             text unique not null,
  current_state     bot_state not null default 'GREETING',
  collected_data    jsonb not null default '{}',
  last_message_at   timestamptz not null default now(),
  created_at        timestamptz not null default now()
);

create table gbp_tasks (
  id          uuid primary key default uuid_generate_v4(),
  tenant_id   uuid not null references tenants(id) on delete cascade,
  status      text not null default 'pending' check (status in ('pending','in_progress','done')),
  notes       text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Phase 0 health check
create table ping (
  id  serial primary key,
  ok  boolean not null default true
);
insert into ping (ok) values (true);

-- ─── Indexes ─────────────────────────────────────────────────────────────────
create index on tenants (owner_id);
create index on leads (tenant_id, created_at desc);
create index on leads (tenant_id, status);
create index on bot_sessions (phone);
create index on gbp_tasks (status);

-- ─── updated_at trigger ───────────────────────────────────────────────────────
create or replace function set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger set_owners_updated_at
  before update on owners for each row execute function set_updated_at();

create trigger set_tenants_updated_at
  before update on tenants for each row execute function set_updated_at();

create trigger set_sites_updated_at
  before update on sites for each row execute function set_updated_at();

create trigger set_gbp_tasks_updated_at
  before update on gbp_tasks for each row execute function set_updated_at();

-- ─── Row Level Security ───────────────────────────────────────────────────────
alter table owners enable row level security;
alter table tenants enable row level security;
alter table sites enable row level security;
alter table leads enable row level security;
alter table lead_unlock_events enable row level security;
alter table bot_sessions enable row level security;
alter table gbp_tasks enable row level security;
alter table ping enable row level security;

-- ping: public read (health check)
create policy "ping_public_read" on ping for select using (true);

-- sites: public can read published sites
create policy "sites_public_read" on sites for select using (is_published = true);

-- owners: can only see themselves
create policy "owners_self" on owners
  for all using (auth.uid()::text = id::text);

-- tenants: owner can access their tenants
create policy "tenants_owner" on tenants
  for all using (
    owner_id in (select id from owners where id::text = auth.uid()::text)
  );

-- sites: owner can manage their sites
create policy "sites_owner" on sites
  for all using (
    tenant_id in (
      select t.id from tenants t
      join owners o on o.id = t.owner_id
      where o.id::text = auth.uid()::text
    )
  );

-- leads: owner can see their leads
create policy "leads_owner" on leads
  for all using (
    tenant_id in (
      select t.id from tenants t
      join owners o on o.id = t.owner_id
      where o.id::text = auth.uid()::text
    )
  );
