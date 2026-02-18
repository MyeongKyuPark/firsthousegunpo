import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/firsthousegunpo/', // Added for GitHub Pages deployment
    plugins: [react()],
})
