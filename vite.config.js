import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "https://divyeshdv7.github.io/t2", // <-- your GitHub repo name
  plugins: [react()],
})
