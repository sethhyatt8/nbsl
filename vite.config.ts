import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Project site: https://sethhyatt8.github.io/NBSL/
  base: '/NBSL/',
  plugins: [react()],
})
