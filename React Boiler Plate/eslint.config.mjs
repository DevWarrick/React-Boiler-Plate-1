import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";

export default {
  plugins: {
    react: pluginReact,
    import: pluginImport,
    "jsx-a11y": pluginJsxA11y,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect", // Automatically detect the react version
    },
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
};
