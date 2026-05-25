import { copyFileSync } from 'node:fs'

// GitHub Pages serves 404.html for unknown paths; SPA needs the same shell as index.html.
copyFileSync('dist/index.html', 'dist/404.html')
