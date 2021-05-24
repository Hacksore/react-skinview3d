import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import packageJson from "./package.json";

const external = [
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.peerDependencies || {}),
];

export default {
  input: "./src/index.jsx",
  output: [
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  external,
  plugins: [resolve(), babel(), commonjs()],
};
