module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
    node: true
  },
  plugins: ["@typescript-eslint", "eslint-plugin-import-helpers"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "standard"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "import-helpers/order-imports": [
      "warn",
      {
        // example configuration
        newlinesBetween: "always",
        groups: ["module", "/^@shared/", ["parent", "sibling", "index"]],
        alphabetize: { order: "asc", ignoreCase: true }
      }
    ]
  }
}