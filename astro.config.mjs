// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  base: '/motion',
  integrations: [
    tailwind({
      // Use the CommonJS configuration file
      configFile: './tailwind.config.cjs',
    }),
    mdx()
  ]
});