import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://serprise.agency',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/hvala') && !page.includes('/thank-you'),
    }),
  ],
});
