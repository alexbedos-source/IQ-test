# Delta (IQ-test repo)

Personal project: a phone-installable web app ("Delta", formerly "IQ Lab") that trains the owner for an Oxford/Imperial physics interview
and broader physics/maths fluency, plus an IQ test for them and friends. The owner is in Year 13; their personal statement
and admissions test are done, so **interview preparation (Oxford Physics) is the priority**. They use it on an iPhone from the home screen.
They do not want a friend-challenge / shared-test feature.
A-levels: **AQA Physics (7408), Edexcel Mathematics (9MA0), AQA Economics (7136)**. They want to be tested on all three;
interview prep stays focused on Oxford Physics.
The owner wants the question banks to keep growing so they never run out (a nightly scheduled session adds questions and updates a PR).
Later goal (not started): video explanations for questions answered wrongly.

## Level of content (owner's instruction)
- **Flashcards and A-level Physics questions: strictly AQA A-level Physics (7408).** Flashcards cover what must be learned:
  definitions, laws, particle facts, graph shapes, practical and safety points. **No constants and no formulas that are printed
  on the AQA data and formulae booklet** (they are given in the exam). Derivations that are not on the sheet (e.g. escape velocity) are fine.
- **Interview questions and problems of the week can be university level** (first-year style) to make interview practice realistic.
  Note that real Oxford interviews only assume A-level knowledge, so keep a mix and give enough hints to make harder questions approachable.

## How the app is delivered
- Static site, no build step. Files:
  - `index.html`: styles, shared helpers, home hub, `leave()`, IQ test (generators, scoring, screens).
  - `iq-bank.js`: written IQ items. `physics.js`: physics questions, follow-ups (`PHY_FOLLOW`) and practice screens.
  - `interview.js`: mock interview. `drill.js`: daily drill and streak. `learn.js`: flashcards, bridging topics, problem of the week, resources.
  - `tools.js`: study timer, processing-speed task, progress dashboard.
  - `alevel.js`: A-level practice by spec topic. Banks `AL_PHY_BANK`, `AL_MATHS_BANK`, `AL_ECON_BANK` (format `[topic, prompt, [correct, w, w, w], explanation]`) plus generators `AL_*_GEN` (`[topic, () => item]`) that make calculation questions fresh each time.
  - `videos.js`: narrated video lessons (`VIDEOS`, one per A-level topic, plus extras like `graphs`), the overlay player (`playVideo`), `videoFor(subj, topic, extra)` and `videoLinks(item)` used in reviews.
  - `mistakes.js`: mistake bank (`mbAdd`, `mbList`, review session). `extras.js`: confidence check, question reports, quiz runner, Mixed 15, Sketch the graph (`SKETCH`, append only), saved questions (☆ Save in `qTools`; physics items pass `phyId`). `backup.js`: backup and restore. `practicals.js`: the 12 AQA required practicals (`RPS`) with quizzes. `scratch.js`: scratchpad overlay.
  - Plus `sw.js`, `manifest.webmanifest`, `icons/`.
- Every top-level screen calls `leave()` first; modules push teardown functions onto `cleanups` (timers, microphone).
- **Back arrow:** `leave()` points the top-left arrow at `home`; any sub-screen must call `setBack(fn)` with its parent screen (use a `confirm()` wrapper when leaving would lose a running test). Every new screen needs this.
- Look: Delta "Ember" icon (orange–amber Δ on black); the app theme is black and orange in all modes. The backup format id stays `iq-lab` so older backups still restore.
- Hosted on GitHub Pages from `main` at https://alexbedos-source.github.io/IQ-test/ and added to the iPhone home screen as a PWA.
- **Workflow:** make changes on a branch, open a PR to `main`; the owner merges from the GitHub app. Never push straight to `main`.
- **Versioning (important, a mistake here blanks the app):** every script tag in `index.html` has `?v=N`, `window.IQ_V` is `'N'`, and `V` in `sw.js` is `'N'`. Bump all three together on every change. New script files must use `?v=N` in `index.html` and be added to `FILES` in `sw.js`. The service worker is network-first, so phones get updates as soon as they are online.
- **Start-up safety net:** an inline script at the top of `index.html` catches load errors, clears the offline cache and reloads once, then shows a "Repair and reload" button. `home()` dispatches `iq-started` when the app has loaded.
- All user data lives in `localStorage`: `iq10-history`, `iq10-seen`, `phy-ratings`, `iv-history`, `drill`, `cards`, `topics-read`, `potw`, `study-log`, `study-run`, `study-pref`, `speed-history`, `alevel`, `alevel-seen`, `mistakes`, `mistakes-cleared`, `rp-quiz`, `videos-watched`, `video-voice`, `backup-last`, `confidence`, `reports`, `mixed-history`, `sketch`, `saved`. Backups export every localStorage key, so new keys are included automatically.
- Flashcard ids are `'a' + index` (the deck was replaced with the AQA Physics deck; old `'c'` ids are ignored), so **only append** new cards to `CARDS` (never insert or reorder), or saved progress maps to the wrong cards. The same applies to IQ bank items (ids by index) and `POTW` (indexed by week). Keep keys and formats backwards compatible.
- Mock-interview recordings use MediaRecorder, stay in memory and are never uploaded.
- **Maths formatting:** a MutationObserver in `index.html` runs `mathify()` on everything rendered in `#app`, turning `e^(−x²)`, `x^2`, `c_rms`, `k_B` into proper superscripts and subscripts. Writing questions with `^(...)` and `_x` notation is fine; never put `^` or `_` in non-maths text.
- **Scratchpad:** question screens call `setScratch(true)` (a new question resets the pad); `leave()` hides it, and result screens call `setScratch(false)`.
- **Mistake bank:** every quiz must call `mbAdd({src, prompt, stem?, right, wrong:[3], explain, vid?, yt?})` for wrong answers (not for working-memory items, whose stimulus is gone).
- **Video links:** review items may carry `vid` (a `VIDEOS` id, from `videoFor`) and `yt` (a YouTube search string); `reviewHtml` shows them on wrong answers. Video lessons are original, written as scenes `{h, show, say}`; `say` is spoken aloud, so write it in plain words (no symbols). Graph visuals use `VGR(fn, caption)` and diagrams `VDG(xLabel, yLabel, items)`.
- **Confidence + report row:** every multiple-choice question screen inserts `qTools(item, src)` above its options and calls `confRecord(ok)` when answered (`extras.js`). Open questions use `qTools(item, src, {noConf:true})` for the report flag only. Calibration shows on the Progress page.
- **"Haven't learnt this yet":** part of `qTools` on multiple-choice quizzes (never the IQ test). Each quiz screen calls `skipSetup(it, feedbackId, {vid,yt}, isLast, record, onNext)` after rendering; skipped items carry `skip:true`, are left out of scores (`scoreLine`) and accuracy stats, never go to the mistake bank, and appear in their own "not covered yet" group in `reviewHtml`.
- **Question reports:** the ⚑ Report button opens a pre-filled GitHub issue labelled `question-report`. Scheduled updates must check open issues whose title starts with "Question report:" (the label only applies if it exists in the repo), fix the questions (an item may be corrected in place: fixing text keeps its id/index), and write "Fixes #N" in the PR body so merging closes them.
- **Quiz runner:** `quizRun({title, items, back, again, onDone})` in `extras.js` runs any list of `{src, prompt, stem?, right, wrong, explain, vid?, yt?}` with review, mistakes and confidence (used by Mixed 15). Prefer it for new quizzes.
- **Answer review:** quizzes end with `reviewHtml(items)` (your answer, the correct answer and the explanation, mistakes first). Any new quiz screen should record `{prompt, stem, chosen, right, ok, explain}` per question and show it.

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
- `PHY` entries: `id`, `t` (topic index into `PHY_TOPICS`), `l` (difficulty 1–3), `q`, `h` (hints, in order), `a` (worked answer HTML), `f` (follow-ups: `[question, answer]` pairs; every question should have two, used by the mock interview).
- Answers should state assumptions, use round numbers, give a sanity check, and say what tutors look for where useful.

## Testing before a PR
Serve with `python3 -m http.server`, then drive it with Playwright (Chromium is preinstalled; `require('playwright')` works). At minimum:
run all three modes to the results screen, validate every bank item and a few thousand generated items (one correct option, no duplicates),
check a memory item hides its stimulus, open a physics question, reveal hints and the answer, and rate it. Watch for console errors.
Don't kill the server with `pkill -f` on a pattern that also matches your own command.

## Processing speed
`tools.js` symbol-search task (60 s, correct minus wrong). It is deliberately **not** included in the IQ estimate because there are no norms; it is compared with the owner's own history only.

## Adding questions (the nightly job does this)
- Physics interview: append to `PHY` via `PHY.push(...)` with unique ids, 2–3 hints, a worked answer and exactly two follow-ups.
- A-level: append to the banks with a valid topic index, or add generators. Keep topics balanced; check facts against the spec.
- IQ: append to `EXTRA.V/Q/L` in `iq-bank.js`. Flashcards: append to `CARDS` (AQA Physics only, `[topicIndex, front, back]`, topics as `CARD_CATS`, nothing from the data booklet). Problems of the week: append to `POTW` (university level is welcome; prefix the prompt with "(University level)").
- Validate: every item has four distinct options with the correct one first, no `undefined`/`NaN`, and the browser test passes.

## Continuous improvement (owner's instruction)
The owner wants the app to keep getting better even when they are not involved, and approves changes by merging PRs.
The nightly session, after adding questions, builds **one small improvement** from the *auto* list in `IDEAS.md` (or a clear
bug fix / polish it notices), and may add new ideas to `IDEAS.md`. Rules:
- Small and safe: one feature or fix per night, fully tested (Playwright), with the back arrow, `leave()`, answer review and maths formatting conventions followed.
- **Never** without approval: removing or renaming features, changing IQ scoring, breaking saved data formats, adding external services, collecting or uploading any data, or anything in the *needs approval* list.
- Describe the improvement clearly in the PR body (what, why, how to try it) so the owner can decide; mark it `[~]` in `IDEAS.md`, and `[x]` once merged.

## Roadmap
- More physics questions and follow-ups; the owner will say which topics feel too easy or hard.
- More bridging topics, flashcards and problems of the week.
- Video explanations for wrong answers (owner's long-term idea; needs a source of videos or generated explanations).
- A 9am daily-drill reminder needs Web Push with a server, which this static site does not have; the owner was pointed to an iPhone Reminders / Shortcuts automation instead.
- Grow written IQ banks further so the 30-minute test repeats less.
- Possibly calibrate difficulty using open data (e.g. openpsychometrics.org) or ICAR if access arrives.
