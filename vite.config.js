import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/QuickCart/', // or '/quickcart/' if repo is lowercase
})
