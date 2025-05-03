/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended"],
  rules: {
    quotes: ["error", "double"],
  },
};

module.exports = config;
