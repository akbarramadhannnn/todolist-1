import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
// import { dependencies } from "./package.json";

// const projectRootDir = resolve(__dirname);

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
  //     output: {
  //       chunkFileNames: "assets/js/[name]-[hash].js",
  //       entryFileNames: "assets/js/[name]-[hash].js",

  //       assetFileNames: ({ name }) => {
  //         if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
  //           return "assets/images/[name]-[hash][extname]";
  //         }

  //         if (/\.css$/.test(name ?? "")) {
  //           return "assets/css/[name]-[hash][extname]";
  //         }

  //         // default value
  //         // ref: https://rollupjs.org/guide/en/#outputassetfilenames
  //         return "assets/[name]-[hash][extname]";
  //       },
  //     },
  //   },
  // },
  // build: {
  // rollupOptions: {
  //   input: {
  //     app: "./src/main.jsx",
  //   },
  // },
  // rollupOptions: {
  //   input: {
  //     main:  "./src/main.jsx",
  //   },
  //   output: {
  //     inlineDynamicImports: false,
  //     format: "es",
  //     entryFileNames: "[name].min.js",
  //     chunkFileNames: "[name]-[hash].min.js",
  //   },
  // },
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
    // alias({
    //   entries: [
    //     {
    //       find: "@",
    //       replacement: resolve(projectRootDir, "src"),
    //     },
    //   ],
    // }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
