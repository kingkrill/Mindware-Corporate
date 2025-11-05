// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  
  // 1. REPLACE this line
  site: 'https://kingkrill.github.io',

  // 2. ADD this line
  base: '/Mindware-Corporate',

  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});