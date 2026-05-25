import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative paths for GitHub Pages project site (…/NBSL/).
  base: './',
  plugins: [react()],
})
