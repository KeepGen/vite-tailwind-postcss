import { defineConfig } from 'vite'

// vite.config.js
export default defineConfig({
   build: {
      rollupOptions: {
         output: {
            assetFileNames: '[name]-[hash][extname]',
            chunkFileNames: '[name]-[hash].js',
            entryFileNames: '[name]-[hash].js',
         },
      },
   },
})
