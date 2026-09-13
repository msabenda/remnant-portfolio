import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; // Node.js module for path resolution

export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/remnant-portfolio/' : '/', // Dynamic base for dev and prod
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Robust alias for src/
    }
  },
  css: {
    postcss: './postcss.config.js' // Tailwind/PostCSS
  }
});