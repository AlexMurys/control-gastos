import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // base: "/control-gastos/", // Asegúrate de que esto esté configurado correctamente
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "./index.html",
    },
  },
});
