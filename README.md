# Vita Ray

[![Vercel](https://img.shields.io/badge/deployed_on-Vercel-black?logo=vercel&logoColor=white)](https://vita-ray.vercel.app)
[![CircleCI](https://circleci.com/gh/rafiandria23/vita-ray.svg?style=shield)](https://circleci.com/gh/rafiandria23/vita-ray)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=rafiandria23_vita-ray&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=rafiandria23_vita-ray)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=rafiandria23_vita-ray&metric=coverage)](https://sonarcloud.io/summary/new_code?id=rafiandria23_vita-ray)

Personal workout plan app for Operation Vita Ray. Static React SPA — no backend, no auth, no database.

## Stack

- React 19 + Vite + TypeScript (strict)
- Tailwind CSS v3 + Sass/SCSS
- Bebas Neue (display) + Inter (body) via Google Fonts
- Three themes: dark, light, system (follows OS preference)
- Package manager: Yarn 4 (vendored binary)

## Getting started

```bash
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
