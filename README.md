# Red Division — NBSL

Unofficial newsletter for the NBSL Red Division (Fair Blue, Graylyn Crest, Silverside, Lane, Crestview).

## Live site

https://sethhyatt8.github.io/NBSL/ (no `#` in the URL — use this exact link on your phone)

## GitHub Pages setup (do this once)

1. **Settings → Pages**
2. **Build and deployment → Source:** **Deploy from a branch**
3. **Branch:** `gh-pages` · **Folder:** `/ (root)` · Save

Pushes to `main` run the deploy workflow, which updates the `gh-pages` branch.

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:5173/ (Vite dev server; no `/NBSL` prefix locally).

## Manual deploy

```bash
npm run deploy
```

Same as CI: builds `dist/` and pushes to `gh-pages`.
