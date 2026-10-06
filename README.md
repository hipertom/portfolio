# tomgrootjans.nl

Personal one-pager of Tom Grootjans: who I am, what I do for sport, a few projects and a short CV.

Built with Vue 3, TypeScript and Tailwind CSS v4. The site is fully static.

## Getting started

```bash
nvm use
npm install
npm run dev
```

| Script               | Description                                     |
| -------------------- | ----------------------------------------------- |
| `npm run dev`        | Start the Vite dev server                       |
| `npm run build`      | Type-check and build the static site to `dist/` |
| `npm run preview`    | Serve the production build locally              |
| `npm run type-check` | Run `vue-tsc`                                   |
| `npm run lint`       | Lint and fix with ESLint                        |
| `npm run format`     | Format `src/` with Prettier                     |

## Editing content

All copy lives in typed data files, so content changes never require touching components:

- `src/data/profile.ts`: name, intro, bio, interests and the optional about photo
- `src/data/projects.ts`: highlighted projects (`work`, `personal` or `sport`)
- `src/data/experience.ts`: CV entries, newest first, `endDate: null` for the current job
- `src/data/socialLinks.ts`: links in the hero and footer

Design tokens (colours, fonts, type scale, shadows) are defined in `src/assets/css/main.css`.
The full visual language, including rules for reusing it in other apps, is described in
[`docs/design-system.md`](docs/design-system.md).

## Strava

The sport section reads a `SportOverview` (see `src/types/sport.ts`) through a `SportOverviewProvider`.
For now `src/services/sport/index.ts` uses dummy data from `src/data/dummySportOverview.ts`.

Strava credentials must never reach the browser. The plan is a small serverless function (DigitalOcean Functions)
that exchanges the refresh token, fetches recent activities, calculates the totals and returns a `SportOverview`.
Connecting it means adding an HTTP provider and swapping it in `src/services/sport/index.ts`.

## Deployment

Hosted as a static site on DigitalOcean App Platform. Build command `npm run build`, output directory `dist`.
