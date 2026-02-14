// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';
import compress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  compressHTML: false,
  site: 'https://szczecinska.design',
  integrations: [
    sitemap(),
    robotsTxt(),
    react(),
    compress({
      CSS: false,
      JavaScript: false,
      HTML: {
        'html-minifier-terser': {
          minifyJS: {
            mangle: {
              toplevel: true,
            },
          },
        },
      },
    }),
  ],
});
