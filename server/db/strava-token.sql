-- Holds the latest Strava refresh token. Strava may return a new one on every refresh and invalidates the old one.
create table if not exists strava_token (
    id smallint primary key default 1 check (id = 1),
    refresh_token text not null,
    updated_at timestamptz not null default now()
);
