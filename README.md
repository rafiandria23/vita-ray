# Vita Ray

Personal workout plan app for Operation Vita Ray. Static React SPA — no backend, no auth, no database.

## Stack

- React 19 + Vite + TypeScript (strict)
- Tailwind CSS v3 + Sass/SCSS
- Bebas Neue (display) + Inter (body) via Google Fonts
- Three themes: dark, light, system (follows OS preference)
- Package manager: Yarn (corepack)

## Getting started

```bash
corepack enable
yarn install
yarn dev
```

## Build

```bash
yarn build
```

Output goes to `dist/`. Deployed on Vercel — any push to `main` triggers a deploy.

## Structure

```text
src/
├── context/
│   ├── ThemeContext.tsx   # theme state + localStorage sync
│   └── UnitContext.tsx    # lbs/kg unit state + localStorage sync
├── hooks/
│   ├── useTheme.ts        # convenience wrapper for ThemeContext
│   └── useUnit.ts         # convenience wrapper for UnitContext
├── utils/
│   └── weight.ts          # roundWeight, calcSetWeight, convertWeight
├── data/
│   ├── program.ts         # all workout data — single source of truth
│   └── types.ts           # shared TypeScript types
├── components/
│   ├── WeekStrip.tsx      # day selector — horizontal on mobile, vertical on desktop
│   ├── SessionView.tsx    # active day session
│   ├── ExerciseCard.tsx   # expandable exercise with weight calculator + unit conversion
│   ├── SetTable.tsx       # calculated set rows
│   ├── TierBadge.tsx      # T1 / T2 / T3 badge
│   ├── RestView.tsx       # rest day screen
│   ├── ThemeToggle.tsx    # cycles system → light → dark
│   └── UnitToggle.tsx     # switches between lbs and kg
├── styles/
│   ├── main.scss          # entry — imports tailwind + partials
│   ├── _variables.scss    # CSS custom properties per theme
│   ├── _typography.scss   # font imports, base type rules
│   └── _components.scss   # custom styles Tailwind can't handle
├── App.tsx
└── main.tsx
```

## Notes

- Default unit is lbs — switch to kg via the toggle in the header
- All weight math goes through `src/utils/weight.ts`
- No workout state persistence — resets on reload by design
- Theme and unit preference persisted to `localStorage`
