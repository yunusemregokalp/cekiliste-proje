
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/cekiliste-proje/'  // GitHub Pages için repo adıyla uyumlu base path
})
