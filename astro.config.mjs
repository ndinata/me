import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://ndinata.github.io",
  base: "/me",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
