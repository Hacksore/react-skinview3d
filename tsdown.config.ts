import { defineConfig } from "tsdown";

export default defineConfig([
  {
    // NOTE: this is the default but update if your entrypoint differs
    entry: "src/index.tsx",
    format: ["esm", "cjs"],
    platform: "neutral",
    sourcemap: true,
  },
]);
