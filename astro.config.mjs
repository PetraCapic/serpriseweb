import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync } from 'node:fs';

// Prazan blog (bez članaka) je noindex, pa ne ide ni u sitemap.
const hasPosts = readdirSync('./src/content/blog').some((f) => f.endsWith('.md'));

export default defineConfig({
  site: 'https://serprise.agency',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/hvala') && !page.includes('/thank-you') && (hasPosts || !page.endsWith('/blog/')),
    }),
  ],
});
