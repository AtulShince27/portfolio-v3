// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
// import * as vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  build: {
    assets: 'assets'
  },
  // adapter: vercel(),
  // vite: {
  //   resolve: {
  //     alias: {
  //       '@astrojs/vercel': '@astrojs/vercel/dist/index.js'  // ← force entry point
  //     }
  //   }
  // }
});
