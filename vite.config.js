import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import alias from "@rollup/plugin-alias";
import { resolve } from "path";
import { dependencies } from "./package.json";

const projectRootDir = resolve(__dirname);

function renderChunks(deps) {
  let chunks = {};
  Object.keys(deps).forEach((key) => {
    if (["react", "react-router-dom", "react-dom"].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-router-dom", "react-dom"],
          ...renderChunks(dependencies),
        },
      },
    },
  },
  plugins: [
    react(),
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
