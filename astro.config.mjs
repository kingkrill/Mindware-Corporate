// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// This is now a simple object. All errors are gone.
export default defineConfig({
  // This is for the live GitHub Pages site
  site: 'https://kingkrill.github.io',
  
  // This tells Astro to build all links relative to this subfolder.
  // This will fix your font errors.
  base: '/Mindware-Corporate',

  // Your integrations
  integrations: [mdx(), sitemap()],

  // Your Vite config
  vite: {
    plugins: [tailwindcss()],
  },
});