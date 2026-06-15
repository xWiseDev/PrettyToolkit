// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://prettytoolkit.com',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/terms/'),
      lastmod: new Date('2026-06-15'),
      changefreq: 'weekly',
      serialize(item) {
        if (item.url === 'https://prettytoolkit.com/') {
          item.priority = 1;
        } else if (/\/(luxira|sincefy|sopora)\/$/.test(item.url)) {
          item.priority = 0.9;
        } else if (item.url.endsWith('/support/') || item.url.endsWith('/about/')) {
          item.priority = 0.7;
        } else {
          item.priority = 0.5;
        }

        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
