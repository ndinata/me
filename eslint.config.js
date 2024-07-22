import pluginAstro from "eslint-plugin-astro";

export default [
  ...pluginAstro.configs["jsx-a11y-recommended"],
  {
    rules: {
      "astro/no-set-html-directive": "error",
      "astro/no-exports-from-components": "warn",
      "astro/no-set-text-directive": "warn",
    },
  },
];
