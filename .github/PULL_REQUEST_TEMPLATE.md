<!--
🏷️ PR title must follow Conventional Commits: <type>(<scope>): <summary>
  e.g. feat(exercise-card): show error on negative weight input
Types: feat | fix | refactor | perf | test | docs | style | build | ci | chore | revert
Keep PRs small and focused — one concern per PR. Delete sections that don't apply.
-->

## 🔗 Related Issues

<!-- Use keywords like 'Closes', 'Fixes', or 'Resolves' to auto-close the issue on merge. Write "None" if not applicable. -->

- Closes #XXXX
- Ref #XXXX

## 📝 Description

**What does this PR do?**

<!-- Describe the technical implementation of the change. -->

**Why is this change necessary?**

<!-- Explain the context and highlight any specific technical decisions made. -->

## 🛠️ Type of Change

- [ ] 🐛 Bug fix (non-breaking change which fixes an issue)
- [ ] ✨ New feature (non-breaking change which adds functionality)
- [ ] 💥 Breaking change (alters program data shape, localStorage keys/values, or deploy config)
- [ ] ♻️ Refactor / ⚡ Performance (no behaviour change)
- [ ] 🧪 Tests only
- [ ] 📚 Documentation (README, CLAUDE.md)
- [ ] 🔧 Build / CI / Chore (tooling, CircleCI, dependencies, config)

## 🧾 Changes

<!-- Bullet the notable changes. Call out anything a reviewer might otherwise miss. -->

-

## 📸 Screenshots / Recordings

<!-- Required for any UI change. Delete this section for non-UI PRs. -->

| View                 | ☀️ Light | 🌙 Dark |
| -------------------- | -------- | ------- |
| 📱 Mobile (375px)    |          |         |
| 🖥️ Desktop (≥1024px) |          |         |

## 🧪 How to Test

<!-- Steps a reviewer can follow on the Vercel preview deployment or locally with `yarn dev`. -->

1.
2.
3.

**▲ Vercel preview:** <!-- link is posted automatically by the Vercel bot -->

## 🏋️ Pre-Flight Checklist

<!-- Ensure these are complete before requesting a review to save CI time. Click each section to expand. -->

<details open>
<summary><b>✅ Quality Gates</b></summary>

- [ ] 🧹 Passed lints: `yarn lint` (zero warnings)
- [ ] 🔷 Passed type check: `yarn typecheck`
- [ ] 🧪 Passed tests: `yarn test` (no existing tests broken)
- [ ] 💅 Formatted code: `yarn format:check`
- [ ] 📦 Production build succeeds: `yarn build`
- [ ] 🎯 New/changed code has colocated `*.test.ts(x)` coverage

<!-- CI also runs SonarCloud automatically on this PR — no local action needed for that. -->

</details>

<details>
<summary><b>📐 Project Standards</b></summary>

- [ ] ⚖️ All weight math goes through `src/utils/weight.ts` — no inline calculations in components
- [ ] 📋 Workout data lives only in `src/data/program.ts`; shared types in `src/data/types.ts`
- [ ] 🎨 Colors use CSS custom properties — no hardcoded hex in components or SCSS partials
- [ ] 🧭 Imports use the `@/` alias — no relative `../../` paths
- [ ] 🪝 Contexts consumed via `useTheme` / `useUnit` — no direct `useContext` in components
- [ ] 🚫 No `any`, no stray `console.log`, no unexplained `eslint-disable`
- [ ] 💾 No new persistence beyond the `vita-ray-theme` / `vita-ray-unit` localStorage keys

</details>

<details>
<summary><b>🎨 UI & Accessibility</b> <i>(skip for non-UI PRs)</i></summary>

- [ ] 📱 Verified at 375px mobile and 🖥️ ≥1024px (`lg:`) desktop layouts
- [ ] 🌓 Verified in system, ☀️ light, and 🌙 dark themes
- [ ] ⚖️ Verified with both `lbs` and `kg` units
- [ ] 🐢 No new animations (chevron rotate is the only allowed one)
- [ ] ⌨️ Interactive elements are keyboard-reachable and have accessible labels

</details>

<details>
<summary><b>🔒 Dependencies & Security</b></summary>

- [ ] 📦 No new dependencies — or justified below and `yarn.lock` is committed
- [ ] 🧶 Yarn only (no `npm`/`npx` introduced; vendored `yarnPath` untouched unless intended)
- [ ] 🔑 No secrets, tokens, or credentials committed

</details>

## ⚠️ Risk & Rollback

<!-- What could break in production? How do we roll back? (Vercel instant rollback / revert commit.) -->

- **Risk level:** 🟢 Low / 🟡 Medium / 🔴 High
- **Rollback plan:**

## 💬 Notes for Reviewers

<!-- Trade-offs considered, follow-up work, TODO(refactor) items added, areas needing extra scrutiny. -->
