# Graph Report - vita-ray  (2026-11-21)

## Corpus Check
- 50 files · ~81,579 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 12 file(s) not represented in the graph (top: (none) 6, .scss 4, .gz 1)

## Summary
- 357 nodes · 619 edges · 31 communities (18 shown, 13 thin omitted)
- Extraction: 94% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 34 edges (avg confidence: 0.85)
- Token cost: 217,213 input · 0 output

## Community Hubs (Navigation)
- Component Tests & Theme Toggle
- AGENTS.md Tooling & Standing Orders
- CircleCI Pipeline Config
- App Shell & Session Views
- Weight Calc & Unit Flow
- AGENTS.md App Spec Concepts
- TypeScript Compiler Config
- CLAUDE.md Stack & Tooling
- Package Manifest & Runtime Deps
- Dev Dependencies
- ESLint Config & Plugins
- npm Scripts
- Theme System & index.html
- Node tsconfig
- Vite & Vitest Config
- Prettier Settings
- Tailwind Config
- Test Setup (jest-dom)
- lint-staged Globs
- Favicon Artwork
- ESLint Package
- jsdom Package
- lint-staged Package
- PostCSS Package
- user-event Package
- Node Types Package
- React DOM Types
- Vitest Coverage Package
- Vite Env Types
- Vercel Rewrites

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 18 edges
2. `vitest` - 16 edges
3. `Vita Ray Project Spec (CLAUDE.md)` - 14 edges
4. `scripts` - 13 edges
5. `react` - 13 edges
6. `@testing-library/react` - 13 edges
7. `UnitProvider()` - 13 edges
8. `App()` - 10 edges
9. `TrainingDay` - 10 edges
10. `ExerciseCard()` - 9 edges

## Surprising Connections (you probably didn't know these)
- `WeekStrip Behaviour Spec` --references--> `getDefaultDayIndex()`  [INFERRED]
  CLAUDE.md → src/data/program.ts
- `SetTable Behaviour Spec` --references--> `SetTable()`  [EXTRACTED]
  CLAUDE.md → src/components/SetTable.tsx
- `TierBadge Behaviour Spec` --references--> `TierBadge()`  [EXTRACTED]
  CLAUDE.md → src/components/TierBadge.tsx
- `UnitToggle Behaviour Spec` --references--> `UnitToggle()`  [EXTRACTED]
  CLAUDE.md → src/components/UnitToggle.tsx
- `WeekStrip Behaviour Spec` --references--> `WeekStrip()`  [EXTRACTED]
  CLAUDE.md → src/components/WeekStrip.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Weight calculation flow (input -> tier sets -> rounded weights)** — agents_exercisecard, agents_settable, agents_tier_percentages, agents_calcsetweight, agents_roundweight [INFERRED 0.85]
- **Unit preference persistence and conversion** — agents_unitcontext, agents_useunit, agents_unittoggle, agents_convertweight [EXTRACTED 1.00]
- **Quality gates (lint, format, typecheck, test, coverage)** — agents_eslint_config, agents_prettier, agents_vitest_testing, agents_husky_lint_staged, agents_circleci_pipeline, agents_sonarcloud [EXTRACTED 1.00]
- **Quality Gate Toolchain (lint, typecheck, test, coverage, scan)** — claude_circleci_pipeline, claude_husky_lint_staged, claude_eslint_flat_config, claude_prettier_config, claude_vitest_testing, claude_sonarcloud [EXTRACTED 1.00]
- **Weight Calculation Flow (tier sets from top set weight)** — claude_exercisecard_spec, claude_settable_spec, claude_tier_percentages, claude_weight_utility, claude_unit_conversion_rules [INFERRED 0.85]
- **Persisted Display Settings (theme + unit via context, hook, localStorage)** — claude_themecontext_spec, claude_unitcontext_spec, claude_usetheme_hook, claude_useunit_hook, claude_theme_system [INFERRED 0.85]

## Communities (31 total, 13 thin omitted)

### Community 0 - "Component Tests & Theme Toggle"
Cohesion: 0.11
Nodes (24): react, @testing-library/react, vitest, exercise, t3Exercise, Wrapper(), Wrapper(), Wrapper() (+16 more)

### Community 1 - "AGENTS.md Tooling & Standing Orders"
Cohesion: 0.08
Nodes (28): CircleCI Pipeline, ESLint Flat Config (ESLint 9), Git Hooks (Husky + lint-staged), Military Dossier Aesthetic (Mobile-first), Operation Vita Ray, @/ Path Alias, Prettier Config, Program Data (program.ts DAYS) - Single Source of Truth (+20 more)

### Community 2 - "CircleCI Pipeline Config"
Cohesion: 0.08
Nodes (32): at, docker, requires, steps, jobs, image, jobs, build (+24 more)

### Community 3 - "App Shell & Session Views"
Cohesion: 0.15
Nodes (21): App(), REST_PERIODS, RestPeriods(), Props, RestView(), unknownTypeDay, TYPE_COLOR, Props (+13 more)

### Community 4 - "Weight Calc & Unit Flow"
Cohesion: 0.14
Nodes (21): ExerciseCard Behaviour Spec, Unit Conversion Rules (lbs<->kg), UnitContext Spec, UnitToggle Behaviour Spec, useUnit Hook Spec, Weight Utility (src/utils/weight.ts), README Notes (lbs default, weight.ts, no persistence), ExerciseCard() (+13 more)

### Community 5 - "AGENTS.md App Spec Concepts"
Cohesion: 0.11
Nodes (23): calcSetWeight(), convertWeight(), Per-theme CSS Custom Properties (_variables.scss), ExerciseCard component, Mobile-first Military Dossier Aesthetic, Program Data (src/data/program.ts DAYS), Responsive Layout (mobile single column / lg: two column), Rest Periods Reference (collapsible section) (+15 more)

### Community 6 - "TypeScript Compiler Config"
Cohesion: 0.10
Nodes (20): compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib, module, moduleResolution (+12 more)

### Community 7 - "CLAUDE.md Stack & Tooling"
Cohesion: 0.18
Nodes (12): CircleCI Pipeline (lint, test, sonar-scan, build), ESLint Flat Config (eslint-config-prettier last), Husky + lint-staged Git Hooks, Prettier Config, Project Structure, SonarCloud Analysis, Stack: React 19 + Vite + TypeScript + Sass + Tailwind v3, Strict TypeScript Config (@/* paths) (+4 more)

### Community 8 - "Package Manifest & Runtime Deps"
Cohesion: 0.14
Nodes (14): dependencies, react@^19.0.0, react-dom@^19.0.0, description, typescript@~5.7.2, engines, node, name (+6 more)

### Community 9 - "Dev Dependencies"
Cohesion: 0.13
Nodes (15): devDependencies, autoprefixer@^10.4.20, husky@^9.1.7, prettier@^3.9.1, sass@^1.101.0, @testing-library/dom@^10.4.1, @testing-library/react@^16.3.2, @types/react@^19.0.0 (+7 more)

### Community 10 - "ESLint Config & Plugins"
Cohesion: 0.15
Nodes (12): eslint-config-prettier@^10.1.8, @eslint/js@^10.0.1, eslint-plugin-react@^7.37.5, eslint-plugin-react-hooks@^7.1.1, eslint-plugin-react-refresh@^0.5.3, typescript-eslint@^8.62.0, eslint-config-prettier, @eslint/js (+4 more)

### Community 11 - "npm Scripts"
Cohesion: 0.15
Nodes (13): scripts, build, dev, format, format:check, lint, lint:fix, prepare (+5 more)

### Community 12 - "Theme System & index.html"
Cohesion: 0.21
Nodes (10): Per-theme CSS Custom Properties (_variables.scss), index.html Spec, Theme System (system / light / dark), ThemeContext Spec, TierBadge Behaviour Spec, Typography: Bebas Neue + Inter, useTheme Hook Spec, Favicon Link (/favicon.svg) (+2 more)

### Community 13 - "Node tsconfig"
Cohesion: 0.20
Nodes (9): compilerOptions, allowSyntheticDefaultImports, composite, module, moduleResolution, skipLibCheck, strict, types (+1 more)

### Community 14 - "Vite & Vitest Config"
Cohesion: 0.33
Nodes (4): vite@^6.0.5, @vitejs/plugin-react@^4.3.4, vite, @vitejs/plugin-react

### Community 15 - "Prettier Settings"
Cohesion: 0.29
Nodes (6): endOfLine, printWidth, semi, singleQuote, tabWidth, trailingComma

### Community 18 - "lint-staged Globs"
Cohesion: 0.67
Nodes (3): lint-staged, *.{json,md,scss,html}, *.{ts,tsx}

### Community 19 - "Favicon Artwork"
Cohesion: 0.67
Nodes (3): Vita Ray Favicon (lightning bolt app icon), Dark Rounded Square Background (#0A0A0A), Lightning Bolt Glyph (#85B7EB)

## Ambiguous Edges - Review These
- `index.html Spec` → `Favicon Link (/favicon.svg)`  [AMBIGUOUS]
  index.html · relation: conceptually_related_to

## Knowledge Gaps
- **11 isolated node(s):** `Project Structure`, `Typography (Bebas Neue + Inter)`, `TierBadge component`, `Strict TypeScript Config (@/* paths)`, `Prettier Config` (+6 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 109 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vitest` connect `Component Tests & Theme Toggle` to `App Shell & Session Views`, `Weight Calc & Unit Flow`, `Package Manifest & Runtime Deps`, `Dev Dependencies`, `Vite & Vitest Config`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **What connects `Project Structure`, `Typography (Bebas Neue + Inter)`, `TierBadge component` to the rest of the system?**
  _11 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Component Tests & Theme Toggle` be split into smaller, more focused modules?**
  _Cohesion score 0.10801393728222997 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Component Tests & Theme Toggle` to `Package Manifest & Runtime Deps`, `App Shell & Session Views`, `Weight Calc & Unit Flow`?**
  _High betweenness centrality (0.074) - this node is a cross-community bridge._
- **Should `AGENTS.md Tooling & Standing Orders` be split into smaller, more focused modules?**
  _Cohesion score 0.07777777777777778 - nodes in this community are weakly interconnected._
- **Why does `Vita Ray Project Spec (CLAUDE.md)` connect `AGENTS.md Tooling & Standing Orders` to `Theme System & index.html`, `Weight Calc & Unit Flow`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `index.html Spec` and `Favicon Link (/favicon.svg)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._