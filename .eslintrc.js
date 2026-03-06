module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },

  extends: ["eslint:recommended"],

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  rules: {
    "no-unused-vars": "warn",
    "no-console": "error",
    "no-var": "error",
    "prefer-const": "warn",
    eqeqeq: "error",
    semi: ["error", "never"],
    quotes: ["error", "single"],
    indent: ["error", 2],
  },
};
