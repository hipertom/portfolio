# Portfolio: afspraken voor Claude

De persoonlijke one-pager van Tom ([tomgrootjans.nl](https://tomgrootjans.nl)): wie hij is, sport, projecten en een kort cv.
Eén pagina, op Vercel gerenderd met ISR (hooguit één keer per uur ververst). De enige server-route is
`/api/sport-overview` voor Strava; Neon bewaart alleen de nieuwste Strava refresh token. Geen PWA.

## Taal

- **Nederlands:** communicatie met Tom en dit bestand.
- **Engels:** alles in de code (namen, comments, commit messages) én de teksten op de site.

## Code

- Nuxt 4 (`app/`-map, `app/app.vue` is de enige pagina, geen router) + Tailwind 4 + TypeScript 6.x.
- Auto-imports voor componenten, composables en utils. Componentnamen volgen het pad: `components/sections/Hero.vue`
  is `<SectionsHero>`, `components/local/ProjectCard.vue` is `<LocalProjectCard>`.
- Eigen bouwstenen van het portfolio staan in `components/local/` (`<Local…>`). De prefix `Ui` is gereserveerd
  voor de layer, dus nooit een `components/ui/`-map in deze repo.
- Content staat in getypte databestanden in `app/data/` (zie README), niet in componenten.
- Codestijl: 4 spaties, puntkomma's, enkele quotes; ESLint + Prettier (`npm run lint`, `npm run format`).
- Gedeelde types en helpers voor app én server staan in `shared/` (`#shared/...`).
- Controleren: `npm run typecheck`, `npm run lint`, `npm test` en `npm run build`.
- Strava-gegevens en de Neon-URL staan in env vars (zie `.env.example`), nooit in de code of de chat.
- Dev-server: `npm run dev` (Claude-preview: `dev` in `.claude/launch.json`, poort 5174).

## Design system

- Het uiterlijk komt uit de gedeelde Nuxt layer **Warm Sorbet** (`extends: ['warm-sorbet']`, repo `hipertom/warm-sorbet`):
  Tailwind-thema, fonts, basisstijlen, de `Ui*`-componenten (`UiTile`, `UiPill`, `UiStatTile`, …), tones
  (`TONE_SURFACE`, `Tone`) en `v-reveal`. Deze repo heeft geen eigen thema of CSS.
- **Lees vóór UI-werk** `node_modules/warm-sorbet/docs/design-system.md` en de afspraken in
  `node_modules/warm-sorbet/CLAUDE.md`. Die staan alleen daar; hier geen kopie.
- **Eén component voor alle consumers:** geen eigen versie of override van een layer-component in deze repo. Past een
  component niet, dan breid je hem uit in de layer-repo (`../warm-sorbet`), zodat hij ook voor de package tracker werkt.

## Git

- Commits: Conventional Commits, logisch opgesplitst, korte body met bullets, geen Claude-vermelding.
- **Nooit pushen zonder dat Tom erom vraagt.**
