const { defineConfig, globalIgnores } = require("eslint/config");

const globals = require("globals");

const { fixupConfigRules, fixupPluginRules } = require("@eslint/compat");

const tsParser = require("@typescript-eslint/parser");
const reactRefresh = require("eslint-plugin-react-refresh");
const jsxA11Y = require("eslint-plugin-jsx-a11y");
const reactHooks = require("eslint-plugin-react-hooks");
const js = require("@eslint/js");

const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {},
    },

    extends: fixupConfigRules(
      compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended"
      )
    ),

    settings: {
      react: {
        version: "detect",
      },
    },

    plugins: {
      "react-refresh": reactRefresh,
      "jsx-a11y": fixupPluginRules(jsxA11Y),
      "react-hooks": fixupPluginRules(reactHooks),
    },

    rules: {
      "react-refresh/only-export-components": "warn",
      "no-console": "error",
    },
  },
  globalIgnores([
    "*.js",
    "*.cjs",
    "**/node_modules/",
    "**/dist/",
    "**/vite.config.*",
    "**/jest.config.*",
  ]),
]);
