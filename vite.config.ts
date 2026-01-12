import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      // Proxy PHP requests to PHP server
      '/mail.php': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      },
      '/quote.php': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  // Ensure proper routing for React Router
  preview: {
    port: 3000
  }
})

