import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './resources/js'),
      '@assets': path.resolve(__dirname, './resources/assets'),
      '@components': path.resolve(__dirname, './resources/components'),
      '@pages': path.resolve(__dirname, './resources/pages'),
    },
  },
})
