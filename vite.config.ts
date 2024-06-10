import { defineConfig } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [remix()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app/"),
    },
  },
  define: {
    "import.meta.vitest": "undefined",
  },
});
