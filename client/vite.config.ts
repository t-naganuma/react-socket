import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@/": path.join(__dirname, "./src/"),
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  server: {
    port: 8080,
    open: true,
    origin: "http://127.0.0.1:8080",
  },
});
