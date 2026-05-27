import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "https://github.com/Descode8/react-final-proj.git",
  plugins: [react()],
})
