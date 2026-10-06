# Warm Sorbet design system

A design brief for building new interfaces (for example a dashboard) in the same visual language as
[tomgrootjans.nl](https://tomgrootjans.nl). The layout may differ completely; the colours, type, shapes, motion and
the rules below must not.

## 1. Character

- **Friendly and approachable.** Soft colours, generous rounding, plain human copy.
- **Slightly creative.** One or two small crafted details per screen, never decoration everywhere.
- **Calm and confident.** Lots of whitespace, few colours at once, no visual noise, nothing shouting for attention.
- It should feel like a well-designed personal object, not a generic SaaS template or an "AI-generated" landing page.

## 2. Hard rules

1. **No emoji anywhere in the UI.** Not in headings, buttons, cards, empty states, illustrations or placeholders.
   Emoji are the clearest marker of generic AI design. Use Lucide line icons, brand SVGs or abstract SVG art instead.
2. **No gradients on surfaces or text**, no glassmorphism cards, no neon, no glow-heavy shadows. The only blur allowed is
   on soft background colour blobs and the translucent sticky navigation.
3. **No pure white page background and no pure black text.** The page is `cream`, text is `ink`.
4. **One accent at a time.** `accent` orange is reserved for the primary call to action, the "current" state and tiny
   highlights (a full stop, an underline). Never use it for large surfaces or body text.
5. **Nothing tilted.** Cards, pills and tiles stay straight. Personality comes from colour, shape and typography.
   The single exception is one offset backing shape behind a hero visual (rotated 3°).
6. **Respect `prefers-reduced-motion`.** Every animation must switch off.
7. **Light mode only.** Do not add a dark theme unless explicitly asked.

## 3. Colour

| Token         | Hex       | Use                                                                             |
| ------------- | --------- | ------------------------------------------------------------------------------- |
| `cream`       | `#fbf7f1` | Page background                                                                 |
| `cream-deep`  | `#f3ece1` | Quiet tile background, table header, hover on cream                             |
| `white`       | `#ffffff` | Primary cards and content surfaces on cream                                     |
| `ink`         | `#1f2a44` | Text, primary buttons, active states, dark feature tile, footer                 |
| `ink-soft`    | `#4a5571` | Secondary text, labels, metadata                                                |
| `peach`       | `#f6c9a8` | Tone tile / pill                                                                |
| `peach-soft`  | `#fbe5d4` | Large tinted area                                                               |
| `sage`        | `#c9dcc3` | Tone tile / pill                                                                |
| `sage-soft`   | `#e4eee0` | Large tinted area, section band                                                 |
| `sage-deep`   | `#9dbb94` | Decorative lines and markers only (not for text)                                |
| `butter`      | `#f7e6a6` | Tone tile / pill, text selection                                                |
| `butter-soft` | `#fbf2d2` | Large tinted area                                                               |
| `accent`      | `#f26b3a` | Primary CTA background, "current" marker, small highlights                      |
| `accent-ink`  | `#b8431a` | Accent coloured **text** and focus outlines (passes AA where `accent` does not) |

### Tone system

Surfaces use a small set of named tones: `white`, `cream`, `peach`, `sage`, `butter`, `ink`. Each tone has a
"surface" class (`bg-peach text-ink`) and a "soft" class (`bg-peach-soft text-ink`). Use the strong tone for small
tiles and pills, the soft tone for large areas such as a section band. Map tones in one place (for example a
`Record<Tone, string>`) instead of scattering colour classes.

On a screen, use at most three tones next to each other, and keep `ink` tiles rare (one per group) so they stay special.

### Contrast (WCAG)

| Foreground on background              | Ratio   | Allowed for                   |
| ------------------------------------- | ------- | ----------------------------- |
| `ink` on `cream`                      | 13.4:1  | Everything                    |
| `ink-soft` on `cream`                 | 7.0:1   | Body and secondary text       |
| `ink-soft` on `peach`/`sage`/`butter` | ≥ 4.9:1 | Secondary text on tone tiles  |
| `accent-ink` on `cream`               | 5.1:1   | Accent text, links            |
| `ink` on `accent`                     | 4.7:1   | Button label on accent button |
| `white` on `accent`                   | 3.0:1   | **Not allowed** for text      |
| `sage-deep` on `cream`                | 2.0:1   | Decoration only               |

## 4. Typography

- **Display and headings:** Bricolage Grotesque (variable, optical size axis), weight 600–700, tight tracking.
- **Body and UI:** Inter (variable), weight 400–600.
- Self-host fonts (Fontsource), do not load Google Fonts at runtime.
- Use `text-wrap: balance` on headings and `text-wrap: pretty` on paragraphs.
- Use `tabular-nums` for every number that can change or be compared (stats, times, tables).

| Role             | Size                                        | Notes                                       |
| ---------------- | ------------------------------------------- | ------------------------------------------- |
| Display          | `clamp(3rem, 1.6rem + 6vw, 6.5rem)`         | Line height 0.92, letter spacing −0.035em   |
| Section heading  | `clamp(2.25rem, 1.5rem + 3vw, 3.75rem)`     | Line height 1, letter spacing −0.03em       |
| Card title       | `text-2xl` display font, semibold           |                                             |
| Stat value       | `text-4xl`/`text-5xl` display font          | Unit in `text-lg`, 60% opacity, after value |
| Body             | `text-lg` (marketing) / `text-base` (app)   | Colour `ink-soft`, relaxed line height      |
| Label / metadata | `text-sm` medium, `ink-soft` or 70% opacity |                                             |
| Pill             | `text-xs` semibold, slight tracking         |                                             |

For a dashboard, scale the display sizes down (the page title can use the heading size) but keep the same families,
weights and tracking.

## 5. Shape, depth and spacing

- **Radius is big and soft.** Cards and tiles `rounded-[2rem]` (32px) or `rounded-3xl` (24px); inner media
  `rounded-[1.5rem]`; buttons, pills, nav and segmented controls `rounded-full`. Nothing sharp, no small 4–8px radii
  on containers.
- **Signature shape:** the arch, `border-radius: 50% 50% 2.5rem 2.5rem / 40% 40% 2.5rem 2.5rem`, used for a portrait or
  one hero visual. Use it once per screen at most.
- **Shadows are soft and cool** (tinted with `ink`):
    - `shadow-soft`: `0 1px 2px rgb(31 42 68 / 0.04), 0 12px 32px -16px rgb(31 42 68 / 0.18)` for resting cards.
    - `shadow-lift`: `0 2px 4px rgb(31 42 68 / 0.05), 0 24px 48px -20px rgb(31 42 68 / 0.28)` for hover.
- White cards on cream get `shadow-soft` plus a hairline `ring-1 ring-ink/5`. Tone tiles have no shadow and no border.
- Dividers are `border-ink/5` (on white) or `border-ink/10`. Never use grey hex values.
- **Spacing:** card padding 24–28px (`p-6 sm:p-7`), grid gaps 16–20px (`gap-4 lg:gap-5`), 48px vertical rhythm between
  page sections, content max width 72rem with 20/32px side gutters.
- **Texture:** a very faint paper grain over the whole page (SVG `feTurbulence` noise at 3.5% opacity, fixed,
  `pointer-events: none`).

## 6. Components

**Bento tile.** The core building block. A rounded container in one tone, optional small label row (Lucide icon at
16px + `text-sm` label at 70% opacity) at the top, content pushed to the bottom with `justify-between`. Mix tile sizes
in a grid (span 2 columns / 2 rows) for rhythm.

**Card.** White, `rounded-3xl` or `rounded-[2rem]`, `shadow-soft`, `ring-1 ring-ink/5`. Hover: `-translate-y-1` and
`shadow-lift` with the bounce easing. Header row: a 48px `rounded-2xl` tone square holding a 24px icon, then title and a
`text-sm` meta line.

**Stat tile.** Label at the top, big display-font number at the bottom, unit after the number. Alternate tones across a
row of four (for example peach, butter, white, ink).

**Pill / eyebrow.** `rounded-full px-3 py-1 text-xs font-semibold` in a tone. Used as a section eyebrow above a heading
and as status ("Current"). Keep the text to one or two words.

**Buttons.**

- Primary: `bg-ink text-cream rounded-full px-6 py-3 font-medium shadow-soft`, hover lifts 2px.
- Accent (one per screen): `bg-accent text-ink font-semibold`, same shape.
- Secondary: `bg-white/70 ring-1 ring-ink/10 rounded-full`, hover turns `bg-ink text-cream`.

**Segmented control.** `rounded-full bg-white/70 p-1 ring-1 ring-ink/5`; the active option is `bg-ink text-cream`,
others `text-ink-soft`. Use `aria-pressed`.

**Navigation.** A floating pill: `rounded-full bg-cream/80 backdrop-blur-md ring-1 ring-ink/10 shadow-soft p-1.5`. The
active item is an `ink` pill with `cream` text. A circular `ink` monogram on the left. For a dashboard sidebar, use the
same active treatment (ink pill) on a `cream-deep` or white panel with rounded corners.

**Timeline / list markers.** 12px dots with a 4px `cream` ring. Past items `ink/30`, grouped items `sage-deep`, the
current item `accent` with a slow glow (opacity 0.2 to 0.7 over 2.8s). Connectors are 1–3px lines; dashed means a
break, solid `sage-deep` means continuity.

**States.**

- Loading: tile-shaped skeletons in `white/60` with a gentle pulse, same grid as the real content.
- Empty: one friendly, human sentence in a soft tile. No illustrations of sad faces, no emoji.
- Error: white card, display-font title in plain language, one sentence, an `ink` "Try again" button.

**Focus.** `outline-2 outline-offset-4 outline-accent-ink` on `:focus-visible`, rounded.

## 7. Icons and imagery

- **Icons:** Lucide line icons at 16–24px, inheriting `currentColor`. Brand logos as single-path inline SVGs.
- **Domain icons** (for example sport types) may be custom single-colour SVGs on a tone square.
- **Photos:** real photos only, never stock. A white-background portrait can sit on a tone with
  `mix-blend-mode: multiply`.
- **Illustration:** abstract, geometric SVG art built from the palette: circles, arches, soft hills, a hand-drawn
  squiggle, dots. Flat fills, `ink` strokes of 2–3px with round caps, no gradients, no faces, no characters, no 3D.
  The art should hint at the subject (an elevation profile for a race, arches for housing) rather than depict it.
- **Placeholders:** a tone surface with two soft white circles and a single Lucide icon plus short label, or abstract
  art as above. Never an emoji.

## 8. Motion

- Easings: `--ease-gentle: cubic-bezier(0.2, 0.7, 0.2, 1)` for entrances, `--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1)`
  for small hover lifts.
- Entrance: fade + 24px slide-up over 0.8s when scrolled into view, staggered 60–100ms between siblings.
- Hover: lift 2–4px and deepen the shadow. No scaling of whole cards, no rotation.
- One signature moment per screen at most (for example an SVG underline that draws itself once).
- No infinite animations except a very slow, subtle status glow.
- With `prefers-reduced-motion: reduce`, disable all of the above and show content immediately.

## 9. Copy

- Short, warm and human. Write like a person, not a product ("Strava is taking a breather." rather than
  "Error 503: service unavailable").
- Sentence case for headings, buttons and labels. Headings may end with a full stop for a calm, confident tone;
  an `accent` coloured full stop is a nice detail used sparingly.
- English, British spelling where it matters.

## 10. Adapting to a dashboard

- Keep the `cream` page and white cards; put dense content (tables, charts) on white cards, use tone tiles for KPIs
  and highlights.
- KPI row: four stat tiles with alternating tones, the most important one may be `ink`.
- Tables: white card, `cream-deep` header row with `text-sm` medium `ink-soft` labels, rows separated by
  `border-ink/5`, 12–16px vertical cell padding, numbers right-aligned with `tabular-nums`, status as pills.
- Charts: `ink` for the main series, `accent` for the highlighted or current value, then `sage-deep`, `peach` and
  `butter` (darken them if marks are thin). Light gridlines in `ink/10`, no chart borders, rounded bar ends.
- Density: dashboards may use `p-5` cards and `gap-4`, but never drop below 16px padding or lose the large radii.
- Navigation: a rounded sidebar or the floating pill, with the `ink` active pill.

## 11. Tailwind CSS v4 theme

```css
@import 'tailwindcss';

@theme {
    --font-display: 'Bricolage Grotesque Variable', ui-sans-serif, system-ui, sans-serif;
    --font-sans: 'Inter Variable', ui-sans-serif, system-ui, sans-serif;

    --color-cream: #fbf7f1;
    --color-cream-deep: #f3ece1;
    --color-ink: #1f2a44;
    --color-ink-soft: #4a5571;
    --color-peach: #f6c9a8;
    --color-peach-soft: #fbe5d4;
    --color-sage: #c9dcc3;
    --color-sage-soft: #e4eee0;
    --color-sage-deep: #9dbb94;
    --color-butter: #f7e6a6;
    --color-butter-soft: #fbf2d2;
    --color-accent: #f26b3a;
    --color-accent-ink: #b8431a;

    --text-display: clamp(3rem, 1.6rem + 6vw, 6.5rem);
    --text-display--line-height: 0.92;
    --text-display--letter-spacing: -0.035em;
    --text-heading: clamp(2.25rem, 1.5rem + 3vw, 3.75rem);
    --text-heading--line-height: 1;
    --text-heading--letter-spacing: -0.03em;

    --shadow-soft: 0 1px 2px rgb(31 42 68 / 0.04), 0 12px 32px -16px rgb(31 42 68 / 0.18);
    --shadow-lift: 0 2px 4px rgb(31 42 68 / 0.05), 0 24px 48px -20px rgb(31 42 68 / 0.28);

    --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
    --ease-gentle: cubic-bezier(0.2, 0.7, 0.2, 1);
}

@utility rounded-arch {
    border-radius: 50% 50% 2.5rem 2.5rem / 40% 40% 2.5rem 2.5rem;
}

@layer base {
    body {
        @apply bg-cream font-sans text-ink antialiased;
    }

    h1,
    h2,
    h3 {
        @apply font-display;
        text-wrap: balance;
    }

    ::selection {
        @apply bg-butter text-ink;
    }

    :focus-visible {
        @apply rounded-md outline-2 outline-offset-4 outline-accent-ink;
    }
}
```

## 12. Checklist before shipping a screen

- [ ] No emoji, no gradients, nothing tilted
- [ ] Page is `cream`, text is `ink`/`ink-soft`, accent used once
- [ ] Containers use large radii and soft ink-tinted shadows
- [ ] Headings in Bricolage Grotesque, body in Inter, numbers tabular
- [ ] Every text/background pair passes WCAG AA
- [ ] Loading, empty and error states designed and written in a human voice
- [ ] Works with keyboard (visible focus) and with reduced motion
