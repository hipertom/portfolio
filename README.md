# tomgrootjans.nl

Personal one-pager of Tom Grootjans: who I am, what I do for sport, a few projects and a short CV.

Built with Nuxt 4, TypeScript and Tailwind CSS v4. The site is a single page, rendered on Vercel with incremental
static regeneration (ISR) so the Strava data is part of the HTML and refreshes at most once an hour.

## Getting started

```bash
nvm use
npm install
npm run dev
```

| Script              | Description                        |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Start the Nuxt dev server          |
| `npm run build`     | Build the site to `.output`        |
| `npm run preview`   | Serve the production build locally |
| `npm run typecheck` | Run `nuxt typecheck`               |
| `npm test`          | Run the unit tests with Vitest     |
| `npm run lint`      | Lint and fix with ESLint           |
| `npm run format`    | Format `app/` with Prettier        |

## Hosting

Hosted on Vercel: Vercel runs `npm run vercel-build` (`nuxt build`). Nitro detects Vercel and outputs the page and the
`/api/sport-overview` route as ISR functions (`routeRules` in `nuxt.config.ts`). `main` deploys to tomgrootjans.nl,
`develop` to dev.tomgrootjans.nl.

## Editing content

All copy lives in typed data files, so content changes never require touching components:

- `app/data/profile.ts`: name, intro, bio, interests and the optional about photo
- `app/data/projects.ts`: highlighted projects (`work`, `personal` or `sport`)
- `app/data/experience.ts`: CV entries, newest first, `endDate: null` for the current job
- `app/data/socialLinks.ts`: links in the hero and footer

## Design system

The look comes from [Warm Sorbet](https://github.com/hipertom/warm-sorbet), a Nuxt layer shared with Tom's other
projects: Tailwind theme, fonts, base styles and UI components (`<UiTile>`, `<UiPill>`, `<UiStatTile>`, …). This repo
has no theme of its own; the rules are in the layer's `docs/design-system.md`.

## Strava

The sport section fetches a `SportOverview` (see `shared/types/sport.ts`) from the server route
`/api/sport-overview`. That route refreshes the Strava access token, reads the activities since the start of last year
and turns them into totals, races and the latest activities (`server/utils/sportOverview.ts`). Without Strava
configuration the dev server serves dummy data.

Strava may return a new refresh token on every refresh and invalidates the old one, so the latest refresh token is
stored in Neon (one table, see `server/db/strava-token.sql`). `NUXT_STRAVA_REFRESH_TOKEN` is only the starting point.

Configuration lives in environment variables (see `.env.example`): `NUXT_STRAVA_CLIENT_ID`,
`NUXT_STRAVA_CLIENT_SECRET`, `NUXT_STRAVA_REFRESH_TOKEN` and `NUXT_DATABASE_URL`.

The Strava API requires a Strava subscription for Standard Tier developers. Strava data must be shown with a
"View on Strava" link and the "Powered by Strava" logo (`public/strava/`).
