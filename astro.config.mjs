import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://nicodinata.dev",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
