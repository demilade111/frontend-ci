import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        vi: "readonly", // <-- mark vi as a global to avoid no-undef
      },
    },
    plugins: { js, react: pluginReact },
    extends: ["plugin:react/recommended", "js/recommended"],
  },
]);
