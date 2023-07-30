import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    // Astro uses this full URL to generate your sitemap and canonical URLs in your final build.
    site: 'https://blog.eyadarafat.com',

	integrations: [mdx(), sitemap()],
});
