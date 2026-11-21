# Graph Report - vita-ray  (2026-11-21)

## Corpus Check
- 50 files · ~82,585 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 12 file(s) not represented in the graph (top: (none) 6, .scss 4, .gz 1)

## Summary
- 3802 nodes · 9622 edges · 276 communities (214 shown, 62 thin omitted)
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 1064 edges (avg confidence: 0.85)
- Token cost: 217,213 input · 0 output

## Graph Freshness
- Built from commit: `fa358e55`
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
- b
- Kk
- Ut
- Favicon Artwork
- emit
- Wr
- execute
- mapToBase
- constructor
- getCandidates
- x
- KVe
- Vite Env Types
- Vercel Rewrites
- B9e
- Bw
- oc
- v
- Nl
- hc
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
- ne
- Ln
- an
- openPromise
- maxAge
- alert
- c
- V
- bn
- us
- p
- Uh
- render
- writeFileSync
- reportInfo
- a8e
- Hr
- fm
- Bi
- yl
- Vr
- ExerciseCard.test.tsx
- Dn
- Vl
- chmodSync
- jy
- run
- Ade
- renderChoice
- tNe
- copySync
- sFe
- lM
- tke
- vqe
- E
- getFileSource
- zA
- Ff
- _filter
- zme
- renovate.json
- Gh
- CF
- u4e
- mme
- h9e
- eOe
- txe
- fromJSON
- makeCallback
- _makeRequest
- i1e
- nD
- read
- vc
- buildCallerFunction
- verify
- find
- Ia
- jh
- fetchPackageFromCache
- isDisabled
- n2t
- ide
- submit
- process
- Tp
- zje
- Fp
- Hpe
- setTimeout
- u0
- .on
- o2
- makeBound
- lOe
- load
- s9
- refresh
- once
- fmt
- hG
- findExtension
- responseHeaders
- installPackage
- isUniversal
- aF
- tU
- aLe
- C7e
- hd
- DL
- Ame
- t3
- reportValue
- gpe
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
- Ste
- checkFinalSnapsnot
- Kae
- eo
- delete
- W0e
- BB
- rCt
- p2t
- $at
- attachInternalDependencies
- BGe
- lve
- getTypes
- dx
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
- lstatPromise
- generateTargetPath
- gvt
- jBe
- e3
- encodeBody
- eSt
- _fillStorage
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
- mE
- splice
- patchConsole
- Q0t
- yCt
- UU
- _2
- warn
- hM
- aee
- attachExternalDependents
- aye
- B8e
- toChoices
- buffer
- exit
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
- findSequenceMember
- fUe
- G6e
- genCommitMessage
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
- mve
- r0t
- __nbind_register_function
- nGe
- pop64
- push
- push64
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

## Communities (276 total, 62 thin omitted)

### Community 0 - "Component Tests & Theme Toggle"
Cohesion: 0.13
Nodes (17): dependencies, react@^19.0.0, react-dom@^19.0.0, react, react-dom, @testing-library/react, vitest, CYCLE (+9 more)

### Community 1 - "AGENTS.md Tooling & Standing Orders"
Cohesion: 0.08
Nodes (26): CircleCI Pipeline, ESLint Flat Config (ESLint 9), Git Hooks (Husky + lint-staged), Military Dossier Aesthetic (Mobile-first), Operation Vita Ray, @/ Path Alias, Prettier Config, Program Data (program.ts DAYS) - Single Source of Truth (+18 more)

### Community 2 - "CircleCI Pipeline Config"
Cohesion: 0.06
Nodes (39): at, docker, requires, steps, jobs, commands, install-deps, image (+31 more)

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
Cohesion: 0.08
Nodes (32): abort(), abortOnCannotGrowMemory(), allocate(), assert(), demangle(), demangleAll(), _emscripten_get_now(), _emscripten_set_main_loop() (+24 more)

### Community 9 - "package.json"
Cohesion: 0.04
Nodes (63): description, devDependencies, autoprefixer@^10.4.20, eslint@^10.6.0, eslint-config-prettier@^10.1.8, @eslint/js@^10.0.1, eslint-plugin-react@^7.37.5, eslint-plugin-react-hooks@^7.1.1 (+55 more)

### Community 10 - "Q6e"
Cohesion: 0.10
Nodes (46): mt(), Q6e(), Bf(), bh(), Bt(), Dh(), du(), Ea() (+38 more)

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
Nodes (37): activatePlugin(), cze(), DB(), dI(), dOe(), F8(), FQ(), GB() (+29 more)

### Community 15 - "Prettier Settings"
Cohesion: 0.29
Nodes (6): endOfLine, printWidth, semi, singleQuote, tabWidth, trailingComma

### Community 16 - "b"
Cohesion: 0.14
Nodes (25): a7e(), Ac(), Hy(), il(), $l(), ma(), Nn(), Np() (+17 more)

### Community 17 - "Kk"
Cohesion: 0.19
Nodes (13): Ad(), C4(), eLe(), fd(), KE(), Kk(), OKe(), pd() (+5 more)

### Community 18 - "Ut"
Cohesion: 0.09
Nodes (56): $1(), Ao(), Bat(), bh(), bs(), componentDidCatch(), d2(), df() (+48 more)

### Community 19 - "Favicon Artwork"
Cohesion: 0.67
Nodes (3): Vita Ray Favicon (lightning bolt app icon), Dark Rounded Square Background (#0A0A0A), Lightning Bolt Glyph (#85B7EB)

### Community 20 - "emit"
Cohesion: 0.07
Nodes (27): [Ah](), [aR](), [ehe](), emit(), [HI](), [Kj](), [kN](), [LBe]() (+19 more)

### Community 21 - "Wr"
Cohesion: 0.08
Nodes (59): a$(), aqe(), c_(), cqe(), DE(), dM(), eqe(), Er() (+51 more)

### Community 22 - "execute"
Cohesion: 0.08
Nodes (27): BL(), D5(), Dot(), dSt(), execute(), executeInteractive(), executeProxy(), executeStandard() (+19 more)

### Community 23 - "mapToBase"
Cohesion: 0.15
Nodes (34): accessPromise(), accessSync(), copyFilePromise(), copyFileSync(), d6e(), existsPromise(), existsSync(), findMount() (+26 more)

### Community 24 - "constructor"
Cohesion: 0.06
Nodes (36): applyChanges(), c1t(), _checkIterableAdaptar(), clear(), componentWillUnmount(), constructor(), cursorHide(), cursorShow() (+28 more)

### Community 25 - "getCandidates"
Cohesion: 0.12
Nodes (20): bindDescriptor(), bJ(), fetchFromDisk(), generatePackage(), getCandidates(), getResolutionDependencies(), getResolverByDescriptor(), getSatisfying() (+12 more)

### Community 26 - "x"
Cohesion: 0.06
Nodes (33): ace(), U(), x(), Art(), De(), b0(), dae(), Fit() (+25 more)

### Community 27 - "KVe"
Cohesion: 0.11
Nodes (25): addWorkspace(), anchoredPackage(), _B(), [_d](), ece(), fE(), G0(), $i() (+17 more)

### Community 31 - "B9e"
Cohesion: 0.14
Nodes (32): B9e(), _A(), Ac(), at(), da(), dc(), $e(), fc() (+24 more)

### Community 32 - "Bw"
Cohesion: 0.08
Nodes (28): B9(), Bdt(), Bw(), Cdt(), Cgt(), Ddt(), Edt(), fetchFromNetwork() (+20 more)

### Community 33 - "oc"
Cohesion: 0.07
Nodes (30): adjascentGlobstarOptimize(), braceExpand(), commitBuffer(), concat(), cyt(), debug(), dV(), e0t() (+22 more)

### Community 34 - "v"
Cohesion: 0.13
Nodes (28): Bu(), [cA](), CP(), da(), exportTo(), fHe(), gP(), Gy() (+20 more)

### Community 35 - "Nl"
Cohesion: 0.08
Nodes (43): Gi(), Ka(), Li(), Ya(), Bt(), C2(), cRe(), Ds() (+35 more)

### Community 36 - "hc"
Cohesion: 0.17
Nodes (20): au(), hc(), co(), Do(), FA(), at(), is(), mh() (+12 more)

### Community 37 - "_getEntry"
Cohesion: 0.40
Nodes (5): _getEntry(), _getFullEntryPath(), _getStat(), _makeEntry(), static()

### Community 38 - "Gt"
Cohesion: 0.11
Nodes (30): aI(), cacheCleanup(), cI(), fetchEverything(), generateLockfile(), getWorkspaceByLocator(), Gt(), HB() (+22 more)

### Community 39 - "jit"
Cohesion: 0.10
Nodes (28): As(), Bd(), C8(), commitTips(), computeCandidateName(), crt(), FB(), fze() (+20 more)

### Community 40 - "validateAndExecute"
Cohesion: 0.40
Nodes (5): K2(), L0(), Lx(), validateAndExecute(), zLe()

### Community 41 - "r"
Cohesion: 0.04
Nodes (51): $9e(), addOrCreate(), B0t(), Bst(), cD(), command(), commands(), createConnection() (+43 more)

### Community 42 - "qn"
Cohesion: 0.07
Nodes (24): _8e(), Aa(), C(), fu(), Va(), cc(), G2e(), GW() (+16 more)

### Community 43 - "Nr"
Cohesion: 0.18
Nodes (28): _5e(), BE(), bx(), cs(), cte(), Ete(), F5e(), fl() (+20 more)

### Community 44 - ".write"
Cohesion: 0.09
Nodes (24): a0t(), add(), [b6](), [bv](), [D6](), [E6](), end(), flush() (+16 more)

### Community 45 - "s"
Cohesion: 0.04
Nodes (66): a6e(), ask(), bit(), bot(), c0t(), c6e(), copyPromise(), _createCacheableRequest() (+58 more)

### Community 46 - "Rr"
Cohesion: 0.08
Nodes (27): _3e(), d3e(), dFe(), e8e(), gFe(), gTe(), h3e(), hFe() (+19 more)

### Community 47 - "ne"
Cohesion: 0.15
Nodes (10): DT(), Ee(), [Hc](), Hdt(), [lR](), Ly(), Os(), Tl() (+2 more)

### Community 48 - "Ln"
Cohesion: 0.09
Nodes (5): _0(), cWe(), Ln(), lWe(), uWe()

### Community 49 - "an"
Cohesion: 0.10
Nodes (22): an(), AXe(), B3e(), Bxe(), c3e(), cxe(), dqe(), dre() (+14 more)

### Community 50 - "openPromise"
Cohesion: 0.22
Nodes (13): checksumFilePromise(), closePromise(), closeSync(), createReadStream(), createWriteStream(), lockPromise(), openPromise(), openSync() (+5 more)

### Community 51 - "maxAge"
Cohesion: 0.21
Nodes (13): _assertRequestHasHeaders(), date(), g$e(), im(), maxAge(), oH(), revalidatedPolicy(), satisfiesWithoutRevalidation() (+5 more)

### Community 52 - "alert"
Cohesion: 0.19
Nodes (20): alert(), append(), backward(), cutForward(), cutLeft(), disable(), dispatch(), forward() (+12 more)

### Community 53 - "c"
Cohesion: 0.15
Nodes (13): bf(), c(), Dh(), En(), Eu(), MS(), My(), nj() (+5 more)

### Community 54 - "V"
Cohesion: 0.23
Nodes (27): BP(), ga(), hP(), If(), In(), jA(), kh(), Mo() (+19 more)

### Community 55 - "bn"
Cohesion: 0.10
Nodes (25): a0(), are(), bn(), br(), d4e(), FPe(), g4e(), h4e() (+17 more)

### Community 56 - "us"
Cohesion: 0.13
Nodes (17): Al(), AP(), bpe(), ere(), findFolderRcFile(), findRcFiles(), k9e(), Mj() (+9 more)

### Community 57 - "p"
Cohesion: 0.11
Nodes (23): destroy(), Gae(), gG(), gx(), h(), kHe(), kR(), mze() (+15 more)

### Community 58 - "Uh"
Cohesion: 0.12
Nodes (18): ake(), B4e(), c0(), g8e(), _h(), Hh(), i3e(), k4e() (+10 more)

### Community 59 - "render"
Cohesion: 0.13
Nodes (20): altDown(), altUp(), cancel(), close(), completion(), element(), error(), first() (+12 more)

### Community 60 - "writeFileSync"
Cohesion: 0.16
Nodes (19): appendFilePromise(), appendFileSync(), changeFileBufferPromise(), changeFileBufferSync(), changeFilePromise(), changeFileSync(), changeFileTextPromise(), changeFileTextSync() (+11 more)

### Community 61 - "reportInfo"
Cohesion: 0.14
Nodes (27): clearProgress(), commit(), createStreamReporter(), eI(), finalize(), formatIndent(), formatName(), formatNameWithHyperlink() (+19 more)

### Community 62 - "a8e"
Cohesion: 0.10
Nodes (21): _4e(), a4e(), a8e(), c4e(), c8e(), e3e(), f8e(), h_e() (+13 more)

### Community 63 - "Hr"
Cohesion: 0.14
Nodes (18): Bz(), cX(), e_e(), [Em](), Hr(), jM(), jP(), [mm]() (+10 more)

### Community 64 - "fm"
Cohesion: 0.14
Nodes (20): Av(), Cpe(), dpe(), Epe(), Fj(), fm(), frt(), FT() (+12 more)

### Community 65 - "Bi"
Cohesion: 0.06
Nodes (28): b1t(), Bi(), d1t(), getLimit(), getSpecial(), getSubprocessStreams(), getSupportedArchitectures(), h1t() (+20 more)

### Community 66 - "yl"
Cohesion: 0.11
Nodes (22): accepts(), Ape(), B8(), _ce(), downloadBytes(), downloadFile(), downloadHosted(), el() (+14 more)

### Community 67 - "Vr"
Cohesion: 0.19
Nodes (23): _6e(), a2(), B2(), by(), fo(), jL(), L2(), ne() (+15 more)

### Community 68 - "ExerciseCard.test.tsx"
Cohesion: 0.20
Nodes (12): exercise, t3Exercise, Wrapper(), Wrapper(), Wrapper(), Wrapper(), UnitToggle(), UnitContext (+4 more)

### Community 69 - "Dn"
Cohesion: 0.10
Nodes (22): a3e(), BM(), Bre(), cM(), Dn(), G5e(), JXe(), kte() (+14 more)

### Community 70 - "Vl"
Cohesion: 0.29
Nodes (10): compile(), gc(), n0(), registerOptions(), Sa(), UL(), Vl(), xqe() (+2 more)

### Community 71 - "chmodSync"
Cohesion: 0.17
Nodes (16): ert(), hydrateDirectory(), mkdirpPromise(), mkdirPromise(), mkdirpSync(), mkdirSync(), mktempPromise(), mktempSync() (+8 more)

### Community 72 - "jy"
Cohesion: 0.22
Nodes (18): jy(), be(), ce(), d(), fe(), ge(), I(), ie() (+10 more)

### Community 73 - "run"
Cohesion: 0.13
Nodes (22): addOnPostRun(), addOnPreRun(), callRuntimeCallbacks(), createWorker(), definition(), definitions(), ensureInitRuntime(), format() (+14 more)

### Community 74 - "Ade"
Cohesion: 0.40
Nodes (5): Ade(), fde(), kit(), ude(), X0()

### Community 75 - "renderChoice"
Cohesion: 0.18
Nodes (15): choiceMessage(), choiceSeparator(), getResolverByLocator(), indent(), indicator(), onChoice(), pointer(), renderChoice() (+7 more)

### Community 76 - "tNe"
Cohesion: 0.11
Nodes (19): cNe(), eNe(), fNe(), g3e(), iNe(), jFe(), jX(), kM() (+11 more)

### Community 77 - "copySync"
Cohesion: 0.16
Nodes (17): copySync(), deleteEntry(), movePromise(), moveSync(), readdirPromise(), readdirSync(), removePromise(), removeSync() (+9 more)

### Community 78 - "sFe"
Cohesion: 0.12
Nodes (17): aFe(), BFe(), cFe(), fFe(), iFe(), jz(), lFe(), nFe() (+9 more)

### Community 79 - "lM"
Cohesion: 0.29
Nodes (7): aX(), ixe(), KXe(), lM(), nz(), Qxe(), vHe()

### Community 80 - "tke"
Cohesion: 0.14
Nodes (17): az(), cke(), eke(), fke(), fz(), ike(), lke(), lz() (+9 more)

### Community 81 - "vqe"
Cohesion: 0.60
Nodes (5): Bqe(), Hx(), pl(), vqe(), yM()

### Community 82 - "E"
Cohesion: 0.09
Nodes (28): b6e(), B_e(), createCacheableRequest(), d8(), E(), fH(), getSession(), h8() (+20 more)

### Community 83 - "getFileSource"
Cohesion: 0.17
Nodes (16): addDirectory(), allocateBuffer(), allocateSource(), allocateUnattachedSource(), discardAndClose(), E0(), getBufferAndClose(), getExternalAttributes() (+8 more)

### Community 84 - "zA"
Cohesion: 0.22
Nodes (13): Au(), Xa(), Mg(), p2(), Ao(), Df(), gc(), JA() (+5 more)

### Community 85 - "Ff"
Cohesion: 0.22
Nodes (9): BMe(), eFe(), Ff(), fX(), kMe(), mRe(), wme(), wqe() (+1 more)

### Community 86 - "_filter"
Cohesion: 0.12
Nodes (16): _createIndexRecord(), _filter(), _getEntryLevel(), getFilter(), _getMatcher(), _getNegativePatternsRe(), _isDuplicateEntry(), _isMatchToPatterns() (+8 more)

### Community 87 - "zme"
Cohesion: 0.12
Nodes (16): cye(), dlt(), eye(), F9(), iye(), llt(), lye(), N9() (+8 more)

### Community 88 - "renovate.json"
Cohesion: 0.10
Nodes (19): config:recommended, :configMigration, :maintainLockFilesWeekly, schedule:earlyMondays, :semanticCommits, extends, internalChecksFilter, labels (+11 more)

### Community 89 - "Gh"
Cohesion: 0.18
Nodes (11): aUe(), Gh(), jNe(), lUe(), m4e(), oUe(), Qle(), _Ue() (+3 more)

### Community 90 - "CF"
Cohesion: 0.19
Nodes (14): c3(), CF(), dze(), EF(), Eq(), h3(), hze(), Iq() (+6 more)

### Community 91 - "u4e"
Cohesion: 0.14
Nodes (14): dxe(), ez(), f4e(), gxe(), hxe(), k_e(), Q_e(), r4e() (+6 more)

### Community 92 - "mme"
Cohesion: 0.16
Nodes (13): a9(), Bo(), c9(), Eme(), gme(), hme(), mme(), p() (+5 more)

### Community 93 - "h9e"
Cohesion: 0.13
Nodes (21): A9e(), bte(), c9e(), d9e(), f(), Dte(), E9e(), f9e() (+13 more)

### Community 94 - "eOe"
Cohesion: 0.14
Nodes (16): aNe(), dNe(), eOe(), gNe(), hNe(), kNe(), oNe(), oz() (+8 more)

### Community 95 - "txe"
Cohesion: 0.20
Nodes (12): C0e(), eXe(), Kot(), mNe(), nxe(), oM(), pz(), rxe() (+4 more)

### Community 96 - "fromJSON"
Cohesion: 0.14
Nodes (14): Eg(), eve(), fromJSON(), g1t(), gyt(), iy(), m1t(), N1t() (+6 more)

### Community 97 - "makeCallback"
Cohesion: 0.18
Nodes (20): chmodPromise(), chmodSync(), chownPromise(), chownSync(), fchmodPromise(), fchmodSync(), fchownPromise(), fchownSync() (+12 more)

### Community 98 - "_makeRequest"
Cohesion: 0.26
Nodes (12): _beforeError(), _error(), _finalizeBody(), _lockWrite(), _makeRequest(), _onRequest(), _onResponse(), _onResponseBase() (+4 more)

### Community 99 - "i1e"
Cohesion: 0.06
Nodes (36): aW(), B1e(), E1e(), Fdt(), finalizeInstall(), finalizeInstallWithPnp(), findInstallState(), findPackageLocation() (+28 more)

### Community 100 - "nD"
Cohesion: 0.18
Nodes (13): j0t(), Jdt(), jgt(), Kdt(), nD(), V0t(), vgt(), VW() (+5 more)

### Community 101 - "read"
Cohesion: 0.20
Nodes (12): api(), _emitEntry(), _getReaderOptions(), _getRootDirectory(), _handleDirectory(), _handleEntry(), _handleError(), _handleQueue() (+4 more)

### Community 102 - "vc"
Cohesion: 0.17
Nodes (12): Gje(), gle(), hle(), jje(), Kje(), mle(), ple(), qje() (+4 more)

### Community 103 - "buildCallerFunction"
Cohesion: 0.24
Nodes (10): anyNeedsWireRead(), anyNeedsWireWrite(), buildCallerFunction(), buildJSCallerFunction(), makeArgList(), makeCaller(), makeJSCaller(), makeMethodCaller() (+2 more)

### Community 104 - "verify"
Cohesion: 0.18
Nodes (11): buildPaths(), checkPath(), findIssuer(), sort(), verify(), verifyMessageDigest(), verifyPolicy(), verifySignature() (+3 more)

### Community 105 - "find"
Cohesion: 0.15
Nodes (14): choices(), decrement(), executeRegular(), find(), findIndex(), focus(), initialize(), map() (+6 more)

### Community 106 - "Ia"
Cohesion: 0.24
Nodes (4): copyIn(), Qmt(), _read(), rmt()

### Community 107 - "jh"
Cohesion: 0.17
Nodes (12): d8e(), h8e(), i4e(), j8e(), jh(), kx(), mUe(), n4e() (+4 more)

### Community 108 - "fetchPackageFromCache"
Cohesion: 0.13
Nodes (20): aZe(), ensureVirtualLink(), fetchPackageFromCache(), fn(), getChecksumFilename(), getDependencyMeta(), getLocatorFilename(), getLocatorMirrorPath() (+12 more)

### Community 109 - "isDisabled"
Cohesion: 0.27
Nodes (12): down(), enable(), isDisabled(), pageDown(), pageUp(), scrollDown(), scrollUp(), selectable() (+4 more)

### Community 110 - "n2t"
Cohesion: 0.22
Nodes (5): n2t(), f(), n(), r(), s()

### Community 111 - "ide"
Cohesion: 0.40
Nodes (6): aG(), Dit(), ide(), nde(), Nit(), vit()

### Community 112 - "submit"
Cohesion: 0.20
Nodes (11): cast(), check(), hint(), isFalse(), isTrue(), isValue(), result(), submit() (+3 more)

### Community 113 - "process"
Cohesion: 0.13
Nodes (15): createEnvironment(), createSession(), Fat(), genEnforcedDependencies(), genEnforcedFields(), lookup(), _lookup(), lookupAsync() (+7 more)

### Community 114 - "Tp"
Cohesion: 0.24
Nodes (10): cz(), dke(), HKe(), loadUserConfig(), mke(), qae(), Tp(), xke() (+2 more)

### Community 115 - "zje"
Cohesion: 0.31
Nodes (10): DZ(), vle(), zje(), f(), h(), p(), S(), x() (+2 more)

### Community 116 - "Fp"
Cohesion: 0.24
Nodes (11): forgetVirtualResolutions(), Fp(), getWorkspaceByDescriptor(), getWorkspaceByIdent(), $k(), NB(), oi(), QB() (+3 more)

### Community 117 - "Hpe"
Cohesion: 0.16
Nodes (14): _5(), cloneFromRemote(), Fae(), H5(), Hpe(), J0e(), jj(), K0e() (+6 more)

### Community 118 - "setTimeout"
Cohesion: 0.29
Nodes (13): setTimeout(), sweep(), tlt(), toggleLightGC(), Wut(), fe(), I(), ie() (+5 more)

### Community 119 - "u0"
Cohesion: 0.33
Nodes (6): BLe(), Cle(), jMe(), u0(), uMe(), wLe()

### Community 120 - ".on"
Cohesion: 0.13
Nodes (12): Ch(), collect(), _dump(), _flush(), K0t(), mFe(), nmt(), on() (+4 more)

### Community 121 - "o2"
Cohesion: 0.47
Nodes (6): Ct(), dc(), at(), ir(), Ns(), Yt()

### Community 122 - "makeBound"
Cohesion: 0.25
Nodes (7): __decorate(), _defineHidden(), disableMember(), __extends(), makeBound(), a(), _nbind_value()

### Community 123 - "lOe"
Cohesion: 0.17
Nodes (12): aOe(), BOe(), cOe(), fOe(), iOe(), lOe(), nOe(), oOe() (+4 more)

### Community 124 - "load"
Cohesion: 0.28
Nodes (9): ensureDependencyMeta(), ensurePeerDependencyMeta(), Ex(), Gce(), gl(), load(), loadFile(), loadFromText() (+1 more)

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

### Community 131 - "responseHeaders"
Cohesion: 0.20
Nodes (11): AGe(), _ageValue(), _allowsStoringAuthenticated(), _copyWithoutHopByHopHeaders(), _hasExplicitExpiration(), now(), _requestMatches(), responseHeaders() (+3 more)

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

### Community 140 - "Ame"
Cohesion: 0.22
Nodes (8): Ame(), c_e(), cMe(), fTe(), lMe(), rMe(), tMe(), wM()

### Community 141 - "t3"
Cohesion: 0.33
Nodes (7): i3(), lze(), n3(), r3(), t3(), xle(), y3()

### Community 142 - "reportValue"
Cohesion: 0.29
Nodes (7): reportCommandName(), reportDependencyCount(), reportPackageExtension(), reportPluginName(), reportValue(), reportVersion(), reportWorkspaceCount()

### Community 143 - "gpe"
Cohesion: 0.21
Nodes (14): aj(), am(), Brt(), dj(), Ej(), gj(), gpe(), jpe() (+6 more)

### Community 144 - "ensureCapacity"
Cohesion: 0.33
Nodes (6): appendChar(), appendUint16(), appendUint24(), appendView(), ensureCapacity(), realloc()

### Community 145 - "uBt"
Cohesion: 0.33
Nodes (6): _Bt(), fBt(), HBt(), jBt(), uBt(), zBt()

### Community 146 - "Egt"
Cohesion: 0.40
Nodes (5): c2e(), Egt(), PW(), wgt(), wW()

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
Cohesion: 0.40
Nodes (5): addChoice(), isChoice(), isSelected(), newItem(), toChoice()

### Community 152 - "makeInterval"
Cohesion: 0.40
Nodes (5): addListener(), makeInterval(), nx(), registerChangeListener(), stat()

### Community 153 - "aQ"
Cohesion: 0.40
Nodes (5): aQ(), dle(), fJe(), LJe(), OJe()

### Community 154 - "aSt"
Cohesion: 0.40
Nodes (5): aSt(), cst(), F1(), oSt(), sSt()

### Community 155 - "Ste"
Cohesion: 0.40
Nodes (5): BNe(), lTe(), Ste(), vz(), wNe()

### Community 156 - "checkFinalSnapsnot"
Cohesion: 0.40
Nodes (5): checkFinalSnapsnot(), checkFinalTimestamp(), updateDelegatedTargets(), updateSnapshot(), updateTimestamp()

### Community 157 - "Kae"
Cohesion: 0.40
Nodes (5): D4(), Kae(), KKe(), P4(), wae()

### Community 158 - "eo"
Cohesion: 0.33
Nodes (6): eo(), Ime(), kat(), s(), yme(), a()

### Community 159 - "delete"
Cohesion: 0.32
Nodes (8): complete(), delete(), deleteForward(), get(), _getKeyPrefix(), _getKeyPrefixArray(), has(), suggest()

### Community 160 - "W0e"
Cohesion: 0.40
Nodes (5): fc(), O5(), oat(), W0e(), Y0e()

### Community 161 - "BB"
Cohesion: 0.29
Nodes (7): b4(), BB(), iae(), oae(), Sk(), W0(), wB()

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

### Community 169 - "dx"
Cohesion: 0.50
Nodes (4): cUe(), dx(), gz(), sUe()

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

### Community 188 - "lstatPromise"
Cohesion: 0.33
Nodes (7): genTraversePromise(), lstatPromise(), lstatSync(), lutimesPromise(), lutimesSync(), preserveTimePromise(), preserveTimeSync()

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

### Community 195 - "_fillStorage"
Cohesion: 0.67
Nodes (3): _fillStorage(), _getPatternSegments(), _splitSegmentsIntoSections()

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

### Community 207 - "mE"
Cohesion: 0.40
Nodes (5): Et(), LU(), mE(), OU(), U2()

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

### Community 214 - "warn"
Cohesion: 0.33
Nodes (6): [g6](), [ghe](), [mhe](), [P6](), warn(), [ZT]()

### Community 215 - "hM"
Cohesion: 0.50
Nodes (5): hM(), hz(), jKe(), VKe(), zke()

### Community 220 - "toChoices"
Cohesion: 0.50
Nodes (4): hot(), P5(), toChoices(), x5()

### Community 222 - "exit"
Cohesion: 0.67
Nodes (3): exit(), exitRuntime(), ExitStatus()

### Community 225 - "supports"
Cohesion: 0.67
Nodes (3): supports(), tryFetcher(), w9()

### Community 227 - "tS"
Cohesion: 0.18
Nodes (11): C5(), Cot(), d0e(), eS(), executeUpClassic(), g0e(), h0e(), I5() (+3 more)

## Ambiguous Edges - Review These
- `index.html Spec` → `Favicon Link (/favicon.svg)`  [AMBIGUOUS]
  index.html · relation: conceptually_related_to

## Knowledge Gaps
- **16 isolated node(s):** `config:recommended`, `:semanticCommits`, `:configMigration`, `:maintainLockFilesWeekly`, `schedule:earlyMondays` (+11 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 822 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **62 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Q6e()` connect `Q6e` to `Nl`, `hc`, `yarn-4.17.0.cjs`, `qn`, `Ut`, `zA`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._
- **Are the 67 inferred relationships involving `s()` (e.g. with `a6e()` and `a9()`) actually correct?**
  _`s()` has 67 INFERRED edges - model-reasoned connections that need verification._
- **What connects `config:recommended`, `:semanticCommits`, `:configMigration` to the rest of the system?**
  _16 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Component Tests & Theme Toggle` be split into smaller, more focused modules?**
  _Cohesion score 0.1349206349206349 - nodes in this community are weakly interconnected._
- **Why does `jy()` connect `jy` to `v`, `Vr`, `yarn-4.17.0.cjs`, `qn`, `jh`, `b`, `Ut`, `c`, `o2`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Are the 27 inferred relationships involving `c()` (e.g. with `a6e()` and `h()`) actually correct?**
  _`c()` has 27 INFERRED edges - model-reasoned connections that need verification._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `index.html Spec` and `Favicon Link (/favicon.svg)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._