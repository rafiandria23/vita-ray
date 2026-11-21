# Graph Report - vita-ray  (2026-11-21)

## Corpus Check
- 49 files · ~82,114 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 12 file(s) not represented in the graph (top: (none) 6, .scss 4, .gz 1)

## Summary
- 3775 nodes · 9597 edges · 282 communities (208 shown, 74 thin omitted)
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 1064 edges (avg confidence: 0.85)
- Token cost: 217,213 input · 0 output

## Graph Freshness
- Built from commit: `ec88b402`
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
- v
- hd
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
- toJSON
- b
- Nl
- hc
- r
- Gt
- jit
- n
- t
- qn
- Nr
- .write
- s
- Rr
- ne
- Ln
- an
- makeCallSync
- maxAge
- alert
- c
- V
- bn
- xI
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
- ace
- ExerciseCard.test.tsx
- R0
- BP
- chmodSync
- jy
- run
- xit
- renderChoice
- tNe
- resolveFilename
- sFe
- lM
- tke
- Dn
- E
- getFileSource
- zA
- Ff
- _filter
- zme
- make
- Gh
- CF
- u4e
- mme
- h9e
- eOe
- txe
- fromJSON
- _x
- _makeRequest
- Ew
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
- aNe
- cxe
- u0
- Ch
- o2
- makeBound
- format
- load
- s9
- refresh
- once
- fmt
- hG
- findExtension
- finalizeInstallWithPnp
- installPackage
- isUniversal
- aF
- tU
- aLe
- C7e
- getBufferAndClose
- DL
- isEnabled
- t3
- reportValue
- qu
- ensureCapacity
- uBt
- Egt
- Pue
- xUe
- a
- s_e
- toChoice
- makeInterval
- aQ
- aSt
- Ste
- checkFinalSnapsnot
- Kae
- eo
- XU
- W0e
- getPackageExtensions
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
- prev
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
- gqe
- hasDependency
- sbe
- kHe
- uve
- p0t
- reportHit
- OU
- splice
- patchConsole
- Q0t
- yCt
- UU
- _2
- importSettings
- addOrCreate
- aee
- attachExternalDependents
- aye
- B8e
- bit
- buffer
- Bz
- captureString
- CIt
- commands
- createEntry
- d0e
- m$
- ensureJSsource
- ewt
- exitCode
- f1t
- fetchNextAnswer
- findSequenceMember
- fUe
- g2t
- G6e
- genCommitMessage
- sign
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
- Omt
- mve
- r0t
- __nbind_register_function
- nGe
- wdt
- pop64
- push
- push64
- pushPointer
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
8. `emit()` - 75 edges
9. `t` - 75 edges
10. `Q6e()` - 60 edges

## Surprising Connections (you probably didn't know these)
- `TierBadge Behaviour Spec` --references--> `TierBadge()`  [EXTRACTED]
  CLAUDE.md → src/components/TierBadge.tsx
- `UnitToggle Behaviour Spec` --references--> `UnitToggle()`  [EXTRACTED]
  CLAUDE.md → src/components/UnitToggle.tsx
- `ThemeContext Spec` --references--> `ThemeProvider()`  [EXTRACTED]
  CLAUDE.md → src/context/ThemeContext.tsx
- `UnitContext Spec` --references--> `UnitProvider()`  [EXTRACTED]
  CLAUDE.md → src/context/UnitContext.tsx
- `Program Data (program.ts DAYS) - Single Source of Truth` --references--> `DAYS`  [EXTRACTED]
  CLAUDE.md → src/data/program.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Quality gates (lint, format, typecheck, test, coverage)** — agents_eslint_config, agents_prettier, agents_vitest_testing, agents_husky_lint_staged, agents_circleci_pipeline, agents_sonarcloud [EXTRACTED 1.00]
- **Unit preference persistence and conversion** — agents_unitcontext, agents_useunit, agents_unittoggle, agents_convertweight [EXTRACTED 1.00]
- **Quality Gate Toolchain (lint, typecheck, test, coverage, scan)** — claude_circleci_pipeline, claude_husky_lint_staged, claude_eslint_flat_config, claude_prettier_config, claude_vitest_testing, claude_sonarcloud [EXTRACTED 1.00]
- **Weight calculation flow (input -> tier sets -> rounded weights)** — agents_exercisecard, agents_settable, agents_tier_percentages, agents_calcsetweight, agents_roundweight [INFERRED 0.85]
- **Persisted Display Settings (theme + unit via context, hook, localStorage)** — claude_themecontext_spec, claude_unitcontext_spec, claude_usetheme_hook, claude_useunit_hook, claude_theme_system [INFERRED 0.85]
- **Weight Calculation Flow (tier sets from top set weight)** — claude_exercisecard_spec, claude_settable_spec, claude_tier_percentages, claude_weight_utility, claude_unit_conversion_rules [INFERRED 0.85]

## Communities (282 total, 74 thin omitted)

### Community 0 - "Component Tests & Theme Toggle"
Cohesion: 0.13
Nodes (17): dependencies, react@^19.0.0, react-dom@^19.0.0, react, react-dom, @testing-library/react, vitest, CYCLE (+9 more)

### Community 1 - "AGENTS.md Tooling & Standing Orders"
Cohesion: 0.08
Nodes (26): CircleCI Pipeline, ESLint Flat Config (ESLint 9), Git Hooks (Husky + lint-staged), Military Dossier Aesthetic (Mobile-first), Operation Vita Ray, @/ Path Alias, Prettier Config, Program Data (program.ts DAYS) - Single Source of Truth (+18 more)

### Community 2 - "CircleCI Pipeline Config"
Cohesion: 0.08
Nodes (32): at, docker, requires, steps, jobs, image, jobs, build (+24 more)

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
Cohesion: 0.06
Nodes (51): abort(), abortOnCannotGrowMemory(), allocate(), assert(), demangle(), demangleAll(), _emscripten_get_now(), _emscripten_set_main_loop() (+43 more)

### Community 9 - "package.json"
Cohesion: 0.04
Nodes (63): description, devDependencies, autoprefixer@^10.4.20, eslint@^10.6.0, eslint-config-prettier@^10.1.8, @eslint/js@^10.0.1, eslint-plugin-react@^7.37.5, eslint-plugin-react-hooks@^7.1.1 (+55 more)

### Community 10 - "Q6e"
Cohesion: 0.10
Nodes (48): fu(), Va(), pa(), Q6e(), Bf(), bh(), Bt(), Dh() (+40 more)

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
Cohesion: 0.05
Nodes (48): aZe(), cze(), DB(), dI(), dOe(), ensureVirtualLink(), F8(), FQ() (+40 more)

### Community 15 - "Prettier Settings"
Cohesion: 0.29
Nodes (6): endOfLine, printWidth, semi, singleQuote, tabWidth, trailingComma

### Community 16 - "v"
Cohesion: 0.09
Nodes (40): a2(), a7e(), Ac(), ce(), [Em](), Et(), exportTo(), Gy() (+32 more)

### Community 17 - "hd"
Cohesion: 0.06
Nodes (41): Ad(), b4(), BB(), C4(), CB(), cwt(), eLe(), fd() (+33 more)

### Community 18 - "Ut"
Cohesion: 0.13
Nodes (40): $1(), Ao(), Bat(), bh(), componentDidCatch(), d2(), dP(), Dy() (+32 more)

### Community 19 - "Favicon Artwork"
Cohesion: 0.67
Nodes (3): Vita Ray Favicon (lightning bolt app icon), Dark Rounded Square Background (#0A0A0A), Lightning Bolt Glyph (#85B7EB)

### Community 20 - "emit"
Cohesion: 0.06
Nodes (32): [Ah](), [aR](), destroy(), [ehe](), emit(), _final(), flushHeaders(), [HI]() (+24 more)

### Community 21 - "Wr"
Cohesion: 0.13
Nodes (37): aqe(), c_(), DE(), eqe(), Er(), f$(), fqe(), g9e() (+29 more)

### Community 22 - "execute"
Cohesion: 0.06
Nodes (37): BL(), C5(), Cot(), D5(), Dot(), dSt(), eS(), execute() (+29 more)

### Community 23 - "mapToBase"
Cohesion: 0.14
Nodes (35): accessPromise(), accessSync(), appendFilePromise(), chmodPromise(), chownPromise(), copyPromise(), d6e(), fchownPromise() (+27 more)

### Community 24 - "constructor"
Cohesion: 0.06
Nodes (33): applyChanges(), c1t(), _checkIterableAdaptar(), clear(), componentWillUnmount(), constructor(), cursorHide(), cursorShow() (+25 more)

### Community 25 - "getCandidates"
Cohesion: 0.07
Nodes (34): _5(), bindDescriptor(), bJ(), cloneFromRemote(), Fae(), fetchFromDisk(), generatePackage(), getCandidates() (+26 more)

### Community 26 - "x"
Cohesion: 0.09
Nodes (26): Art(), De(), b0(), Fit(), _Ge(), getSession(), K6e(), be() (+18 more)

### Community 27 - "KVe"
Cohesion: 0.11
Nodes (26): addWorkspace(), anchoredPackage(), _B(), check(), [_d](), ece(), fE(), G0() (+18 more)

### Community 31 - "B9e"
Cohesion: 0.15
Nodes (30): B9e(), _A(), Ac(), at(), da(), dc(), $e(), fc() (+22 more)

### Community 32 - "Bw"
Cohesion: 0.07
Nodes (32): aW(), B1e(), B9(), Bdt(), Bw(), Cgt(), Ddt(), Edt() (+24 more)

### Community 33 - "toJSON"
Cohesion: 0.07
Nodes (30): b1t(), commitBuffer(), concat(), cyt(), d1t(), dV(), e0t(), E2e() (+22 more)

### Community 34 - "b"
Cohesion: 0.14
Nodes (31): B2(), bs(), [cA](), da(), df(), Ea(), fHe(), ga() (+23 more)

### Community 35 - "Nl"
Cohesion: 0.11
Nodes (30): _6e(), Gi(), Ka(), Li(), Ya(), Bt(), C2(), cRe() (+22 more)

### Community 36 - "hc"
Cohesion: 0.11
Nodes (28): au(), hc(), co(), compile(), Do(), FA(), at(), is() (+20 more)

### Community 37 - "r"
Cohesion: 0.07
Nodes (26): B0t(), cD(), createConnection(), _destroy(), _getEntry(), _getFullEntryPath(), _getStat(), getTransformer() (+18 more)

### Community 38 - "Gt"
Cohesion: 0.12
Nodes (29): aI(), applyLightResolution(), cacheCleanup(), cae(), cI(), crt(), fetchEverything(), generateLockfile() (+21 more)

### Community 39 - "jit"
Cohesion: 0.10
Nodes (27): As(), Bd(), C8(), commitTips(), computeCandidateName(), FB(), fze(), Hht() (+19 more)

### Community 40 - "n"
Cohesion: 0.09
Nodes (29): ask(), bot(), d0t(), c(), f(), dme(), getRecursiveWorkspaceDependents(), hot() (+21 more)

### Community 41 - "t"
Cohesion: 0.07
Nodes (26): Bst(), c0t(), [dhe](), firstHook(), getToken(), hgt(), [hhe](), jC() (+18 more)

### Community 42 - "qn"
Cohesion: 0.08
Nodes (18): collect(), _dump(), G2e(), GW(), K0t(), K2e(), mFe(), on() (+10 more)

### Community 43 - "Nr"
Cohesion: 0.18
Nodes (28): _5e(), BE(), bx(), cs(), cte(), Ete(), F5e(), fl() (+20 more)

### Community 44 - ".write"
Cohesion: 0.08
Nodes (25): a0t(), add(), [b6](), [bv](), [D6](), [E6](), end(), flush() (+17 more)

### Community 45 - "s"
Cohesion: 0.09
Nodes (28): a6e(), c6e(), Cdt(), _createCacheableRequest(), dynamic(), e5e(), getLinkers(), getMountPromise() (+20 more)

### Community 46 - "Rr"
Cohesion: 0.08
Nodes (27): _3e(), d3e(), dFe(), e8e(), gFe(), gTe(), h3e(), hFe() (+19 more)

### Community 47 - "ne"
Cohesion: 0.10
Nodes (22): DT(), Ee(), fo(), [Hc](), Hdt(), [lR](), Ly(), n2() (+14 more)

### Community 48 - "Ln"
Cohesion: 0.09
Nodes (5): _0(), cWe(), Ln(), lWe(), uWe()

### Community 49 - "an"
Cohesion: 0.09
Nodes (26): a3e(), an(), B3e(), B_e(), BOe(), c3e(), cOe(), dqe() (+18 more)

### Community 50 - "makeCallSync"
Cohesion: 0.12
Nodes (26): checksumFilePromise(), closePromise(), closeSync(), createReadStream(), createWriteStream(), findMount(), fstatPromise(), fstatSync() (+18 more)

### Community 51 - "maxAge"
Cohesion: 0.12
Nodes (24): AGe(), _ageValue(), _allowsStoringAuthenticated(), _assertRequestHasHeaders(), _copyWithoutHopByHopHeaders(), date(), g$e(), _hasExplicitExpiration() (+16 more)

### Community 52 - "alert"
Cohesion: 0.16
Nodes (24): alert(), append(), backward(), complete(), delete(), deleteForward(), disable(), dispatch() (+16 more)

### Community 53 - "c"
Cohesion: 0.13
Nodes (18): bf(), c(), Dh(), En(), Eu(), gc(), MS(), My() (+10 more)

### Community 54 - "V"
Cohesion: 0.26
Nodes (25): CP(), hP(), If(), In(), jA(), kh(), sl(), sr() (+17 more)

### Community 55 - "bn"
Cohesion: 0.10
Nodes (24): a0(), are(), bn(), br(), d4e(), FPe(), g4e(), h4e() (+16 more)

### Community 56 - "xI"
Cohesion: 0.12
Nodes (24): Al(), AP(), bpe(), Brt(), findFolderRcFile(), findRcFiles(), gpe(), gx() (+16 more)

### Community 57 - "p"
Cohesion: 0.11
Nodes (23): Ame(), Gae(), get(), _getKeyPrefix(), gG(), h(), has(), kR() (+15 more)

### Community 58 - "Uh"
Cohesion: 0.12
Nodes (18): ake(), B4e(), c0(), g8e(), _h(), Hh(), i3e(), k4e() (+10 more)

### Community 59 - "render"
Cohesion: 0.11
Nodes (23): altDown(), altUp(), cancel(), close(), completion(), cutForward(), cutLeft(), element() (+15 more)

### Community 60 - "writeFileSync"
Cohesion: 0.13
Nodes (22): appendFileSync(), changeFileBufferPromise(), changeFileBufferSync(), changeFilePromise(), changeFileSync(), changeFileTextPromise(), changeFileTextSync(), chownSync() (+14 more)

### Community 61 - "reportInfo"
Cohesion: 0.19
Nodes (22): clearProgress(), commit(), createStreamReporter(), finalize(), formatIndent(), formatName(), formatNameWithHyperlink(), formatPrefix() (+14 more)

### Community 62 - "a8e"
Cohesion: 0.10
Nodes (21): _4e(), a4e(), a8e(), c4e(), c8e(), e3e(), f8e(), h_e() (+13 more)

### Community 63 - "Hr"
Cohesion: 0.12
Nodes (21): _8e(), Aa(), cX(), e_e(), Hr(), jM(), jP(), [mm]() (+13 more)

### Community 64 - "fm"
Cohesion: 0.14
Nodes (20): Av(), Cpe(), dpe(), Epe(), Fj(), fm(), frt(), FT() (+12 more)

### Community 65 - "Bi"
Cohesion: 0.15
Nodes (6): Bi(), getLimit(), getSpecial(), getSubprocessStreams(), isInteractive(), wT()

### Community 66 - "yl"
Cohesion: 0.12
Nodes (20): accepts(), Ape(), B8(), _ce(), downloadBytes(), downloadFile(), downloadHosted(), el() (+12 more)

### Community 67 - "ace"
Cohesion: 0.12
Nodes (10): ace(), C(), U(), x(), jze(), f(), h(), p() (+2 more)

### Community 68 - "ExerciseCard.test.tsx"
Cohesion: 0.20
Nodes (12): exercise, t3Exercise, Wrapper(), Wrapper(), Wrapper(), Wrapper(), UnitToggle(), UnitContext (+4 more)

### Community 69 - "R0"
Cohesion: 0.11
Nodes (19): BM(), c9e(), cqe(), E9e(), G5e(), I9e(), Ire(), kte() (+11 more)

### Community 70 - "BP"
Cohesion: 0.15
Nodes (19): BP(), Bu(), by(), Ds(), HL(), KL(), kP(), ky() (+11 more)

### Community 71 - "chmodSync"
Cohesion: 0.13
Nodes (19): chmodSync(), copySync(), ert(), f6e(), fchmodSync(), getUnixMode(), hydrateDirectory(), ix() (+11 more)

### Community 72 - "jy"
Cohesion: 0.22
Nodes (18): jy(), be(), ce(), d(), fe(), ge(), I(), ie() (+10 more)

### Community 73 - "run"
Cohesion: 0.13
Nodes (18): addOnPostRun(), addOnPreRun(), Bre(), callRuntimeCallbacks(), createWorker(), ensureInitRuntime(), exit(), exitRuntime() (+10 more)

### Community 74 - "xit"
Cohesion: 0.11
Nodes (16): Ade(), dd(), fde(), getSupportedArchitectures(), HB(), kit(), L1(), Ntt() (+8 more)

### Community 75 - "renderChoice"
Cohesion: 0.14
Nodes (18): choiceMessage(), choiceSeparator(), getRealPath(), getResolverByLocator(), indent(), indicator(), mapFromBase(), onChoice() (+10 more)

### Community 76 - "tNe"
Cohesion: 0.12
Nodes (18): cNe(), eNe(), fNe(), g3e(), iNe(), jFe(), jX(), kM() (+10 more)

### Community 77 - "resolveFilename"
Cohesion: 0.20
Nodes (18): deleteEntry(), isSymbolicLink(), lstatSync(), lutimesSync(), prepareReadlink(), preserveTimeSync(), readdirPromise(), readdirSync() (+10 more)

### Community 78 - "sFe"
Cohesion: 0.12
Nodes (17): aFe(), BFe(), cFe(), fFe(), iFe(), jz(), lFe(), nFe() (+9 more)

### Community 79 - "lM"
Cohesion: 0.12
Nodes (17): aX(), cM(), eI(), ixe(), _j(), JXe(), KXe(), lM() (+9 more)

### Community 80 - "tke"
Cohesion: 0.14
Nodes (17): az(), cke(), eke(), fke(), fz(), ike(), lke(), lz() (+9 more)

### Community 81 - "Dn"
Cohesion: 0.15
Nodes (17): Bqe(), dM(), Dn(), hM(), Hx(), lNe(), lqe(), NBe() (+9 more)

### Community 82 - "E"
Cohesion: 0.15
Nodes (16): a$(), b6e(), createCacheableRequest(), d8(), E(), fH(), h8(), Hu() (+8 more)

### Community 83 - "getFileSource"
Cohesion: 0.17
Nodes (16): addDirectory(), allocateBuffer(), allocateSource(), allocateUnattachedSource(), copyFilePromise(), copyFileSync(), existsPromise(), existsSync() (+8 more)

### Community 84 - "zA"
Cohesion: 0.17
Nodes (16): Au(), Xa(), cc(), Mg(), p2(), Ao(), Df(), gc() (+8 more)

### Community 85 - "Ff"
Cohesion: 0.12
Nodes (16): BMe(), c_e(), eFe(), Ff(), fTe(), fX(), kMe(), Lx() (+8 more)

### Community 86 - "_filter"
Cohesion: 0.12
Nodes (16): _createIndexRecord(), _filter(), _getEntryLevel(), getFilter(), _getMatcher(), _getNegativePatternsRe(), _isDuplicateEntry(), _isMatchToPatterns() (+8 more)

### Community 87 - "zme"
Cohesion: 0.12
Nodes (16): cye(), dlt(), eye(), F9(), iye(), llt(), lye(), N9() (+8 more)

### Community 88 - "make"
Cohesion: 0.16
Nodes (15): adjascentGlobstarOptimize(), braceExpand(), debug(), firstPhasePreProcess(), levelOneOptimize(), levelTwoFileOptimize(), make(), match() (+7 more)

### Community 89 - "Gh"
Cohesion: 0.13
Nodes (15): aUe(), Bq(), _E(), e4e(), Gh(), jNe(), lUe(), m4e() (+7 more)

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
Cohesion: 0.15
Nodes (14): aOe(), eOe(), iOe(), kNe(), nOe(), oOe(), oz(), pNe() (+6 more)

### Community 95 - "txe"
Cohesion: 0.18
Nodes (14): C0e(), eXe(), hz(), jKe(), Kot(), nxe(), oM(), pz() (+6 more)

### Community 96 - "fromJSON"
Cohesion: 0.14
Nodes (14): Eg(), eve(), fromJSON(), g1t(), gyt(), iy(), m1t(), N1t() (+6 more)

### Community 97 - "_x"
Cohesion: 0.26
Nodes (13): $9e(), hre(), J2(), Kf(), mx(), od(), r3e(), t3e() (+5 more)

### Community 98 - "_makeRequest"
Cohesion: 0.26
Nodes (12): _beforeError(), _error(), _finalizeBody(), _lockWrite(), _makeRequest(), _onRequest(), _onResponse(), _onResponseBase() (+4 more)

### Community 99 - "Ew"
Cohesion: 0.17
Nodes (13): E1e(), Ew(), h1e(), i1e(), Kht(), n1e(), p1e(), qht() (+5 more)

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
Cohesion: 0.22
Nodes (10): choices(), find(), findIndex(), focus(), initialize(), map(), reset(), Wtt() (+2 more)

### Community 106 - "Ia"
Cohesion: 0.29
Nodes (5): copyIn(), Ia(), Qmt(), _read(), rmt()

### Community 107 - "jh"
Cohesion: 0.18
Nodes (11): cMe(), d8e(), h8e(), j8e(), jh(), kx(), lMe(), mUe() (+3 more)

### Community 108 - "fetchPackageFromCache"
Cohesion: 0.22
Nodes (11): dae(), fetchPackageFromCache(), fn(), getDependencyMeta(), isChecksumCompatible(), M4(), progressViaTitle(), v4() (+3 more)

### Community 109 - "isDisabled"
Cohesion: 0.31
Nodes (11): down(), isDisabled(), pageDown(), pageUp(), scrollDown(), scrollUp(), selectable(), shiftDown() (+3 more)

### Community 110 - "n2t"
Cohesion: 0.22
Nodes (5): n2t(), f(), n(), r(), s()

### Community 111 - "ide"
Cohesion: 0.22
Nodes (9): aG(), Dit(), ide(), nde(), Nit(), Pit(), sde(), vit() (+1 more)

### Community 112 - "submit"
Cohesion: 0.24
Nodes (9): cast(), hint(), isFalse(), isTrue(), isValue(), submit(), toNumber(), validate() (+1 more)

### Community 113 - "process"
Cohesion: 0.20
Nodes (10): createEnvironment(), createSession(), Fat(), genEnforcedDependencies(), genEnforcedFields(), lookup(), lookupAsync(), process() (+2 more)

### Community 114 - "Tp"
Cohesion: 0.24
Nodes (10): cz(), dke(), HKe(), loadUserConfig(), mke(), qae(), Tp(), xke() (+2 more)

### Community 115 - "zje"
Cohesion: 0.31
Nodes (10): DZ(), vle(), zje(), f(), h(), p(), S(), x() (+2 more)

### Community 116 - "Fp"
Cohesion: 0.27
Nodes (10): forgetVirtualResolutions(), Fp(), getWorkspaceByDescriptor(), getWorkspaceByIdent(), NB(), QB(), tryWorkspaceByDescriptor(), tryWorkspaceByIdent() (+2 more)

### Community 117 - "aNe"
Cohesion: 0.25
Nodes (9): aNe(), dNe(), gNe(), hNe(), mNe(), oNe(), QM(), sNe() (+1 more)

### Community 118 - "cxe"
Cohesion: 0.22
Nodes (9): AXe(), Bxe(), cxe(), fXe(), iz(), lxe(), uXe(), wQ() (+1 more)

### Community 119 - "u0"
Cohesion: 0.22
Nodes (9): BLe(), Cle(), i4e(), jMe(), oMe(), s4e(), u0(), uMe() (+1 more)

### Community 120 - "Ch"
Cohesion: 0.28
Nodes (5): Ch(), _flush(), nmt(), Og(), z2e()

### Community 121 - "o2"
Cohesion: 0.31
Nodes (9): Ct(), dc(), at(), ir(), Ns(), o2(), wP(), Yt() (+1 more)

### Community 122 - "makeBound"
Cohesion: 0.25
Nodes (7): __decorate(), _defineHidden(), disableMember(), __extends(), makeBound(), a(), _nbind_value()

### Community 123 - "format"
Cohesion: 0.31
Nodes (9): definition(), definitions(), format(), getUsageByIndex(), getUsageByRegistration(), inc(), Ko(), R9e() (+1 more)

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
Cohesion: 0.22
Nodes (8): H2e(), [k6](), off(), once(), qW(), removeListener(), [Symbol.iterator](), V2e()

### Community 128 - "fmt"
Cohesion: 0.25
Nodes (8): amt(), cmt(), fmt(), imt(), kBe(), lmt(), rBe(), umt()

### Community 129 - "hG"
Cohesion: 0.29
Nodes (7): Cde(), dG(), hG(), Hit(), _it(), Oit(), Uit()

### Community 130 - "findExtension"
Cohesion: 0.25
Nodes (8): extAuthorityKeyID(), extBasicConstraints(), extension(), extKeyUsage(), extSCT(), extSubjectAltName(), extSubjectKeyID(), findExtension()

### Community 131 - "finalizeInstallWithPnp"
Cohesion: 0.29
Nodes (8): finalizeInstall(), finalizeInstallWithPnp(), isEsmEnabled(), locateNodeModules(), LSt(), MSt(), q1e(), transformPnpSettings()

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

### Community 138 - "getBufferAndClose"
Cohesion: 0.48
Nodes (7): discardAndClose(), E0(), getBufferAndClose(), prepareClose(), saveAndClose(), unwatchFile(), y0()

### Community 139 - "DL"
Cohesion: 0.29
Nodes (7): DL(), Fg(), supports(), supportsLocator(), tryFetcher(), tryResolverByLocator(), w9()

### Community 140 - "isEnabled"
Cohesion: 0.38
Nodes (7): Fdt(), findInstallState(), findPackageLocation(), findPackageLocator(), getCustomDataKey(), isEnabled(), supportsPackage()

### Community 141 - "t3"
Cohesion: 0.33
Nodes (7): i3(), lze(), n3(), r3(), t3(), xle(), y3()

### Community 142 - "reportValue"
Cohesion: 0.29
Nodes (7): reportCommandName(), reportDependencyCount(), reportPackageExtension(), reportPluginName(), reportValue(), reportVersion(), reportWorkspaceCount()

### Community 143 - "qu"
Cohesion: 0.33
Nodes (6): aj(), am(), dj(), Ej(), gj(), qu()

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

### Community 149 - "a"
Cohesion: 0.60
Nodes (6): _typeModule(), a(), n(), p(), r(), s()

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
Cohesion: 0.40
Nodes (5): eo(), Ime(), kat(), s(), yme()

### Community 159 - "XU"
Cohesion: 0.40
Nodes (5): ere(), nRe(), rre(), tRe(), XU()

### Community 160 - "W0e"
Cohesion: 0.40
Nodes (5): fc(), O5(), oat(), W0e(), Y0e()

### Community 161 - "getPackageExtensions"
Cohesion: 0.40
Nodes (5): getPackageExtensions(), k4(), triggerHook(), triggerMultipleHooks(), zk()

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

### Community 188 - "prev"
Cohesion: 0.67
Nodes (3): decrement(), prev(), save()

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

### Community 200 - "gqe"
Cohesion: 0.67
Nodes (3): gqe(), jqe(), wz()

### Community 201 - "hasDependency"
Cohesion: 0.67
Nodes (3): hasDependency(), hasHardDependency(), hasSoftDependency()

### Community 202 - "sbe"
Cohesion: 0.67
Nodes (3): ibe(), obe(), sbe()

### Community 203 - "kHe"
Cohesion: 0.67
Nodes (3): kHe(), p0(), xHe()

### Community 204 - "uve"
Cohesion: 0.67
Nodes (3): kyt(), Ryt(), uve()

### Community 205 - "p0t"
Cohesion: 0.67
Nodes (3): L2e(), p0t(), x0t()

### Community 206 - "reportHit"
Cohesion: 0.67
Nodes (3): L4(), reportHit(), reportInstall()

### Community 207 - "OU"
Cohesion: 1.00
Nodes (3): LU(), OU(), U2()

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

## Ambiguous Edges - Review These
- `index.html Spec` → `Favicon Link (/favicon.svg)`  [AMBIGUOUS]
  index.html · relation: conceptually_related_to

## Knowledge Gaps
- **11 isolated node(s):** `Rogers Priority (upper chest + lateral delts)`, `Military Dossier Aesthetic (Mobile-first)`, `Operation Vita Ray`, `Shared Types (DayType, Tier, Unit, Exercise, TrainingDay, SetRow)`, `Dark Rounded Square Background (#0A0A0A)` (+6 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 803 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **74 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Q6e()` connect `Q6e` to `Nl`, `hc`, `yarn-4.17.0.cjs`, `Ut`, `zA`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Are the 67 inferred relationships involving `s()` (e.g. with `a6e()` and `a9()`) actually correct?**
  _`s()` has 67 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Rogers Priority (upper chest + lateral delts)`, `Military Dossier Aesthetic (Mobile-first)`, `Operation Vita Ray` to the rest of the system?**
  _11 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Component Tests & Theme Toggle` be split into smaller, more focused modules?**
  _Cohesion score 0.1349206349206349 - nodes in this community are weakly interconnected._
- **Why does `Ln()` connect `Ln` to `yarn-4.17.0.cjs`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Are the 27 inferred relationships involving `c()` (e.g. with `a6e()` and `h()`) actually correct?**
  _`c()` has 27 INFERRED edges - model-reasoned connections that need verification._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `index.html Spec` and `Favicon Link (/favicon.svg)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._