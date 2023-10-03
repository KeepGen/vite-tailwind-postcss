import { defineConfig } from 'vite'
import { resolve } from "path";

// vite.config.js
export default defineConfig({
   build: {
      rollupOptions: {
         output: {
            assetFileNames: '[name]-[hash][extname]',
            chunkFileNames: '[name]-[hash].js',
            entryFileNames: '[name]-[hash].js',
         },
         input: {
            main: resolve(__dirname, 'index.html'),
            products: resolve(__dirname, 'page.html'),
         },
      },
   },
})
