# Vita Ray

Personal workout plan app for Operation Vita Ray. Static React app — no backend, no auth, no database. Pure UI. Deployed on Vercel.

## Stack

- React 19 + Vite + TypeScript
- Sass (`sass` package) for SCSS
- Tailwind CSS v3 (`tailwind.config.ts`)
- Fonts: Bebas Neue (display) + Inter (body) via Google Fonts
- Strict TypeScript — `strict: true` in tsconfig
- Node.js: latest LTS — never pin to a specific outdated version
- Package manager: Yarn 4 (vendored binary) — never use npm or npx

## Package manager setup

Use Yarn 4 with a vendored binary (required for Vercel compatibility — Vercel does not officially support Yarn 4 via corepack). Initialize with:

```bash
yarn init -2
yarn set version 4.x.x
```

This downloads the Yarn binary to `.yarn/releases/yarn-4.x.x.cjs` and sets `yarnPath` in `.yarnrc.yml`. Commit the binary — Vercel reads `yarnPath` and uses it directly, bypassing corepack entirely.

`package.json` must include the `packageManager` field:

```json
{
  "packageManager": "yarn@4.x.x"
}
```

`.yarnrc.yml` must have both `yarnPath` and `nodeLinker`:

```yaml
# .yarnrc.yml
yarnPath: .yarn/releases/yarn-4.x.x.cjs
nodeLinker: node-modules
```

`nodeLinker: node-modules` is required for Vite and Tailwind compatibility. `yarnPath` is required for Vercel.

Pin the Node version via `.nvmrc` so local dev, CI, and Vercel all resolve the same LTS release:

```text
# .nvmrc
lts/*
```

`package.json` should also declare the `engines` field to fail fast on the wrong Node major version:

```json
{
  "engines": {
    "node": ">=20"
  }
}
```

`cimg/node:lts` in CircleCI resolves automatically to current LTS — no manual bumping needed there. `engines.node` in `package.json` should still be reviewed periodically and adjusted to reflect the current LTS floor as it advances.

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
│   │   ├── program.ts            # all workout data — single source of truth
│   │   └── types.ts              # shared TypeScript types
│   ├── components/
│   │   ├── WeekStrip.tsx         # day selector — horizontal strip on mobile, vertical list on desktop
│   │   ├── SessionView.tsx       # renders active day session
│   │   ├── ExerciseCard.tsx      # expandable exercise with weight calculator
│   │   ├── SetTable.tsx          # calculated set rows
│   │   ├── TierBadge.tsx         # T1 / T2 / T3 colored badge
│   │   ├── RestView.tsx          # rest day screen
│   │   ├── ThemeToggle.tsx       # cycles system → light → dark
│   │   └── UnitToggle.tsx        # switches between lbs and kg
│   ├── context/
│   │   ├── ThemeContext.tsx      # theme state + localStorage sync
│   │   └── UnitContext.tsx       # unit preference state + localStorage sync
│   ├── hooks/
│   │   ├── useTheme.ts           # convenience hook — consumes ThemeContext
│   │   └── useUnit.ts            # convenience hook — consumes UnitContext
│   ├── utils/
│   │   └── weight.ts             # roundWeight, calcSetWeight, convertWeight
│   └── styles/
│       ├── main.scss             # entry — imports tailwind + global styles
│       ├── _variables.scss       # CSS custom properties per theme
│       ├── _typography.scss      # font imports, base type rules
│       └── _components.scss      # custom styles Tailwind can't handle
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.node.json
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
  --bg-page: #0a0a0a;
  --bg-card: #141414;
  --bg-card-hover: #1c1c1c;
  --border: #2a2a2a;
  --text-primary: #f0ede6;
  --text-secondary: #9a9790;
  --text-muted: #5a5855;

  --tier-t1-bg: #0c1a2e;
  --tier-t1-text: #85b7eb;
  --tier-t2-bg: #0a1e16;
  --tier-t2-text: #5dcaa5;
  --tier-t3-bg: #1e1608;
  --tier-t3-text: #ef9f27;

  --push-bg: #1e1408;
  --push-text: #ef9f27;
  --pull-bg: #0c1a2e;
  --pull-text: #85b7eb;
  --legs-bg: #0a1e16;
  --legs-text: #5dcaa5;
}

:root[data-theme='light'] {
  --bg-page: #f5f3ee;
  --bg-card: #ffffff;
  --bg-card-hover: #f0ede6;
  --border: #d3d1c7;
  --text-primary: #0a0a0a;
  --text-secondary: #5a5855;
  --text-muted: #9a9790;

  --tier-t1-bg: #e6f1fb;
  --tier-t1-text: #0c447c;
  --tier-t2-bg: #e1f5ee;
  --tier-t2-text: #085041;
  --tier-t3-bg: #faeeda;
  --tier-t3-text: #633806;

  --push-bg: #fff3e0;
  --push-text: #633806;
  --pull-bg: #e6f1fb;
  --pull-text: #0c447c;
  --legs-bg: #eaf3de;
  --legs-text: #27500a;
}

// system theme — respect OS preference
@media (prefers-color-scheme: light) {
  :root[data-theme='system'] {
    --bg-page: #f5f3ee;
    --bg-card: #ffffff;
    --bg-card-hover: #f0ede6;
    --border: #d3d1c7;
    --text-primary: #0a0a0a;
    --text-secondary: #5a5855;
    --text-muted: #9a9790;

    --tier-t1-bg: #e6f1fb;
    --tier-t1-text: #0c447c;
    --tier-t2-bg: #e1f5ee;
    --tier-t2-text: #085041;
    --tier-t3-bg: #faeeda;
    --tier-t3-text: #633806;

    --push-bg: #fff3e0;
    --push-text: #633806;
    --pull-bg: #e6f1fb;
    --pull-text: #0c447c;
    --legs-bg: #eaf3de;
    --legs-text: #27500a;
  }
}
```

All components use CSS custom properties — never hardcode color hex values in JSX or SCSS component files.

**Typography:**

- Session titles, day names: Bebas Neue
- All other text: Inter
- Body size: 14px, line-height 1.6

## Hooks

### `useTheme` (`src/hooks/useTheme.ts`)

Convenience wrapper around `ThemeContext`. Throws if used outside `ThemeProvider`.

```ts
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
```

### `useUnit` (`src/hooks/useUnit.ts`)

Convenience wrapper around `UnitContext`. Throws if used outside `UnitProvider`.

```ts
import { useContext } from 'react';
import { UnitContext } from '@/context/UnitContext';

export function useUnit() {
  const ctx = useContext(UnitContext);
  if (!ctx) throw new Error('useUnit must be used within UnitProvider');
  return ctx;
}
```

## Weight utility (`src/utils/weight.ts`)

All weight math lives here. No component does its own weight calculation.

```ts
import type { Unit } from '@/data/types';

const LBS_TO_KG = 0.453592;
const KG_TO_LBS = 2.20462;

export function roundWeight(n: number, unit: Unit): number {
  if (unit === 'lbs') return Math.round(n / 5) * 5;
  return Math.round(n / 2.5) * 2.5;
}

export function calcSetWeight(topWeight: number, pct: number, unit: Unit): string {
  if (!topWeight || topWeight <= 0) return '—';
  return roundWeight(topWeight * pct, unit) + ' ' + unit;
}

export function convertWeight(value: number, from: Unit, to: Unit): number {
  if (from === to) return value;
  const raw = from === 'lbs' ? value * LBS_TO_KG : value * KG_TO_LBS;
  return roundWeight(raw, to);
}
```

## Weight calculator logic

User enters their top set weight per exercise. App calculates all set weights automatically. Unit (lbs or kg) is controlled globally via `UnitContext`.

```ts
const LBS_TO_KG = 0.453592;
const KG_TO_LBS = 2.20462;

// Round to nearest 5 lbs or nearest 2.5 kg
function roundWeight(n: number, unit: Unit): number {
  if (unit === 'lbs') return Math.round(n / 5) * 5;
  return Math.round(n / 2.5) * 2.5;
}

// Calculate set weight from top set
function calcSetWeight(topWeight: number, pct: number, unit: Unit): string {
  if (!topWeight || topWeight <= 0) return '—';
  return roundWeight(topWeight * pct, unit) + ' ' + unit;
}
```

**Unit conversion rules:**

- lbs → kg: multiply by 0.453592, round to nearest 2.5 kg
- kg → lbs: multiply by 2.20462, round to nearest 5 lbs
- When the user switches units, the top set input value converts automatically
- Unit preference is stored in `localStorage` as `'lbs'` or `'kg'` — persists across reloads (exception to the no-persistence rule — unit preference is a display setting, not workout data)
- Default unit on first load: lbs

Top set weight is stored in React state (`useState`) per exercise. Workout data itself resets on reload — this is intentional.

T3 isolation sets use working weight directly (user enters their working weight, not a top set). The pct for T3 activation is 0.75 of working weight.

## Tier percentages

**T1 — Primary compound (5 sets):**

| Set        | %    | Reps  |
| ---------- | ---- | ----- |
| Warmup     | 50%  | 12–15 |
| Bridge     | 70%  | 10–12 |
| Top set    | 100% | 4–6   |
| Back-off 1 | 75%  | 8–10  |
| Back-off 2 | 75%  | 8–10  |

**T2 — Secondary compound (4 sets):**

| Set        | %    | Reps |
| ---------- | ---- | ---- |
| Warmup     | 55%  | 12   |
| Top set    | 100% | 6–8  |
| Back-off 1 | 70%  | 8–10 |
| Back-off 2 | 70%  | 8–10 |

**T3 — Isolation (3 sets):**

| Set        | %              | Reps  |
| ---------- | -------------- | ----- |
| Activation | 75% of working | 12–15 |
| Working 1  | 100%           | 10–12 |
| Working 2  | 100%           | 10–12 |

## Program data

All workout data lives in `src/data/program.ts`. Do not hardcode exercise names or sets anywhere else.

Sets are NOT stored in `program.ts`. Sets are generated at render time from the tier percentages table above based on each exercise's `tier` field. The data file only stores `id`, `tier`, `name`, and `note` per exercise. The `SetTable` component receives the exercise tier and top set weight as props and generates the correct rows.

All shared types live in `src/data/types.ts`:

```ts
// src/data/types.ts
export type DayType = 'rest' | 'push' | 'pull' | 'legs';
export type Tier = 'T1' | 'T2' | 'T3';
export type Unit = 'lbs' | 'kg';

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
        note: "Pinch at peak contraction — don't rush",
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
- Expanded state shows: cue note, top set weight input, calculated set table
- Input: number type, `inputMode="decimal"`, min=0, placeholder="0"
- Input step: 5 when unit is lbs, 2.5 when unit is kg
- Input label shows current unit (lbs or kg)
- When unit switches, input value converts automatically
- Input rejects non-numeric and negative values — invalid entries show an error message below the input ("Enter a valid number" / "Weight cannot be negative") instead of updating the set table
- Set table recalculates on every valid input change — no submit button
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

### UnitToggle

- Renders as a pill toggle with two options: `lbs` and `kg`
- Active unit is visually highlighted
- Sits in the app header alongside ThemeToggle
- On toggle: converts all currently entered top set weights in state to the new unit, rounds to correct increment
- Reads and writes via `useUnit` hook

### UnitContext

- Exposes: `unit: Unit`, `setUnit: (u: Unit) => void`
- On mount: reads from `localStorage` key `'vita-ray-unit'` — defaults to `'lbs'` if not set
- On change: writes to `localStorage` and updates all weight displays immediately
- Wrap `App.tsx` with `UnitProvider` alongside `ThemeProvider`

### ThemeContext

- Exposes: `theme: Theme`, `setTheme: (t: Theme) => void`
- On mount: reads from `localStorage` key `'vita-ray-theme'` — defaults to `'system'` if not set
- On change: writes to `localStorage` and updates `data-theme` attribute on `document.documentElement`
- Wrap `App.tsx` with `ThemeProvider` as outermost provider

## Rest periods reference

Render this as a collapsible section at the bottom of the left panel on desktop, or at the bottom of the page on mobile. Label it "Rest periods".

| After                    | Rest       |
| ------------------------ | ---------- |
| Top set — T1             | 3 min      |
| Back-off sets            | 2 min      |
| Top set — T2             | 2 min      |
| Isolation working sets   | 90 sec     |
| Warmup / activation sets | 60–90 sec  |
| Bridge set               | 90–120 sec |

## Vercel deployment

```json
// vercel.json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

This ensures Vercel serves `index.html` for all paths — required for any client-side SPA even without hash routing.

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

Do NOT use `css.preprocessorOptions.scss.additionalData` — `_variables.scss` defines CSS custom properties, not Sass variables, so it does not need to be globally injected. Import it once in `main.scss` instead.

## TypeScript config

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

```json
// tsconfig.node.json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts", "tailwind.config.ts"]
}
```

## index.html spec

```html
<!DOCTYPE html>
<html lang="en" data-theme="system">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Vita Ray — Operation Vita Ray workout plan and weight calculator"
    />
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <title>Vita Ray</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

`data-theme="system"` is set on `<html>` as the initial value before React hydrates. `ThemeContext` reads from `localStorage` on mount and updates the attribute immediately — this prevents a flash of wrong theme on load.

## Testing (Vitest)

```bash
yarn add -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @vitest/coverage-v8
```

```ts
// vite.config.ts — add test block
/// <reference types="vitest" />
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'html'],
      reportsDirectory: './coverage',
      exclude: ['src/main.tsx', 'src/vite-env.d.ts', '**/*.config.*', 'src/test/**'],
    },
  },
});
```

```ts
// src/test/setup.ts
import '@testing-library/jest-dom';
```

**Required test files** — one per unit, colocated as `*.test.ts(x)` next to the file under test:

- `src/utils/weight.test.ts` — covers `roundWeight`, `calcSetWeight`, `convertWeight` for both lbs and kg, including zero/negative/undefined edge cases
- `src/components/ExerciseCard.test.tsx` — renders, expands on click, updates set table on weight input, shows error message on invalid/negative input and does not update the set table while invalid
- `src/components/SetTable.test.tsx` — renders correct rows per tier, shows "—" when no weight entered
- `src/components/WeekStrip.test.tsx` — renders 7 days, rest days not clickable, active day highlighted
- `src/components/ThemeToggle.test.tsx` — cycles system → light → dark, persists to localStorage
- `src/components/UnitToggle.test.tsx` — switches unit, converts existing weight values
- `src/context/ThemeContext.test.tsx` — defaults to system, reads/writes localStorage
- `src/context/UnitContext.test.tsx` — defaults to lbs, reads/writes localStorage

`package.json` scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "typecheck": "tsc -b --noEmit"
  }
}
```

## Prettier

```bash
yarn add -D prettier
```

```json
// .prettierrc.json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 2,
  "endOfLine": "lf"
}
```

```text
// .prettierignore
dist
coverage
node_modules
.yarn
```

## ESLint

```bash
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh eslint-config-prettier
```

```js
// eslint.config.js (flat config — ESLint 9)
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
  { ignores: ['dist', 'coverage', 'node_modules'] },
  js.configs.recommended,
  ...tseslint.configs.strict,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
    settings: { react: { version: 'detect' } },
  },
  prettier
);
```

`eslint-config-prettier` must be last in the config array — it disables all formatting rules so ESLint and Prettier never conflict.

## Git hooks (Husky + lint-staged)

```bash
yarn add -D husky lint-staged
yarn husky init
```

```json
// package.json — add lint-staged block
{
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix --max-warnings 0", "prettier --write"],
    "*.{json,md,scss,html}": ["prettier --write"]
  }
}
```

```bash
# .husky/pre-commit
yarn lint-staged
```

```bash
# .husky/pre-push
yarn typecheck && yarn test
```

`husky init` creates `.husky/pre-commit` automatically with `yarn lint-staged` — verify it's there, then add `.husky/pre-push` manually for the typecheck + test gate.

## SonarCloud

```text
// sonar-project.properties
sonar.projectKey=<your-github-username>_vita-ray
sonar.organization=<your-sonarcloud-org>
sonar.sources=src
sonar.tests=src
sonar.test.inclusions=**/*.test.ts,**/*.test.tsx
sonar.exclusions=**/*.test.ts,**/*.test.tsx,src/main.tsx,**/*.config.*
sonar.javascript.lcov.reportPaths=coverage/lcov.info
sonar.typescript.lcov.reportPaths=coverage/lcov.info
sonar.sourceEncoding=UTF-8
```

Replace `<your-github-username>` and `<your-sonarcloud-org>` with actual values after creating the project on sonarcloud.io and linking the GitHub repo. `SONAR_TOKEN` is generated in SonarCloud account settings and stored in a CircleCI context named `SonarCloud` — never committed to the repo, never set as a plain project env var.

## CircleCI

```yaml
# .circleci/config.yml
version: 2.1

orbs:
  node: circleci/node@5.2.0
  sonarcloud: sonarsource/sonarcloud@2.0.0

jobs:
  lint-and-typecheck:
    docker:
      - image: cimg/node:lts
    steps:
      - checkout
      - node/install-packages:
          pkg-manager: yarn-berry
      - run: yarn lint
      - run: yarn typecheck
      - run: yarn format:check

  test:
    docker:
      - image: cimg/node:lts
    steps:
      - checkout
      - node/install-packages:
          pkg-manager: yarn-berry
      - run: yarn test:coverage
      - persist_to_workspace:
          root: .
          paths:
            - coverage

  sonar-scan:
    docker:
      - image: cimg/node:lts
    steps:
      - checkout
      - attach_workspace:
          at: .
      - sonarcloud/scan

  build:
    docker:
      - image: cimg/node:lts
    steps:
      - checkout
      - node/install-packages:
          pkg-manager: yarn-berry
      - run: yarn build

workflows:
  ci:
    jobs:
      - lint-and-typecheck
      - test
      - sonar-scan:
          requires:
            - test
          context: SonarCloud
      - build:
          requires:
            - lint-and-typecheck
            - test
```

`SONAR_TOKEN` lives in a CircleCI context named `SonarCloud` — must match exactly whatever name is set in CircleCI org settings. It is never set as a plain project environment variable, since contexts are scoped, auditable, and reusable across future projects.

No `corepack enable` step appears in any job. The project uses a vendored Yarn binary (`yarnPath` in `.yarnrc.yml`, committed to the repo) rather than corepack, because Vercel does not officially support Yarn 4 via corepack. The `node/install-packages` orb step with `pkg-manager: yarn-berry` detects and uses the vendored binary automatically — corepack is not part of this pipeline anywhere, including locally.

Vercel handles deployment separately via its own GitHub integration (auto-deploy on push to `main`) — CircleCI does not deploy, it only gates quality. A failed CircleCI run does not block Vercel's deploy automatically; if you want that enforcement, set `main` branch protection on GitHub to require the CircleCI checks to pass before merge.

## Standing orders (do not violate)

- Default unit is lbs — user can switch to kg via UnitToggle in the header
- Round calculated weights to nearest 5 lbs or nearest 2.5 kg depending on active unit
- Unit preference and theme preference persist in localStorage — these are display settings, not workout data
- All weight math goes through `src/utils/weight.ts` — no inline calculations in components
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
- Use the vendored Yarn binary via `yarnPath` in `.yarnrc.yml` — never corepack, anywhere, including CI
- `nodeLinker: node-modules` must be set in `.yarnrc.yml`
- Use `@/` path alias for all imports — never use relative `../../` paths
- All contexts consumed via their named hooks (`useTheme`, `useUnit`) — never `useContext` directly in components
- No `any` types — strict TypeScript throughout
- All utility functions in `src/utils/` — no business logic in components
- Every new utility or component ships with a colocated `*.test.ts(x)` file
- Code must pass `yarn lint`, `yarn typecheck`, and `yarn test` before commit — enforced via Husky pre-commit and pre-push hooks
- Never commit `SONAR_TOKEN` or any secret — CircleCI context only
- `eslint-config-prettier` must always be the last entry in `eslint.config.js`
- No `console.log` left in committed code — use `console.warn`/`console.error` only where intentional
