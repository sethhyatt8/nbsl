# Red Division — NBSL

Unofficial newsletter and results hub for the **North Brandywine Swim League** Red Division:

Fair Blue, Graylyn Crest, Silverside, Lane, and Crestview.

## Live site

https://sethhyatt8.github.io/NBSL/

Deploys automatically when `main` is pushed (GitHub Actions → Pages).

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173/NBSL/).

## Build

```bash
npm run build
npm run preview
```

`vite.config.ts` sets `base: '/NBSL/'` for this GitHub Pages project site.

## Manual deploy (optional)

```bash
npm run deploy
```

Uses `gh-pages` to publish `dist/` if you prefer that over Actions.

## Data (later)

Meet results will import from Swimmingly `.sd3` exports or manual entry into `public/data/`.
