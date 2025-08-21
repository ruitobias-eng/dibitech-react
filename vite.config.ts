import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    base: mode === "production" ? "/dibitech-react/" : "/",
    build: {
      outDir: "dist",
      sourcemap: false,
      emptyOutDir: true,
    },
    preview: {
      port: 4173,
      strictPort: true,
    },
    server: {
      port: 3000,
      strictPort: true,
      host: true,
    },
  }
})
