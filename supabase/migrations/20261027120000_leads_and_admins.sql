-- SERPRise.agency: upiti s kontakt forme + pristup admin dashboardu
-- Pokreni u Supabase → SQL Editor (ili `supabase db push`).

create extension if not exists citext;

-- Tko smije u admin dashboard (popunjava se ručno, vidi README)
create table if not exists public.admin_users (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.admin_users enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.admin_users where user_id = (select auth.uid())
  );
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

create policy "Admin vidi svoj zapis"
  on public.admin_users for select
  to authenticated
  using (user_id = (select auth.uid()));

-- Upiti (leadovi)
do $$ begin
  create type public.lead_status as enum ('novo', 'u_kontaktu', 'ponuda', 'klijent', 'odbijeno');
exception when duplicate_object then null; end $$;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 120),
  email citext not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' and char_length(email) <= 200),
  company text check (char_length(company) <= 160),
  website text check (char_length(website) <= 300),
  service text not null default 'nisam_siguran'
    check (service in ('ai_vidljivost', 'link_building_pr', 'oboje', 'nisam_siguran')),
  budget text check (budget in ('do_1000', '1000_3000', '3000_plus', 'ne_znam')),
  message text not null check (char_length(message) between 10 and 5000),
  consent boolean not null check (consent = true),
  source_page text check (char_length(source_page) <= 300),
  utm jsonb,
  status public.lead_status not null default 'novo',
  notes text check (char_length(notes) <= 10000)
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

alter table public.leads enable row level security;

-- Posjetitelji smiju samo UPISATI novi upit (ne mogu čitati ni mijenjati ništa)
create policy "Javni unos upita"
  on public.leads for insert
  to anon, authenticated
  with check (status = 'novo' and notes is null);

create policy "Admin čita upite"
  on public.leads for select
  to authenticated
  using ((select public.is_admin()));

create policy "Admin mijenja upite"
  on public.leads for update
  to authenticated
  using ((select public.is_admin()))
  with check ((select public.is_admin()));

create policy "Admin briše upite"
  on public.leads for delete
  to authenticated
  using ((select public.is_admin()));

grant insert on public.leads to anon;
grant select, insert, update, delete on public.leads to authenticated;

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists leads_touch_updated_at on public.leads;
create trigger leads_touch_updated_at
  before update on public.leads
  for each row execute function public.touch_updated_at();
