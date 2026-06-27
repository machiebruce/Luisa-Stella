// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "_astro/[name][extname]",
          entryFileNames: "_astro/[name].js",
          chunkFileNames: "_astro/[name].js",
        },
      },
    },
  },
});