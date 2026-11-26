// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? process.env.SITE_URL ?? 'https://mauriciodmo.com',

  integrations: [react(), mdx(), sitemap({
    filter: (page) => {
      const path = new URL(page).pathname;
      return path !== '/' && !path.startsWith('/proyectos/') && !path.startsWith('/en/proyectos/');
    },
  })],

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
