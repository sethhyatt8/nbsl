# Red Division — NBSL

Unofficial newsletter for the NBSL Red Division (Fair Blue, Graylyn Crest, Silverside, Lane, Crestview).

## Live site

https://sethhyatt8.github.io/nbsl/

**Important:** The GitHub repo must be named **`nbsl`** (all lowercase). Browsers and phones often force lowercase URLs; a repo named `NBSL` will 404 at `/nbsl/`.

### One-time repo rename (if the site 404s)

1. GitHub → **sethhyatt8/NBSL** → **Settings** → **General**
2. **Repository name** → change to `nbsl` → **Rename**
3. **Settings → Pages** → Source: **Deploy from a branch** → `gh-pages` / **(root)**

Pushes to `main` update the `gh-pages` branch automatically.

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:5173/nbsl/

## Manual deploy

```bash
npm run deploy
```

Same as CI: builds `dist/` and pushes to `gh-pages`.
