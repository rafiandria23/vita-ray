# Graph Report - vita-ray  (2026-11-21)

## Corpus Check
- 50 files · ~82,924 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 12 file(s) not represented in the graph (top: (none) 6, .scss 4, .gz 1)

## Summary
- 3800 nodes · 9620 edges · 290 communities (226 shown, 64 thin omitted)
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 1064 edges (avg confidence: 0.85)
- Token cost: 217,213 input · 0 output

## Graph Freshness
- Built from commit: `e9f4845d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Component Tests & Theme Toggle
- AGENTS.md Tooling & Standing Orders
- CircleCI Pipeline Config
- App Shell & Session Views
- Weight Calc & Unit Flow
- AGENTS.md App Spec Concepts
- TypeScript Compiler Config
- setTimeout
- package.json
- Q6e
- npm Scripts
- Theme System & index.html
- Node tsconfig
- lj
- Prettier Settings
- za
- Kk
- b
- Favicon Artwork
- emit
- Wr
- execute
- mapToBase
- constructor
- getCandidates
- K6e
- KVe
- Vite Env Types
- Vercel Rewrites
- B9e
- Bw
- make
- hc
- Ol
- pa
- _getEntry
- Gt
- jit
- validateAndExecute
- r
- qn
- Nr
- .write
- s
- Rr
- getSession
- Ln
- cxe
- Yo
- maxAge
- alert
- c
- V
- bn
- us
- n
- Uh
- render
- writeFileSync
- reportInfo
- a8e
- cX
- fm
- toJSON
- yl
- v
- ExerciseCard.test.tsx
- cM
- Ut
- _x
- jy
- run
- c3e
- renderChoice
- tNe
- makeCallSync
- Hr
- lM
- tke
- vqe
- r
- getFileSource
- zA
- u0
- _filter
- zme
- renovate.json
- resolveFilename
- CF
- u4e
- mme
- h9e
- eOe
- txe
- fromJSON
- .pipe
- _makeRequest
- i1e
- nD
- read
- vc
- buildCallerFunction
- verify
- find
- Ia
- ace
- fetchPackageFromCache
- isDisabled
- n2t
- ide
- submit
- process
- Tp
- zje
- Fp
- aI
- setTimeout
- crt
- Ch
- BP
- makeBound
- lOe
- fn
- s9
- refresh
- once
- fmt
- hG
- findExtension
- L1
- installPackage
- isUniversal
- aF
- tU
- aLe
- C7e
- hd
- DL
- c0
- t3
- reportValue
- xI
- ensureCapacity
- uBt
- Egt
- Pue
- xUe
- _E
- s_e
- toChoice
- makeInterval
- aQ
- aSt
- an
- checkFinalSnapsnot
- Kae
- eo
- get
- W0e
- BB
- rCt
- p2t
- $at
- attachInternalDependencies
- BGe
- lve
- getTypes
- x
- dBt
- forgetTransientResolutions
- ov
- OB
- findGeneralName
- fullSource
- Zwe
- Uct
- addRest
- fgt
- awt
- Bve
- cat
- cbt
- compare
- create
- lvt
- h7e
- getBufferAndClose
- generateTargetPath
- gvt
- jBe
- e3
- encodeBody
- eSt
- a4e
- fve
- fvt
- getBlock
- getWorkspaceByCwd
- $oe
- hasDependency
- sbe
- z0
- uve
- p0t
- reportHit
- jze
- splice
- patchConsole
- Q0t
- yCt
- UU
- _2
- startSectionPromise
- hM
- aee
- attachExternalDependents
- aye
- B8e
- a
- buffer
- callRuntimeCallbacks
- captureString
- CIt
- supports
- createEntry
- tS
- m$
- ensureJSsource
- ewt
- exitCode
- f1t
- JA
- findSequenceMember
- fUe
- XU
- G6e
- genCommitMessage
- .write
- getWorkspaceByFilePath
- kU
- hOe
- Hst
- hvt
- px
- Jet
- k3e
- k8e
- kBt
- kFe
- kOe
- list
- T2e
- makeOverloader
- jje
- mve
- r0t
- __nbind_register_function
- nGe
- Mj
- pop64
- push
- push64
- c0t
- r2t
- readAsciiString
- rle
- tvt
- S9e
- stringToAscii
- _tt
- UAe
- V6e
- vue
- VVe
- XVe
- b7
- EAe
- equals
- L0e
- c
- prev
- executeInteractive
- limitOpenFiles
- Got
- vst
- kB
- Omt

## God Nodes (most connected - your core abstractions)
1. `s()` - 134 edges
2. `c()` - 116 edges
3. `r()` - 102 edges
4. `v()` - 97 edges
5. `constructor()` - 84 edges
6. `b()` - 83 edges
7. `n()` - 77 edges
8. `t` - 75 edges
9. `emit()` - 75 edges
10. `Q6e()` - 60 edges

## Surprising Connections (you probably didn't know these)
- `ThemeContext Spec` --references--> `ThemeProvider()`  [EXTRACTED]
  CLAUDE.md → src/context/ThemeContext.tsx
- `useTheme Hook Spec` --references--> `useTheme()`  [EXTRACTED]
  CLAUDE.md → src/hooks/useTheme.ts
- `WeekStrip Behaviour Spec` --references--> `getDefaultDayIndex()`  [INFERRED]
  CLAUDE.md → src/data/program.ts
- `TierBadge Behaviour Spec` --references--> `TierBadge()`  [EXTRACTED]
  CLAUDE.md → src/components/TierBadge.tsx
- `UnitToggle Behaviour Spec` --references--> `UnitToggle()`  [EXTRACTED]
  CLAUDE.md → src/components/UnitToggle.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Quality gates (lint, format, typecheck, test, coverage)** — agents_eslint_config, agents_prettier, agents_vitest_testing, agents_husky_lint_staged, agents_circleci_pipeline, agents_sonarcloud [EXTRACTED 1.00]
- **Unit preference persistence and conversion** — agents_unitcontext, agents_useunit, agents_unittoggle, agents_convertweight [EXTRACTED 1.00]
- **Quality Gate Toolchain (lint, typecheck, test, coverage, scan)** — claude_circleci_pipeline, claude_husky_lint_staged, claude_eslint_flat_config, claude_prettier_config, claude_vitest_testing, claude_sonarcloud [EXTRACTED 1.00]
- **Weight calculation flow (input -> tier sets -> rounded weights)** — agents_exercisecard, agents_settable, agents_tier_percentages, agents_calcsetweight, agents_roundweight [INFERRED 0.85]
- **Persisted Display Settings (theme + unit via context, hook, localStorage)** — claude_themecontext_spec, claude_unitcontext_spec, claude_usetheme_hook, claude_useunit_hook, claude_theme_system [INFERRED 0.85]
- **Weight Calculation Flow (tier sets from top set weight)** — claude_exercisecard_spec, claude_settable_spec, claude_tier_percentages, claude_weight_utility, claude_unit_conversion_rules [INFERRED 0.85]

## Communities (290 total, 64 thin omitted)

### Community 0 - "Component Tests & Theme Toggle"
Cohesion: 0.13
Nodes (17): dependencies, react@^19.0.0, react-dom@^19.0.0, react, react-dom, @testing-library/react, vitest, CYCLE (+9 more)

### Community 1 - "AGENTS.md Tooling & Standing Orders"
Cohesion: 0.08
Nodes (26): CircleCI Pipeline, ESLint Flat Config (ESLint 9), Git Hooks (Husky + lint-staged), Military Dossier Aesthetic (Mobile-first), Operation Vita Ray, @/ Path Alias, Prettier Config, Program Data (program.ts DAYS) - Single Source of Truth (+18 more)

### Community 2 - "CircleCI Pipeline Config"
Cohesion: 0.06
Nodes (37): at, docker, requires, steps, jobs, commands, install-deps, image (+29 more)

### Community 3 - "App Shell & Session Views"
Cohesion: 0.14
Nodes (23): WeekStrip Behaviour Spec, @testing-library/user-event@^14.6.1, @testing-library/user-event, App(), REST_PERIODS, RestPeriods(), Props, RestView() (+15 more)

### Community 4 - "Weight Calc & Unit Flow"
Cohesion: 0.16
Nodes (18): ExerciseCard Behaviour Spec, SetTable Behaviour Spec, Weight Utility (src/utils/weight.ts), README Notes (lbs default, weight.ts, no persistence), ExerciseCard(), Props, SETS_BY_TIER, SetTable() (+10 more)

### Community 5 - "AGENTS.md App Spec Concepts"
Cohesion: 0.07
Nodes (35): calcSetWeight(), CircleCI Pipeline (lint, test, sonar-scan, build), convertWeight(), Per-theme CSS Custom Properties (_variables.scss), ESLint Flat Config (eslint-config-prettier last), ExerciseCard component, Husky + lint-staged Git Hooks, Mobile-first Military Dossier Aesthetic (+27 more)

### Community 6 - "TypeScript Compiler Config"
Cohesion: 0.10
Nodes (20): compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules, jsx, lib, module, moduleResolution (+12 more)

### Community 8 - "setTimeout"
Cohesion: 0.07
Nodes (35): abort(), abortOnCannotGrowMemory(), allocate(), assert(), demangle(), demangleAll(), enlargeMemory(), [g6]() (+27 more)

### Community 9 - "package.json"
Cohesion: 0.04
Nodes (63): description, devDependencies, autoprefixer@^10.4.20, eslint@^10.6.0, eslint-config-prettier@^10.1.8, @eslint/js@^10.0.1, eslint-plugin-react@^7.37.5, eslint-plugin-react-hooks@^7.1.1 (+55 more)

### Community 10 - "Q6e"
Cohesion: 0.10
Nodes (49): Mg(), p2(), Po(), Q6e(), as(), Bf(), bh(), Bt() (+41 more)

### Community 11 - "npm Scripts"
Cohesion: 0.15
Nodes (13): scripts, build, dev, format, format:check, lint, lint:fix, prepare (+5 more)

### Community 12 - "Theme System & index.html"
Cohesion: 0.17
Nodes (14): Per-theme CSS Custom Properties (_variables.scss), index.html Spec, Theme System (system / light / dark), ThemeContext Spec, TierBadge Behaviour Spec, Typography: Bebas Neue + Inter, Unit Conversion Rules (lbs<->kg), UnitContext Spec (+6 more)

### Community 13 - "Node tsconfig"
Cohesion: 0.20
Nodes (9): compilerOptions, allowSyntheticDefaultImports, composite, module, moduleResolution, skipLibCheck, strict, types (+1 more)

### Community 14 - "lj"
Cohesion: 0.07
Nodes (28): Bi(), DB(), dOe(), GB(), getLimit(), getSpecial(), getSubprocessStreams(), gI() (+20 more)

### Community 15 - "Prettier Settings"
Cohesion: 0.29
Nodes (6): endOfLine, printWidth, semi, singleQuote, tabWidth, trailingComma

### Community 16 - "za"
Cohesion: 0.09
Nodes (23): a7e(), Ac(), Dh(), Ee(), [Hc](), Hy(), [lR](), Ly() (+15 more)

### Community 17 - "Kk"
Cohesion: 0.19
Nodes (14): Ad(), C4(), eLe(), fd(), KE(), Kk(), OKe(), pd() (+6 more)

### Community 18 - "b"
Cohesion: 0.12
Nodes (47): $1(), _6e(), B2(), bs(), d2(), df(), e2(), Ea() (+39 more)

### Community 19 - "Favicon Artwork"
Cohesion: 0.67
Nodes (3): Vita Ray Favicon (lightning bolt app icon), Dark Rounded Square Background (#0A0A0A), Lightning Bolt Glyph (#85B7EB)

### Community 20 - "emit"
Cohesion: 0.07
Nodes (28): [Ah](), [aR](), destroy(), [ehe](), emit(), [HI](), [Kj](), [kN]() (+20 more)

### Community 21 - "Wr"
Cohesion: 0.12
Nodes (40): a$(), aqe(), c_(), DE(), dM(), eqe(), Er(), f$() (+32 more)

### Community 22 - "execute"
Cohesion: 0.09
Nodes (23): BL(), D5(), Dot(), dSt(), execute(), executeProxy(), executeRegular(), executeUpRecursive() (+15 more)

### Community 23 - "mapToBase"
Cohesion: 0.15
Nodes (33): accessPromise(), accessSync(), chmodPromise(), chownPromise(), chownSync(), copyFilePromise(), d6e(), existsPromise() (+25 more)

### Community 24 - "constructor"
Cohesion: 0.06
Nodes (37): applyChanges(), c1t(), _checkIterableAdaptar(), clear(), componentWillUnmount(), constructor(), cursorHide(), cursorShow() (+29 more)

### Community 25 - "getCandidates"
Cohesion: 0.07
Nodes (34): _5(), bindDescriptor(), bJ(), cloneFromRemote(), Fae(), fetchFromDisk(), generatePackage(), getCandidates() (+26 more)

### Community 26 - "K6e"
Cohesion: 0.21
Nodes (10): b0(), K6e(), be(), d(), Fe(), it(), ke(), tt() (+2 more)

### Community 27 - "KVe"
Cohesion: 0.08
Nodes (35): addWorkspace(), anchoredPackage(), _B(), vs(), check(), [_d](), ece(), fE() (+27 more)

### Community 31 - "B9e"
Cohesion: 0.10
Nodes (37): B9e(), _A(), Ac(), at(), da(), dc(), $e(), fc() (+29 more)

### Community 32 - "Bw"
Cohesion: 0.08
Nodes (29): B9(), Bdt(), Bw(), Cdt(), Cgt(), Ddt(), Edt(), fetchFromNetwork() (+21 more)

### Community 33 - "make"
Cohesion: 0.16
Nodes (15): adjascentGlobstarOptimize(), braceExpand(), debug(), firstPhasePreProcess(), levelOneOptimize(), levelTwoFileOptimize(), make(), match() (+7 more)

### Community 34 - "hc"
Cohesion: 0.11
Nodes (30): hc(), compile(), CP(), cqe(), Do(), FA(), at(), is() (+22 more)

### Community 35 - "Ol"
Cohesion: 0.10
Nodes (32): Gi(), Li(), bf(), Bt(), cRe(), dU(), eh(), evt() (+24 more)

### Community 36 - "pa"
Cohesion: 0.40
Nodes (4): vi(), OA(), pa(), Ll()

### Community 37 - "_getEntry"
Cohesion: 0.40
Nodes (5): _getEntry(), _getFullEntryPath(), _getStat(), _makeEntry(), static()

### Community 38 - "Gt"
Cohesion: 0.10
Nodes (28): Ade(), cacheCleanup(), fde(), fetchEverything(), generateLockfile(), Gt(), HB(), I0() (+20 more)

### Community 39 - "jit"
Cohesion: 0.14
Nodes (18): As(), Bd(), computeCandidateName(), fze(), Hht(), jht(), jit(), MB() (+10 more)

### Community 40 - "validateAndExecute"
Cohesion: 0.22
Nodes (9): eFe(), Ff(), K2(), L0(), Lx(), validateAndExecute(), wqe(), zLe() (+1 more)

### Community 41 - "r"
Cohesion: 0.07
Nodes (27): Bst(), [dhe](), fetchNextAnswer(), getIdentityToken(), getToken(), hgt(), [hhe](), jC() (+19 more)

### Community 42 - "qn"
Cohesion: 0.10
Nodes (16): collect(), _dump(), G2e(), GW(), K0t(), mFe(), on(), promise() (+8 more)

### Community 43 - "Nr"
Cohesion: 0.10
Nodes (40): _5e(), BE(), BM(), bx(), cs(), cte(), cUe(), dx() (+32 more)

### Community 44 - ".write"
Cohesion: 0.08
Nodes (25): a0t(), add(), [b6](), [bv](), [D6](), [E6](), end(), flush() (+17 more)

### Community 45 - "s"
Cohesion: 0.07
Nodes (34): a6e(), c6e(), copyPromise(), _createCacheableRequest(), dynamic(), e5e(), Ew(), f6e() (+26 more)

### Community 46 - "Rr"
Cohesion: 0.09
Nodes (23): d3e(), dFe(), gFe(), gTe(), h3e(), hFe(), hTe(), i_e() (+15 more)

### Community 47 - "getSession"
Cohesion: 0.12
Nodes (13): Art(), De(), dae(), DT(), _Ge(), getSession(), Hdt(), normalizeOptions() (+5 more)

### Community 48 - "Ln"
Cohesion: 0.09
Nodes (5): _0(), cWe(), Ln(), lWe(), uWe()

### Community 49 - "cxe"
Cohesion: 0.22
Nodes (9): AXe(), Bxe(), cxe(), fXe(), iz(), lxe(), uXe(), wQ() (+1 more)

### Community 50 - "Yo"
Cohesion: 0.12
Nodes (27): checksumFilePromise(), closePromise(), closeSync(), createReadStream(), createWriteStream(), fchmodPromise(), fchmodSync(), fchownPromise() (+19 more)

### Community 51 - "maxAge"
Cohesion: 0.12
Nodes (24): AGe(), _ageValue(), _allowsStoringAuthenticated(), _assertRequestHasHeaders(), _copyWithoutHopByHopHeaders(), date(), g$e(), _hasExplicitExpiration() (+16 more)

### Community 52 - "alert"
Cohesion: 0.16
Nodes (24): alert(), append(), backward(), complete(), cutForward(), cutLeft(), delete(), deleteForward() (+16 more)

### Community 53 - "c"
Cohesion: 0.11
Nodes (16): au(), c(), Dy(), Et(), Gy(), HL(), jL(), $l() (+8 more)

### Community 54 - "V"
Cohesion: 0.20
Nodes (31): fo(), hP(), If(), In(), jA(), kh(), Mo(), Ro() (+23 more)

### Community 55 - "bn"
Cohesion: 0.10
Nodes (24): a0(), are(), bn(), br(), d4e(), FPe(), g4e(), h4e() (+16 more)

### Community 56 - "us"
Cohesion: 0.28
Nodes (9): Al(), AP(), findFolderRcFile(), findRcFiles(), k9e(), Rot(), uj(), updateConfiguration() (+1 more)

### Community 57 - "n"
Cohesion: 0.08
Nodes (34): ask(), b6e(), bit(), bot(), dme(), firstHook(), fSe(), Gae() (+26 more)

### Community 58 - "Uh"
Cohesion: 0.21
Nodes (9): ake(), g8e(), _h(), Hh(), m8e(), n8e(), pke(), Uh() (+1 more)

### Community 59 - "render"
Cohesion: 0.13
Nodes (20): altDown(), altUp(), cancel(), close(), completion(), element(), first(), footer() (+12 more)

### Community 60 - "writeFileSync"
Cohesion: 0.18
Nodes (17): appendFilePromise(), appendFileSync(), changeFileBufferPromise(), changeFileBufferSync(), changeFilePromise(), changeFileSync(), changeFileTextPromise(), changeFileTextSync() (+9 more)

### Community 61 - "reportInfo"
Cohesion: 0.15
Nodes (26): clearProgress(), commit(), createStreamReporter(), eI(), finalize(), formatIndent(), formatName(), formatNameWithHyperlink() (+18 more)

### Community 62 - "a8e"
Cohesion: 0.13
Nodes (15): _4e(), a8e(), c4e(), c8e(), e3e(), f8e(), i8e(), j4e() (+7 more)

### Community 63 - "cX"
Cohesion: 0.22
Nodes (11): cX(), e_e(), jM(), jMe(), jP(), oMe(), Q3e(), QX() (+3 more)

### Community 64 - "fm"
Cohesion: 0.14
Nodes (20): Av(), Cpe(), dpe(), Epe(), Fj(), fm(), frt(), FT() (+12 more)

### Community 65 - "toJSON"
Cohesion: 0.07
Nodes (31): b1t(), commitBuffer(), concat(), cyt(), d1t(), dV(), e0t(), E2e() (+23 more)

### Community 66 - "yl"
Cohesion: 0.21
Nodes (12): Ape(), downloadBytes(), downloadFile(), downloadHosted(), fetch(), getFetcher(), getLocalPath(), getWorkspace() (+4 more)

### Community 67 - "v"
Cohesion: 0.18
Nodes (22): a2(), Bu(), [cA](), da(), Eu(), HA(), KL(), kP() (+14 more)

### Community 68 - "ExerciseCard.test.tsx"
Cohesion: 0.20
Nodes (12): exercise, t3Exercise, Wrapper(), Wrapper(), Wrapper(), Wrapper(), UnitToggle(), UnitContext (+4 more)

### Community 69 - "cM"
Cohesion: 0.33
Nodes (6): cM(), JXe(), mxe(), oxe(), sz(), yxe()

### Community 70 - "Ut"
Cohesion: 0.18
Nodes (25): Ao(), Bat(), bh(), componentDidCatch(), dP(), En(), ep(), h0() (+17 more)

### Community 71 - "_x"
Cohesion: 0.18
Nodes (18): c9e(), E9e(), hre(), I9e(), J2(), Kf(), od(), q9e() (+10 more)

### Community 72 - "jy"
Cohesion: 0.06
Nodes (44): Ame(), aUe(), c_e(), cMe(), d8e(), fTe(), Gh(), h8e() (+36 more)

### Community 73 - "run"
Cohesion: 0.21
Nodes (14): createWorker(), definition(), definitions(), error(), format(), getUsageByIndex(), getUsageByRegistration(), inc() (+6 more)

### Community 74 - "c3e"
Cohesion: 0.14
Nodes (14): _3e(), a3e(), B3e(), c3e(), e8e(), f3e(), j3e(), l3e() (+6 more)

### Community 75 - "renderChoice"
Cohesion: 0.19
Nodes (14): choiceMessage(), choiceSeparator(), getResolverByLocator(), indent(), indicator(), onChoice(), renderChoice(), renderChoices() (+6 more)

### Community 76 - "tNe"
Cohesion: 0.06
Nodes (37): aFe(), BFe(), cFe(), cNe(), eNe(), fFe(), fNe(), g3e() (+29 more)

### Community 77 - "makeCallSync"
Cohesion: 0.12
Nodes (29): chmodSync(), copySync(), deleteEntry(), ert(), existsSync(), findMount(), getUnixMode(), lstatSync() (+21 more)

### Community 78 - "Hr"
Cohesion: 0.15
Nodes (13): _8e(), Aa(), Bz(), [Em](), Hr(), [mm](), nM(), rHe() (+5 more)

### Community 79 - "lM"
Cohesion: 0.29
Nodes (7): aX(), ixe(), KXe(), lM(), nz(), Qxe(), vHe()

### Community 80 - "tke"
Cohesion: 0.10
Nodes (22): az(), cke(), eke(), eOe(), fke(), fz(), ike(), lke() (+14 more)

### Community 81 - "vqe"
Cohesion: 0.60
Nodes (5): Bqe(), Hx(), pl(), vqe(), yM()

### Community 82 - "r"
Cohesion: 0.08
Nodes (25): $9e(), addOrCreate(), B0t(), cD(), command(), commands(), createConnection(), d8() (+17 more)

### Community 83 - "getFileSource"
Cohesion: 0.17
Nodes (15): addDirectory(), allocateBuffer(), allocateSource(), allocateUnattachedSource(), copyFileSync(), getExternalAttributes(), hydrateDirectory(), makeLibzipError() (+7 more)

### Community 84 - "zA"
Cohesion: 0.16
Nodes (16): co(), LU(), mt(), OU(), No(), Ol(), Ph(), $r() (+8 more)

### Community 85 - "u0"
Cohesion: 0.20
Nodes (10): BLe(), BMe(), Cle(), fX(), i4e(), kMe(), s4e(), u0() (+2 more)

### Community 86 - "_filter"
Cohesion: 0.12
Nodes (16): _createIndexRecord(), _filter(), _getEntryLevel(), getFilter(), _getMatcher(), _getNegativePatternsRe(), _isDuplicateEntry(), _isMatchToPatterns() (+8 more)

### Community 87 - "zme"
Cohesion: 0.12
Nodes (16): cye(), dlt(), eye(), F9(), iye(), llt(), lye(), N9() (+8 more)

### Community 88 - "renovate.json"
Cohesion: 0.10
Nodes (19): config:recommended, :configMigration, :maintainLockFilesWeekly, schedule:earlyMondays, :semanticCommits, extends, internalChecksFilter, labels (+11 more)

### Community 89 - "resolveFilename"
Cohesion: 0.27
Nodes (13): getFileSource(), getRealPath(), isSymbolicLink(), mapFromBase(), prepareReadlink(), readFileBuffer(), readlinkPromise(), readlinkSync() (+5 more)

### Community 90 - "CF"
Cohesion: 0.19
Nodes (14): c3(), CF(), dze(), EF(), Eq(), h3(), hze(), Iq() (+6 more)

### Community 91 - "u4e"
Cohesion: 0.13
Nodes (15): dxe(), ez(), f4e(), gxe(), hxe(), k_e(), n4e(), Q_e() (+7 more)

### Community 92 - "mme"
Cohesion: 0.16
Nodes (13): a9(), Bo(), c9(), Eme(), gme(), hme(), mme(), p() (+5 more)

### Community 93 - "h9e"
Cohesion: 0.22
Nodes (14): A9e(), bte(), d9e(), f(), Dte(), f9e(), h9e(), JU() (+6 more)

### Community 94 - "eOe"
Cohesion: 0.13
Nodes (18): aNe(), Bre(), Dn(), dNe(), gNe(), hNe(), kNe(), nTe() (+10 more)

### Community 95 - "txe"
Cohesion: 0.20
Nodes (12): C0e(), eXe(), Kot(), mNe(), nxe(), oM(), pz(), rxe() (+4 more)

### Community 96 - "fromJSON"
Cohesion: 0.14
Nodes (14): Eg(), eve(), fromJSON(), g1t(), gyt(), iy(), m1t(), N1t() (+6 more)

### Community 97 - ".pipe"
Cohesion: 0.18
Nodes (10): C(), j0t(), Jdt(), K2e(), Kdt(), pipe(), unpipe(), V0t() (+2 more)

### Community 98 - "_makeRequest"
Cohesion: 0.26
Nodes (12): _beforeError(), _error(), _finalizeBody(), _lockWrite(), _makeRequest(), _onRequest(), _onResponse(), _onResponseBase() (+4 more)

### Community 99 - "i1e"
Cohesion: 0.07
Nodes (35): aW(), B1e(), E1e(), Fdt(), finalizeInstall(), finalizeInstallWithPnp(), findInstallState(), findPackageLocation() (+27 more)

### Community 100 - "nD"
Cohesion: 0.38
Nodes (7): jgt(), nD(), vgt(), w2e(), Xgt(), y2e(), zgt()

### Community 101 - "read"
Cohesion: 0.20
Nodes (12): api(), _emitEntry(), _getReaderOptions(), _getRootDirectory(), _handleDirectory(), _handleEntry(), _handleError(), _handleQueue() (+4 more)

### Community 102 - "vc"
Cohesion: 0.18
Nodes (11): Gje(), Kje(), mle(), nMe(), qje(), vc(), Vje(), Wje() (+3 more)

### Community 103 - "buildCallerFunction"
Cohesion: 0.24
Nodes (10): anyNeedsWireRead(), anyNeedsWireWrite(), buildCallerFunction(), buildJSCallerFunction(), makeArgList(), makeCaller(), makeJSCaller(), makeMethodCaller() (+2 more)

### Community 104 - "verify"
Cohesion: 0.18
Nodes (11): buildPaths(), checkPath(), findIssuer(), sort(), verify(), verifyMessageDigest(), verifyPolicy(), verifySignature() (+3 more)

### Community 105 - "find"
Cohesion: 0.20
Nodes (11): choices(), enable(), find(), findIndex(), focus(), initialize(), map(), reset() (+3 more)

### Community 106 - "Ia"
Cohesion: 0.29
Nodes (5): copyIn(), Ia(), Qmt(), _read(), rmt()

### Community 107 - "ace"
Cohesion: 0.20
Nodes (3): ace(), U(), x()

### Community 108 - "fetchPackageFromCache"
Cohesion: 0.08
Nodes (31): aZe(), cze(), dI(), ensureVirtualLink(), F8(), fetchPackageFromCache(), FQ(), getChecksumFilename() (+23 more)

### Community 109 - "isDisabled"
Cohesion: 0.31
Nodes (11): down(), isDisabled(), pageDown(), pageUp(), scrollDown(), scrollUp(), selectable(), shiftDown() (+3 more)

### Community 110 - "n2t"
Cohesion: 0.22
Nodes (5): n2t(), f(), n(), r(), s()

### Community 111 - "ide"
Cohesion: 0.40
Nodes (6): aG(), Dit(), ide(), nde(), Nit(), vit()

### Community 112 - "submit"
Cohesion: 0.24
Nodes (9): cast(), hint(), isFalse(), isTrue(), isValue(), submit(), toNumber(), validate() (+1 more)

### Community 113 - "process"
Cohesion: 0.15
Nodes (13): createEnvironment(), createSession(), Fat(), genEnforcedDependencies(), genEnforcedFields(), lookup(), _lookup(), lookupAsync() (+5 more)

### Community 114 - "Tp"
Cohesion: 0.24
Nodes (10): cz(), dke(), HKe(), loadUserConfig(), mke(), qae(), Tp(), xke() (+2 more)

### Community 115 - "zje"
Cohesion: 0.31
Nodes (10): DZ(), vle(), zje(), f(), h(), p(), S(), x() (+2 more)

### Community 116 - "Fp"
Cohesion: 0.31
Nodes (9): forgetVirtualResolutions(), Fp(), getWorkspaceByDescriptor(), $k(), NB(), oi(), QB(), tryWorkspaceByDescriptor() (+1 more)

### Community 117 - "aI"
Cohesion: 0.18
Nodes (11): aI(), cI(), getPackageExtensions(), getWorkspaceByIdent(), getWorkspaceByLocator(), k4(), triggerHook(), triggerMultipleHooks() (+3 more)

### Community 118 - "setTimeout"
Cohesion: 0.23
Nodes (16): _emscripten_get_now(), _emscripten_set_main_loop(), _emscripten_set_main_loop_timing(), setTimeout(), sweep(), tlt(), toggleLightGC(), Wut() (+8 more)

### Community 119 - "crt"
Cohesion: 0.20
Nodes (10): aj(), am(), commitTips(), crt(), dj(), Ej(), gj(), qu() (+2 more)

### Community 120 - "Ch"
Cohesion: 0.32
Nodes (4): Ch(), _flush(), nmt(), z2e()

### Community 121 - "BP"
Cohesion: 0.14
Nodes (24): BP(), by(), C2(), Ct(), dc(), at(), Ds(), f2() (+16 more)

### Community 122 - "makeBound"
Cohesion: 0.25
Nodes (7): __decorate(), _defineHidden(), disableMember(), __extends(), makeBound(), a(), _nbind_value()

### Community 123 - "lOe"
Cohesion: 0.17
Nodes (12): aOe(), BOe(), cOe(), fOe(), iOe(), lOe(), nOe(), oOe() (+4 more)

### Community 124 - "fn"
Cohesion: 0.10
Nodes (26): accepts(), B8(), C8(), _ce(), el(), ensureDependencyMeta(), ensurePeerDependencyMeta(), Ex() (+18 more)

### Community 125 - "s9"
Cohesion: 0.25
Nodes (5): fme(), Pat(), s9(), a(), xat()

### Community 126 - "refresh"
Cohesion: 0.39
Nodes (9): getTargetInfo(), loadLocalMetadata(), loadRoot(), loadSnapshot(), loadTargets(), loadTimestamp(), persistMetadata(), preorderDepthFirstWalk() (+1 more)

### Community 127 - "once"
Cohesion: 0.24
Nodes (9): H2e(), [k6](), off(), once(), qW(), removeListener(), [Symbol.asyncIterator](), [Symbol.iterator]() (+1 more)

### Community 128 - "fmt"
Cohesion: 0.25
Nodes (8): amt(), cmt(), fmt(), imt(), kBe(), lmt(), rBe(), umt()

### Community 129 - "hG"
Cohesion: 0.29
Nodes (7): Cde(), dG(), hG(), Hit(), _it(), Oit(), Uit()

### Community 130 - "findExtension"
Cohesion: 0.25
Nodes (8): extAuthorityKeyID(), extBasicConstraints(), extension(), extKeyUsage(), extSCT(), extSubjectAltName(), extSubjectKeyID(), findExtension()

### Community 131 - "L1"
Cohesion: 0.20
Nodes (8): dd(), getSupportedArchitectures(), L1(), Ntt(), RSt(), rv(), sj(), tSt()

### Community 132 - "installPackage"
Cohesion: 0.29
Nodes (8): installPackage(), installPackageHard(), installPackageSoft(), ldt(), registerPackageMapNode(), shouldBeUnplugged(), unplugPackage(), unplugPackageIfNeeded()

### Community 133 - "isUniversal"
Cohesion: 0.25
Nodes (8): isBitString(), isBoolean(), isGeneralizedTime(), isInteger(), isOctetString(), isOID(), isUniversal(), isUTCTime()

### Community 134 - "aF"
Cohesion: 0.29
Nodes (7): $9(), aF(), eut(), K9(), oF(), rut(), tut()

### Community 135 - "tU"
Cohesion: 0.33
Nodes (7): [Ahe](), BHe(), [Ru](), _s(), [she](), tU(), wHe()

### Community 136 - "aLe"
Cohesion: 0.29
Nodes (7): aLe(), fLe(), iLe(), lLe(), oLe(), sLe(), uLe()

### Community 137 - "C7e"
Cohesion: 0.29
Nodes (7): B7e(), C7e(), Hse(), jse(), Mse(), v7e(), w7e()

### Community 138 - "hd"
Cohesion: 0.24
Nodes (10): cwt(), h4(), hbe(), hd(), HE(), kc(), L7(), lae() (+2 more)

### Community 139 - "DL"
Cohesion: 0.50
Nodes (4): DL(), Fg(), supportsLocator(), tryResolverByLocator()

### Community 140 - "c0"
Cohesion: 0.25
Nodes (9): B4e(), c0(), i3e(), k4e(), n3e(), s3e(), w4e(), x4e() (+1 more)

### Community 141 - "t3"
Cohesion: 0.33
Nodes (7): i3(), lze(), n3(), r3(), t3(), xle(), y3()

### Community 142 - "reportValue"
Cohesion: 0.29
Nodes (7): reportCommandName(), reportDependencyCount(), reportPackageExtension(), reportPluginName(), reportValue(), reportVersion(), reportWorkspaceCount()

### Community 143 - "xI"
Cohesion: 0.18
Nodes (16): activatePlugin(), Brt(), gpe(), gx(), hj(), HT(), importSettings(), jpe() (+8 more)

### Community 144 - "ensureCapacity"
Cohesion: 0.33
Nodes (6): appendChar(), appendUint16(), appendUint24(), appendView(), ensureCapacity(), realloc()

### Community 145 - "uBt"
Cohesion: 0.33
Nodes (6): _Bt(), fBt(), HBt(), jBt(), uBt(), zBt()

### Community 146 - "Egt"
Cohesion: 0.67
Nodes (3): c2e(), Egt(), wW()

### Community 147 - "Pue"
Cohesion: 0.33
Nodes (6): dUe(), gUe(), hUe(), jUe(), Pue(), zUe()

### Community 148 - "xUe"
Cohesion: 0.33
Nodes (6): iUe(), kUe(), nUe(), QUe(), wUe(), xUe()

### Community 149 - "_E"
Cohesion: 0.22
Nodes (9): Bq(), CB(), _E(), e4e(), IB(), pgt(), Q4e(), t4e() (+1 more)

### Community 150 - "s_e"
Cohesion: 0.40
Nodes (5): a_e(), d_e(), l_e(), o_e(), s_e()

### Community 151 - "toChoice"
Cohesion: 0.29
Nodes (7): addChoice(), hot(), isChoice(), isSelected(), newItem(), toChoice(), toChoices()

### Community 152 - "makeInterval"
Cohesion: 0.40
Nodes (5): addListener(), makeInterval(), nx(), registerChangeListener(), stat()

### Community 153 - "aQ"
Cohesion: 0.40
Nodes (5): aQ(), dle(), fJe(), LJe(), OJe()

### Community 154 - "aSt"
Cohesion: 0.40
Nodes (5): aSt(), cst(), F1(), oSt(), sSt()

### Community 155 - "an"
Cohesion: 0.10
Nodes (20): an(), B_e(), BNe(), createCacheableRequest(), dqe(), dre(), fH(), fRe() (+12 more)

### Community 156 - "checkFinalSnapsnot"
Cohesion: 0.40
Nodes (5): checkFinalSnapsnot(), checkFinalTimestamp(), updateDelegatedTargets(), updateSnapshot(), updateTimestamp()

### Community 157 - "Kae"
Cohesion: 0.40
Nodes (5): D4(), Kae(), KKe(), P4(), wae()

### Community 158 - "eo"
Cohesion: 0.33
Nodes (6): eo(), Ime(), kat(), s(), yme(), a()

### Community 159 - "get"
Cohesion: 0.33
Nodes (6): get(), _getKeyPrefix(), _getKeyPrefixArray(), has(), _set(), _tick()

### Community 160 - "W0e"
Cohesion: 0.40
Nodes (5): fc(), O5(), oat(), W0e(), Y0e()

### Community 161 - "BB"
Cohesion: 0.33
Nodes (6): b4(), BB(), iae(), oae(), Sk(), wB()

### Community 162 - "rCt"
Cohesion: 0.40
Nodes (5): iCt(), nCt(), oCt(), rCt(), sCt()

### Community 163 - "p2t"
Cohesion: 0.50
Nodes (4): a2t(), k2t(), p2t(), x2t()

### Community 164 - "$at"
Cohesion: 0.50
Nodes (4): $at(), capture(), MCe(), parseLine()

### Community 165 - "attachInternalDependencies"
Cohesion: 0.50
Nodes (4): attachInternalDependencies(), getPackageInformation(), registerPackageMapDependency(), _St()

### Community 166 - "BGe"
Cohesion: 0.50
Nodes (4): BGe(), CGe(), IGe(), wGe()

### Community 167 - "lve"
Cohesion: 0.50
Nodes (4): byt(), lve(), Syt(), vyt()

### Community 168 - "getTypes"
Cohesion: 0.50
Nodes (4): constructType(), getType(), getTypes(), queryType()

### Community 169 - "x"
Cohesion: 0.32
Nodes (8): Fit(), ct(), je(), Qe(), Se(), Te(), Rit(), x()

### Community 170 - "dBt"
Cohesion: 0.50
Nodes (4): dBt(), gBt(), hDe(), pDe()

### Community 171 - "forgetTransientResolutions"
Cohesion: 0.67
Nodes (4): deleteDescriptor(), deleteLocator(), forgetResolution(), forgetTransientResolutions()

### Community 172 - "ov"
Cohesion: 0.50
Nodes (4): FBe(), ov(), rrt(), trt()

### Community 173 - "OB"
Cohesion: 0.50
Nodes (4): Fce(), OB(), preparePackage(), XE()

### Community 174 - "findGeneralName"
Cohesion: 0.50
Nodes (4): findGeneralName(), otherName(), rfc822Name(), uri()

### Community 175 - "fullSource"
Cohesion: 0.50
Nodes (4): fullSource(), getDeclarations(), getProjectDatabase(), zd()

### Community 176 - "Zwe"
Cohesion: 0.50
Nodes (4): Lht(), Mht(), Oht(), Zwe()

### Community 177 - "Uct"
Cohesion: 0.67
Nodes (3): ACt(), fCt(), Uct()

### Community 178 - "addRest"
Cohesion: 0.67
Nodes (3): addPositional(), addProxy(), addRest()

### Community 179 - "fgt"
Cohesion: 0.67
Nodes (3): Agt(), fgt(), s2e()

### Community 180 - "awt"
Cohesion: 0.67
Nodes (3): awt(), owt(), swt()

### Community 181 - "Bve"
Cohesion: 0.67
Nodes (3): Bve(), Cve(), parseBuffer()

### Community 182 - "cat"
Cohesion: 0.67
Nodes (3): cat(), X0e(), z0e()

### Community 183 - "cbt"
Cohesion: 0.67
Nodes (3): cbt(), Ibt(), mbt()

### Community 184 - "compare"
Cohesion: 0.67
Nodes (3): compare(), compareMain(), comparePre()

### Community 185 - "create"
Cohesion: 0.67
Nodes (3): create(), package(), prepare()

### Community 186 - "lvt"
Cohesion: 0.67
Nodes (3): cvt(), lvt(), uvt()

### Community 187 - "h7e"
Cohesion: 0.67
Nodes (3): d7e(), h7e(), vse()

### Community 188 - "getBufferAndClose"
Cohesion: 0.48
Nodes (7): discardAndClose(), E0(), getBufferAndClose(), prepareClose(), saveAndClose(), unwatchFile(), y0()

### Community 189 - "generateTargetPath"
Cohesion: 0.67
Nodes (3): downloadTarget(), findCachedTarget(), generateTargetPath()

### Community 190 - "gvt"
Cohesion: 0.67
Nodes (3): dvt(), gvt(), mvt()

### Community 191 - "jBe"
Cohesion: 0.67
Nodes (3): dyt(), jBe(), toString()

### Community 192 - "e3"
Cohesion: 0.67
Nodes (3): e3(), MJe(), UJe()

### Community 193 - "encodeBody"
Cohesion: 0.67
Nodes (3): encode(), encodeBody(), encodeField()

### Community 194 - "eSt"
Cohesion: 0.67
Nodes (3): eSt(), KDe(), VDe()

### Community 195 - "a4e"
Cohesion: 0.33
Nodes (6): a4e(), h_e(), j_e(), o4e(), p4e(), sx()

### Community 196 - "fve"
Cohesion: 0.67
Nodes (3): fve(), Qyt(), Tyt()

### Community 197 - "fvt"
Cohesion: 0.67
Nodes (3): fvt(), Nvt(), Ovt()

### Community 198 - "getBlock"
Cohesion: 0.67
Nodes (3): getBlock(), getUint16(), getUint8()

### Community 199 - "getWorkspaceByCwd"
Cohesion: 0.67
Nodes (3): getWorkspaceByCwd(), topLevelWorkspace(), tryWorkspaceByCwd()

### Community 200 - "$oe"
Cohesion: 0.29
Nodes (7): Goe(), jOe(), $oe(), rX(), Wy(), x4(), Yoe()

### Community 201 - "hasDependency"
Cohesion: 0.67
Nodes (3): hasDependency(), hasHardDependency(), hasSoftDependency()

### Community 202 - "sbe"
Cohesion: 0.67
Nodes (3): ibe(), obe(), sbe()

### Community 203 - "z0"
Cohesion: 0.40
Nodes (6): applyLightResolution(), cae(), J0(), persistInstallStateFile(), restoreInstallState(), z0()

### Community 204 - "uve"
Cohesion: 0.67
Nodes (3): kyt(), Ryt(), uve()

### Community 205 - "p0t"
Cohesion: 0.67
Nodes (3): L2e(), p0t(), x0t()

### Community 206 - "reportHit"
Cohesion: 0.67
Nodes (3): L4(), reportHit(), reportInstall()

### Community 207 - "jze"
Cohesion: 0.40
Nodes (5): jze(), f(), h(), p(), Rc()

### Community 208 - "splice"
Cohesion: 0.67
Nodes (3): Mnt(), removeNode(), splice()

### Community 209 - "patchConsole"
Cohesion: 0.67
Nodes (3): patchConsole(), writeToStderr(), writeToStdout()

### Community 210 - "Q0t"
Cohesion: 1.00
Nodes (3): Q0t(), c(), f()

### Community 211 - "yCt"
Cohesion: 0.67
Nodes (3): testify(), WCt(), yCt()

### Community 214 - "startSectionPromise"
Cohesion: 0.33
Nodes (6): reportErrorOnce(), reportExceptionOnce(), startSectionPromise(), startSectionSync(), startTimerPromise(), startTimerSync()

### Community 215 - "hM"
Cohesion: 0.50
Nodes (5): hM(), hz(), jKe(), VKe(), zke()

### Community 220 - "a"
Cohesion: 0.60
Nodes (6): _typeModule(), a(), n(), p(), r(), s()

### Community 222 - "callRuntimeCallbacks"
Cohesion: 0.22
Nodes (11): addOnPostRun(), addOnPreRun(), callRuntimeCallbacks(), ensureInitRuntime(), exit(), exitRuntime(), ExitStatus(), postRun() (+3 more)

### Community 225 - "supports"
Cohesion: 0.67
Nodes (3): supports(), tryFetcher(), w9()

### Community 227 - "tS"
Cohesion: 0.18
Nodes (11): C5(), Cot(), d0e(), eS(), executeUpClassic(), g0e(), h0e(), I5() (+3 more)

### Community 233 - "JA"
Cohesion: 0.80
Nodes (5): Au(), Xa(), Ao(), Df(), JA()

### Community 236 - "XU"
Cohesion: 0.40
Nodes (5): ere(), nRe(), rre(), tRe(), XU()

### Community 239 - ".write"
Cohesion: 0.50
Nodes (3): Ggt(), kgt(), Qgt()

### Community 255 - "jje"
Cohesion: 0.50
Nodes (4): gle(), hle(), jje(), ple()

### Community 260 - "Mj"
Cohesion: 0.67
Nodes (3): bpe(), Mj(), pv()

### Community 264 - "c0t"
Cohesion: 0.67
Nodes (3): c0t(), NW(), o0t()

### Community 282 - "c"
Cohesion: 1.00
Nodes (3): d0t(), c(), f()

### Community 283 - "prev"
Cohesion: 0.67
Nodes (3): decrement(), prev(), save()

### Community 284 - "executeInteractive"
Cohesion: 0.67
Nodes (3): executeInteractive(), executeStandard(), j1()

### Community 285 - "limitOpenFiles"
Cohesion: 0.67
Nodes (3): getMountPromise(), getMountSync(), limitOpenFiles()

### Community 286 - "Got"
Cohesion: 0.67
Nodes (3): Got(), qot(), T5()

### Community 287 - "vst"
Cohesion: 1.00
Nodes (3): vst(), c(), f()

## Ambiguous Edges - Review These
- `index.html Spec` → `Favicon Link (/favicon.svg)`  [AMBIGUOUS]
  index.html · relation: conceptually_related_to

## Knowledge Gaps
- **16 isolated node(s):** `config:recommended`, `:configMigration`, `:maintainLockFilesWeekly`, `schedule:earlyMondays`, `:semanticCommits` (+11 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 821 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **64 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Q6e()` connect `Q6e` to `Ol`, `pa`, `yarn-4.17.0.cjs`, `JA`, `zA`, `BP`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Are the 67 inferred relationships involving `s()` (e.g. with `a6e()` and `a9()`) actually correct?**
  _`s()` has 67 INFERRED edges - model-reasoned connections that need verification._
- **What connects `config:recommended`, `:configMigration`, `:maintainLockFilesWeekly` to the rest of the system?**
  _16 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Component Tests & Theme Toggle` be split into smaller, more focused modules?**
  _Cohesion score 0.1349206349206349 - nodes in this community are weakly interconnected._
- **Why does `c()` connect `c` to `yarn-4.17.0.cjs`, `Q6e`, `lj`, `xI`, `b`, `Wr`, `execute`, `constructor`, `getCandidates`, `KVe`, `executeInteractive`, `kB`, `Bw`, `hc`, `Ol`, `BB`, `validateAndExecute`, `x`, `Nr`, `s`, `getSession`, `Yo`, `alert`, `V`, `n`, `render`, `fm`, `v`, `Ut`, `jy`, `renderChoice`, `Hr`, `jze`, `r`, `CF`, `h9e`, `.pipe`, `i1e`, `find`, `zje`, `setTimeout`, `BP`, `makeBound`, `once`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Are the 27 inferred relationships involving `c()` (e.g. with `a6e()` and `h()`) actually correct?**
  _`c()` has 27 INFERRED edges - model-reasoned connections that need verification._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `index.html Spec` and `Favicon Link (/favicon.svg)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._