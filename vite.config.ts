import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Repo must be named "nbsl" (lowercase) so mobile browsers don't 404.
  // https://sethhyatt8.github.io/nbsl/
  base: '/nbsl/',
  plugins: [react()],
})
