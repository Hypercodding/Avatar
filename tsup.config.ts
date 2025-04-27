import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/Avatar.tsx"], // or .ts if you have no jsx
  format: ["esm", "cjs"], // modern ESM and CommonJS
  dts: true, // generate .d.ts types
  sourcemap: true, // source maps for debugging
  clean: true, // clean dist/ before build
});
