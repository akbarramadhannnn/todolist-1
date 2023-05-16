import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import alias from "@rollup/plugin-alias";
import { resolve } from "path";
// import { dependencies } from "./package.json";

const projectRootDir = resolve(__dirname);

// function renderChunks(deps) {
//   let chunks = {};
//   Object.keys(deps).forEach((key) => {
//     if (["react", "react-router-dom", "react-dom"].includes(key)) return;
//     chunks[key] = [key];
//   });
//   return chunks;
// }

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   rollupOptions: {
  //     input: {
  //       app: "./src/main.jsx",
  //     },
  //   },
  // },
  // base: 'https://cdn.jsdelivr.net/gh/tony19-sandbox/vite-react-single-js-file/dist/',
  // build: {
  //   cssCodeSplit: false,
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         vendor: ["react", "react-router-dom", "react-dom"],
  //         ...renderChunks(dependencies),
  //       },
  //       entryFileNames: `[name].js`,
  //       chunkFileNames: `[name].js`,
  //       assetFileNames: `[name].[ext]`,
  //     },
  //   },
  // },
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    alias({
      entries: [
        {
          find: "@",
          replacement: resolve(projectRootDir, "src"),
        },
      ],
    }),
  ],
});
