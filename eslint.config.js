// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import vitest from "eslint-plugin-vitest";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      js,
      react: pluginReact,
      vitest,
    },
    extends: ["plugin:react/recommended", "plugin:vitest/recommended"],
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
]);
