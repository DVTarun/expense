import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Local dev server
  },
  build: {
    outDir: 'dist', // Vite default build output
  },
  base: '/myexpense/', // important for Tomcat WAR context
})
