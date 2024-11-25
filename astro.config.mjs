// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://atulshince27.github.io',
  base: '/portfolio-v3/',
  integrations: [tailwind()],
  build: {
    assets: 'assets'
  },
});
