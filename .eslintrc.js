/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["prettier"],
  plugins: [],
  globals: {
    node: true,
  },
  rules: {
    "no-undef": "off",
  },
};
