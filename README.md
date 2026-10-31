# IQ-test
Experimental project on the use of Artificial Intelligence to create a brief standardised taster IQ test to gauge an individual's intelligence level.

## The app
A single-page web app (`index.html`) with three test lengths, all at 20 seconds per question:

| Mode | Time | Questions |
|------|------|-----------|
| Quick | 5 min | 15 |
| Standard | 10 min | 30 |
| Full | 30 min | 90 |

Question types: number and letter series, Raven-style matrices, verbal and logic, and spatial rotation.
Series, matrices and rotation items are generated fresh on every attempt; verbal and logic items come from a fixed bank.
Scores come from an item-response model (mean 100, SD 15) and are shown with a 90% range.
The model is **not calibrated on real test-takers**, so results are rough estimates.

## Using it on an iPhone
The app is a Progressive Web App: it installs to the home screen, opens full screen and works offline.

1. Host it with GitHub Pages: repo **Settings → Pages → Build and deployment → Deploy from a branch**, pick the branch and `/ (root)`.
2. Open the Pages URL (`https://<user>.github.io/IQ-test/`) in Safari.
3. Tap **Share → Add to Home Screen**.

After changing `index.html`, bump `VERSION` in `sw.js` so installed copies update.

## Running locally
```
python3 -m http.server
```
then open http://localhost:8000.
