# Reasoning Lab (IQ-test repo)

Personal project: a phone-installable web app with an IQ test and Oxford-style physics interview practice.
The owner uses it mainly themselves, on an iPhone, from the home screen.

## How the app is delivered
- Static site, no build step: `index.html` (UI, generators, scoring), `iq-bank.js` (written IQ items), `physics.js` (physics bank + UI), `sw.js`, `manifest.webmanifest`, `icons/`.
- Hosted on GitHub Pages from `main` at https://alexbedos-source.github.io/IQ-test/ and added to the iPhone home screen as a PWA.
- **Workflow:** make changes on a branch, open a PR to `main`; the owner merges from the GitHub app. Never push straight to `main`.
- **Bump `VERSION` in `sw.js` on every change** to any app file, or installed phones keep serving the old cache. New files must also be added to `SHELL` in `sw.js`.
- The owner's results and physics ratings live in `localStorage` (`iq10-history`, `iq10-seen`, `phy-ratings`). Keep those keys and formats backwards compatible.

## Rules agreed with the owner
- **Do not copy questions from copyrighted tests** (Mensa, Raven's, WAIS, PAT, commercial prep sites). Write original items in the same style, and link to official material instead of reproducing it. The repo and site are public.
- **Label honestly:** physics questions are "in the style of" Oxford interviews, not official questions. IQ scores are rough estimates from an uncalibrated model; keep the disclaimers.
- **Every written item must be checked:** exactly one correct option, four distinct options, and an explanation. The first option in each item's array is the correct one (options are shuffled at run time).
- ICAR (icar-project.com) would give calibrated items but needs registration and may forbid public posting; on hold for now.

## IQ test structure
- Modes in `MODES` (index.html): 5 min/15 q, 10 min/30 q, 30 min/90 q, all at 20 s per question. `mix` gives counts per section.
- Sections (`CATS`, index order matters): 0 series, 1 matrices, 2 verbal, 3 quantitative, 4 logic, 5 spatial rotation, 6 working memory. They map onto CHC broad abilities (Gf, Gc, Gq, Gv, Gwm).
- Series, matrices, rotation and memory items are generated; verbal, quantitative and logic come from `VERB` (index.html, typed by `VERB_TYPE`) plus `EXTRA` in `iq-bank.js`.
- Item difficulty `b` runs roughly −2 (easy) to +2 (hard); these are estimates. Scoring is a 3PL-style model with a normal prior in `estimate()`.
- Memory items carry `mem`, `memMs` and `memPrompt`; `render()` shows the stimulus, then hides it.

## Physics section
- `PHY` entries: `id`, `t` (topic index into `PHY_TOPICS`), `l` (difficulty 1–3), `q`, `h` (hints, in order), `a` (worked answer HTML).
- Answers should state assumptions, use round numbers, give a sanity check, and say what tutors look for where useful.

## Testing before a PR
Serve with `python3 -m http.server`, then drive it with Playwright (Chromium is preinstalled; `require('playwright')` works). At minimum:
run all three modes to the results screen, validate every bank item and a few thousand generated items (one correct option, no duplicates),
check a memory item hides its stimulus, open a physics question, reveal hints and the answer, and rate it. Watch for console errors.
Don't kill the server with `pkill -f` on a pattern that also matches your own command.

## Roadmap
- Processing speed section (many quick, simple items against the clock): the main CHC ability not yet covered.
- More physics questions; the owner will say which topics feel too easy or hard.
- Grow written IQ banks further so the 30-minute test repeats less.
- Possibly calibrate difficulty using open data (e.g. openpsychometrics.org) or ICAR if access arrives.
