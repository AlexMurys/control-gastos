import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/control-gastos/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "./index.html",
    },
  },
});
