// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://AtulShince27.github.io/portfolio-v3/',
  integrations: [tailwind()],
  build: {
    assets: 'assets'
  },
});
