# Vita Ray

Personal workout plan app for Operation Vita Ray. Static React app — no backend, no auth, no database. Pure UI. Deployed on Vercel.

## Stack

- React 19 + Vite + TypeScript
- Sass (`sass` package) for SCSS
- Tailwind CSS v3
- Fonts: Bebas Neue (display) + Inter (body) via Google Fonts
- Strict TypeScript — `strict: true` in tsconfig
- Package manager: Yarn (corepack enabled) — never use npm or npx

## Package manager setup

Use Yarn with corepack. Initialize with:

```bash
corepack enable
yarn init -2
```

`package.json` must include the `packageManager` field:

```json
{
  "packageManager": "yarn@4.x.x"
}
```

Set `nodeLinker` to `node-modules` in `.yarnrc.yml` — required for Vite and Tailwind compatibility:

```yaml
# .yarnrc.yml
nodeLinker: node-modules
```

Install sass for SCSS support:

```bash
yarn add -D sass
```

Never use `npm install`, `npm run`, or `npx`. All commands use `yarn`:

```bash
yarn install
yarn dev
yarn build
yarn preview
```

## Project structure

```text
vita-ray/
├── public/
│   └── favicon.ico
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── data/
│   │   ├── program.ts        # all workout data — single source of truth
│   │   └── types.ts          # shared TypeScript types
│   ├── components/
│   │   ├── WeekStrip.tsx     # day selector — horizontal strip on mobile, vertical list on desktop
│   │   ├── SessionView.tsx   # renders active day session
│   │   ├── ExerciseCard.tsx  # expandable exercise with weight calculator
│   │   ├── SetTable.tsx      # calculated set rows
│   │   ├── TierBadge.tsx     # T1 / T2 / T3 colored badge
│   │   ├── RestView.tsx      # rest day screen
│   │   └── ThemeToggle.tsx   # cycles system → light → dark
│   └── context/
│       └── ThemeContext.tsx   # theme state + localStorage sync
│   └── styles/
│       ├── main.scss         # entry — imports tailwind + global styles
│       ├── _variables.scss   # CSS custom properties per theme
│       ├── _typography.scss  # font imports, base type rules
│       └── _components.scss  # custom styles Tailwind can't handle
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── vercel.json
```

## Design

Mobile-first. Military dossier aesthetic — clean, structured, no decorative fluff. Supports three themes: dark, light, and system (follows OS preference). Default is system.

## Responsive layout

Two breakpoints:

**Mobile (< 1024px) — single column:**

```text
┌─────────────────────┐
│ Header              │
│ Operation Vita Ray  │
├─────────────────────┤
│ WeekStrip           │
│ Mon Tue Wed Thu ... │
├─────────────────────┤
│ SessionView         │
│ Exercise cards      │
│ stacked vertically  │
└─────────────────────┘
```

Full width, no max-width constraint. Padding: 16px horizontal.

**Desktop (≥ 1024px) — two column:**

```text
┌────────────────┬──────────────────────────┐
│ Left panel     │ Right panel              │
│ max-w: 320px   │ flex: 1                  │
│ sticky top     │ scrollable               │
│                │                          │
│ Header         │ Exercise cards           │
│ WeekStrip      │ (all exercises expanded  │
│ Session meta   │  or collapsed per user)  │
│ Rest periods   │                          │
│                │                          │
└────────────────┴──────────────────────────┘
```

Max total width: 1200px, centered. Gap between columns: 32px. Left panel is `position: sticky; top: 0; height: 100vh; overflow-y: auto`. Right panel scrolls independently.

On desktop, WeekStrip renders as a vertical list in the left panel instead of a horizontal scroll strip. Each day is a full-width row with day name, session type badge, and duration.

**Tailwind breakpoint to use:** `lg:` prefix (1024px).

**Theme system:**

Theme is stored in `localStorage` as `'dark'`, `'light'`, or `'system'`. Applied as a `data-theme` attribute on `<html>`. A `ThemeContext` provides the current theme and a setter throughout the app. A theme toggle button in the app header cycles between system → light → dark.

CSS custom properties are defined per theme in `_variables.scss`:

```scss
// _variables.scss

:root[data-theme='dark'],
:root[data-theme='system'] {
  // system defaults to dark — overridden by media query below
  --bg-page:        #0A0A0A;
  --bg-card:        #141414;
  --bg-card-hover:  #1C1C1C;
  --border:         #2A2A2A;
  --text-primary:   #F0EDE6;
  --text-secondary: #9A9790;
  --text-muted:     #5A5855;

  --tier-t1-bg:     #0C1A2E;
  --tier-t1-text:   #85B7EB;
  --tier-t2-bg:     #0A1E16;
  --tier-t2-text:   #5DCAA5;
  --tier-t3-bg:     #1E1608;
  --tier-t3-text:   #EF9F27;

  --push-bg:        #1E1408;
  --push-text:      #EF9F27;
  --pull-bg:        #0C1A2E;
  --pull-text:      #85B7EB;
  --legs-bg:        #0A1E16;
  --legs-text:      #5DCAA5;
}

:root[data-theme='light'] {
  --bg-page:        #F5F3EE;
  --bg-card:        #FFFFFF;
  --bg-card-hover:  #F0EDE6;
  --border:         #D3D1C7;
  --text-primary:   #0A0A0A;
  --text-secondary: #5A5855;
  --text-muted:     #9A9790;

  --tier-t1-bg:     #E6F1FB;
  --tier-t1-text:   #0C447C;
  --tier-t2-bg:     #E1F5EE;
  --tier-t2-text:   #085041;
  --tier-t3-bg:     #FAEEDA;
  --tier-t3-text:   #633806;

  --push-bg:        #FFF3E0;
  --push-text:      #633806;
  --pull-bg:        #E6F1FB;
  --pull-text:      #0C447C;
  --legs-bg:        #EAF3DE;
  --legs-text:      #27500A;
}

// system theme — respect OS preference
@media (prefers-color-scheme: light) {
  :root[data-theme='system'] {
    --bg-page:        #F5F3EE;
    --bg-card:        #FFFFFF;
    --bg-card-hover:  #F0EDE6;
    --border:         #D3D1C7;
    --text-primary:   #0A0A0A;
    --text-secondary: #5A5855;
    --text-muted:     #9A9790;

    --tier-t1-bg:     #E6F1FB;
    --tier-t1-text:   #0C447C;
    --tier-t2-bg:     #E1F5EE;
    --tier-t2-text:   #085041;
    --tier-t3-bg:     #FAEEDA;
    --tier-t3-text:   #633806;

    --push-bg:        #FFF3E0;
    --push-text:      #633806;
    --pull-bg:        #E6F1FB;
    --pull-text:      #0C447C;
    --legs-bg:        #EAF3DE;
    --legs-text:      #27500A;
  }
}
```

All components use CSS custom properties — never hardcode color hex values in JSX or SCSS component files.

**Typography:**

- Session titles, day names: Bebas Neue
- All other text: Inter
- Body size: 14px, line-height 1.6

## Weight calculator logic

User enters their top set weight in lbs per exercise. App calculates all set weights automatically.

```js
// Round to nearest 5 lbs
function round5(n) {
  return Math.round(n / 5) * 5;
}

// Calculate set weight from top set
function calcSetWeight(topLbs, pct) {
  if (!topLbs || topLbs <= 0) return '—';
  return round5(topLbs * pct) + ' lbs';
}
```

Top set weight is stored in React state (`useState`) per exercise. No persistence — resets on page reload. This is intentional.

T3 isolation sets use working weight directly (user enters their working weight, not a top set). The pct for T3 activation is 0.75 of working weight.

## Tier percentages

**T1 — Primary compound (5 sets):**

| Set | % | Reps |
| --- | --- | --- |
| Warmup | 50% | 12–15 |
| Bridge | 70% | 10–12 |
| Top set | 100% | 4–6 |
| Back-off 1 | 75% | 8–10 |
| Back-off 2 | 75% | 8–10 |

**T2 — Secondary compound (4 sets):**

| Set | % | Reps |
| --- | --- | --- |
| Warmup | 55% | 12 |
| Top set | 100% | 6–8 |
| Back-off 1 | 70% | 8–10 |
| Back-off 2 | 70% | 8–10 |

**T3 — Isolation (3 sets):**

| Set | % | Reps |
| --- | --- | --- |
| Activation | 75% of working | 12–15 |
| Working 1 | 100% | 10–12 |
| Working 2 | 100% | 10–12 |

## Program data

All workout data lives in `src/data/program.ts`. Do not hardcode exercise names or sets anywhere else.

Sets are NOT stored in `program.ts`. Sets are generated at render time from the tier percentages table above based on each exercise's `tier` field. The data file only stores `id`, `tier`, `name`, and `note` per exercise. The `SetTable` component receives the exercise tier and top set weight as props and generates the correct rows.

All shared types live in `src/data/types.ts`:

```ts
// src/data/types.ts
export type DayType = 'rest' | 'push' | 'pull' | 'legs';
export type Tier = 'T1' | 'T2' | 'T3';

export interface Exercise {
  id: string;
  tier: Tier;
  name: string;
  note: string;
}

export interface TrainingDay {
  id: string;
  short: string;
  label: string;
  type: DayType;
  duration?: string;
  muscles?: string;
  exercises?: Exercise[];
}

export interface SetRow {
  name: string;
  pct: number;
  reps: string;
  isTop?: boolean;
}
```

```js
// src/data/program.ts
export const DAYS = [
  {
    id: 'mon',
    short: 'Mon',
    label: 'Rest',
    type: 'rest',
  },
  {
    id: 'tue',
    short: 'Tue',
    label: 'Push — Arms',
    type: 'push',
    duration: '90–105 min',
    muscles: 'Lateral delts · Front delts · Triceps',
    exercises: [
      {
        id: 'dbs',
        tier: 'T1',
        name: 'DB Shoulder Press',
        note: 'Anchor of session — shoulder strength lives here',
      },
      {
        id: 'sacl',
        tier: 'T2',
        name: 'Single Arm Cable Lateral Raise',
        note: 'Cable keeps tension at bottom — superior to DB here',
      },
      {
        id: 'octe',
        tier: 'T2',
        name: 'Overhead Cable Tricep Extension',
        note: 'Full stretch overhead — long head priority',
      },
      {
        id: 'tpd',
        tier: 'T3',
        name: 'Tricep Pushdown',
        note: 'Elbows pinned — isolate the movement',
      },
      {
        id: 'dblr_tue',
        tier: 'T3',
        name: 'DB Lateral Raise',
        note: 'Finisher — lateral delt fully exhausted by end',
      },
    ],
  },
  {
    id: 'wed',
    short: 'Wed',
    label: 'Push — Chest',
    type: 'push',
    duration: '90–105 min',
    muscles: 'Upper chest · Mid chest · Triceps · Lateral delts',
    exercises: [
      {
        id: 'idp',
        tier: 'T1',
        name: 'Incline DB Press',
        note: 'Primary compound — upper chest is the Rogers priority',
      },
      {
        id: 'sfb',
        tier: 'T2',
        name: 'Smith Flat Bench Press',
        note: 'Secondary — mid chest thickness. Use safeties every set',
      },
      {
        id: 'pdf1',
        tier: 'T3',
        name: 'Pec Deck Fly',
        note: 'Full stretch — feel the chest load at the bottom',
      },
      {
        id: 'pdf2',
        tier: 'T3',
        name: 'Pec Deck Fly (finisher)',
        note: 'Constant tension pump — lighter weight, controlled',
      },
      {
        id: 'dblr_wed',
        tier: 'T3',
        name: 'DB Lateral Raise',
        note: 'Third weekly lateral delt hit — Rogers priority',
      },
    ],
  },
  {
    id: 'thu',
    short: 'Thu',
    label: 'Rest',
    type: 'rest',
  },
  {
    id: 'fri',
    short: 'Fri',
    label: 'Pull — Arms',
    type: 'pull',
    duration: '75–90 min',
    muscles: 'Biceps · Brachialis · Forearms · Rear delts',
    exercises: [
      {
        id: 'bcc',
        tier: 'T1',
        name: 'Bayesian Cable Curl',
        note: 'Full stretch at bottom — own the lengthened position',
      },
      {
        id: 'pc',
        tier: 'T2',
        name: 'Preacher Curl',
        note: 'Dead stop at bottom — no momentum',
      },
      {
        id: 'tchc_fri',
        tier: 'T3',
        name: 'Twisted Crossbody Hammer Curl',
        note: 'Forearm hit — 3 sec eccentric, slow down',
      },
      {
        id: 'sardf',
        tier: 'T3',
        name: 'Single Arm Rear Delt Fly',
        note: 'Pinch at peak contraction — don\'t rush',
      },
    ],
  },
  {
    id: 'sat',
    short: 'Sat',
    label: 'Pull — Back',
    type: 'pull',
    duration: '90–105 min',
    muscles: 'Lats · Mid-back · Rear delts · Biceps (indirect)',
    exercises: [
      {
        id: 'lpd',
        tier: 'T1',
        name: 'Lat Pulldown',
        note: "Full stretch at top — don't cut the ROM",
      },
      {
        id: 'salpd',
        tier: 'T2',
        name: 'SA Lat Pulldown (Left)',
        note: 'Left side only — asymmetry correction. Non-negotiable',
      },
      {
        id: 'cr',
        tier: 'T1',
        name: 'Cable Row',
        note: 'Drive elbows back — squeeze mid-back at peak',
      },
      {
        id: 'sacr',
        tier: 'T2',
        name: 'SA Cable Row (Left)',
        note: 'Left side only — match right side ROM',
      },
      {
        id: 'tchc_sat',
        tier: 'T3',
        name: 'Twisted Crossbody Hammer Curl',
        note: 'Forearm frequency hit — slow eccentric, 3 sec down',
      },
    ],
  },
  {
    id: 'sun',
    short: 'Sun',
    label: 'Legs',
    type: 'legs',
    duration: '90 min',
    muscles: 'Quads · Hamstrings · Glutes · Calves',
    exercises: [
      {
        id: 'sms',
        tier: 'T1',
        name: 'Smith Machine Squat',
        note: 'Full depth — break parallel every rep. Safe without spotter',
      },
      {
        id: 'lp',
        tier: 'T2',
        name: 'Leg Press',
        note: "Full ROM — don't lock out at top",
      },
      {
        id: 'rdl',
        tier: 'T2',
        name: 'Romanian Deadlift (DB)',
        note: 'Hinge at hip — feel hamstring stretch load at bottom',
      },
      {
        id: 'le',
        tier: 'T3',
        name: 'Leg Extension',
        note: 'Full extension — squeeze at the top',
      },
      {
        id: 'lc',
        tier: 'T3',
        name: 'Leg Curl',
        note: 'Full ROM — feel the hamstring rattle',
      },
      {
        id: 'crs',
        tier: 'T3',
        name: 'Calf Raise (Smith)',
        note: 'Full stretch at bottom — calves only respond to full ROM',
      },
    ],
  },
];
```

## Component behaviour

### WeekStrip

- Mobile: horizontal scroll strip, no scrollbar visible, each day is a compact pill
- Desktop (lg:): vertical list in left panel, each day is a full-width row showing day name + session type badge + duration
- Active day: accent border + accent text on both layouts
- Rest days: 40% opacity, not tappable on both layouts
- Default active day on load: current day of week based on `new Date().getDay()`, defaulting to Tuesday if today is a rest day

### ExerciseCard

- Collapsed by default
- Tap header to expand
- Expanded state shows: cue note, top set weight input (lbs), calculated set table
- Input: number type, step=5, min=0, placeholder="0"
- Set table recalculates on every input change — no submit button
- Top set row visually highlighted (accent color)
- Chevron rotates 180deg when open

### SetTable

- Columns: Set name | Weight | Reps
- Weight column: right-aligned, bold, accent color for top set row
- Reps column: right-aligned, muted
- If no weight entered: weight column shows "—"

### TierBadge

- T1: blue tint bg, blue text
- T2: green tint bg, green text
- T3: amber tint bg, amber text
- Small pill, 9–10px font

## Rest periods reference

Render this as a collapsible section at the bottom of the left panel on desktop, or at the bottom of the page on mobile. Label it "Rest periods".

| After | Rest |
| --- | --- |
| Top set — T1 | 3 min |
| Back-off sets | 2 min |
| Top set — T2 | 2 min |
| Isolation working sets | 90 sec |
| Warmup / activation sets | 60–90 sec |
| Bridge set | 90–120 sec |

## Vercel deployment

```json
// vercel.json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Include this for safety — ensures all routes resolve to index.html.

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use 'src/styles/variables' as *;`,
      },
    },
  },
})
```

## Standing orders (do not violate)

- All weights in lbs only — never kg
- Round all calculated weights to nearest 5 lbs
- No data persistence — state resets on reload, this is by design
- Single page app — no routing needed beyond the day selector
- Mobile-first — design for 375px screen width minimum, responsive up to 1440px desktop
- Use `lg:` Tailwind breakpoint (1024px) for the two-column desktop layout switch
- No animations except chevron rotate on expand — keep it fast
- No external UI libraries — Tailwind only
- Three themes: dark, light, system — toggle cycles system → light → dark
- All colors via CSS custom properties — never hardcode hex in components
- Default theme on first load: system
- Keep `program.ts` as the single source of truth for all workout data
- Use Yarn only — never npm or npx
- Corepack must be enabled before any yarn commands
- `nodeLinker: node-modules` must be set in `.yarnrc.yml`
