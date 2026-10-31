# IQ-test
Experimental project on the use of Artificial Intelligence to create a brief standardised taster IQ test to gauge an individual's intelligence level.

## The app: IQ Lab
A phone-installable web app for physics interview preparation, daily maths/physics training and IQ testing.

| Section | What it does |
|---|---|
| Mock interview | Two problems back to back, think-aloud timer, hints, tutor follow-ups, optional voice recording, self-review |
| Physics questions | 81 open-ended Oxford-style questions with hints, worked answers and follow-ups |
| Problem of the week | A harder olympiad-style problem that changes weekly |
| Daily drill | Ten generated questions (arithmetic, standard form, orders of magnitude, calculus, units, graphs) with a streak |
| Flashcards | AQA A-level Physics definitions, laws and facts (nothing from the data booklet), spaced repetition, filter by topic |
| Bridging topics | Short first-year topics (complex numbers, Taylor series, vectors, ODEs, relativity, quantum, dimensional analysis) with problems |
| Study timer / Progress / Resources | Focus timer logged by subject, a dashboard of all stats, curated free links |
| IQ test | Seven abilities, 5/10/30 minute modes, plus a 60 s processing-speed check |
| A-level practice | AQA Physics, Edexcel Maths and AQA Economics by specification topic: written questions plus generated calculations |

### IQ test
Three lengths, all at 20 seconds per question:

| Mode | Time | Questions |
|------|------|-----------|
| Quick | 5 min | 15 |
| Standard | 10 min | 30 |
| Full | 30 min | 90 |

Seven sections, mapped onto broad abilities in the Cattell-Horn-Carroll (CHC) model used by modern IQ tests:

| Section | Ability | Source |
|---|---|---|
| Number and letter series | Fluid reasoning (induction) | Generated |
| Matrices | Fluid reasoning | Generated |
| Verbal | Crystallised knowledge | Written bank |
| Quantitative | Quantitative reasoning | Written bank |
| Logic | Fluid reasoning (deduction) | Written bank |
| Spatial rotation | Visual-spatial | Generated |
| Working memory | Working memory | Generated |

Written items live in `iq-bank.js` (plus the original bank in `index.html`).
Scores come from an item-response model (mean 100, SD 15) and are shown with a 90% range.
The model is **not calibrated on real test-takers**, so results are rough estimates.

### Physics interview
`physics.js` holds open-ended questions in the style of Oxford physics interviews, across eight topics,
each with progressive hints, a worked answer, two tutor-style follow-ups and a self-rating that brings weaker questions back first.
The questions are written for this app; official Oxford material is linked from the app rather than copied.

## Using it on an iPhone
The app is a Progressive Web App: it installs to the home screen, opens full screen and works offline.

1. Host it with GitHub Pages: repo **Settings → Pages → Build and deployment → Deploy from a branch**, pick the branch and `/ (root)`.
2. Open the Pages URL (`https://<user>.github.io/IQ-test/`) in Safari.
3. Tap **Share → Add to Home Screen**.

After changing any app file, bump `VERSION` in `sw.js` so installed copies update.

## Running locally
```
python3 -m http.server
```
then open http://localhost:8000.
