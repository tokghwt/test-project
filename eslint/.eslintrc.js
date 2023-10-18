module.exports = {
  // https://eslint.org/docs/latest/use/configure/
  // https://typescript-eslint.io/getting-started/
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    // https://typescript-eslint.io/packages/parser#configuration
    project: "./typescript/tsconfig.json",
  },
  plugins: [
    "@typescript-eslint",
  ],
};
