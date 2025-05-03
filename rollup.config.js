import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import packageJson from "./package.json" with { type: "json" };

const external = [
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.peerDependencies || {}),
];

export default {
  input: "./src/index.tsx",
  output: {
    file: packageJson.module,
    format: "esm",
    sourcemap: true,
    // NOTE: for supporting RSC
    // eslint-disable-next-line quotes
    banner: '"use client";',
  },
  external,
  plugins: [
    resolve(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    commonjs(),
    terser({
      compress: { directives: false },
    }),
  ],
};
