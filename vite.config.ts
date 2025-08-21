import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory
    const env = loadEnv(mode, process.cwd(), "")
  
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    base: mode === 'production' ? "/dibitech-react/" : "/",
    build: {
      outDir: "dist",
      sourcemap: false,
      // Ensure build output is clean
      emptyOutDir: true
    },
    // Optional: Preview configuration
    preview: {
      port: 4173,
      strictPort: true,
    },
    // Optional: Development server configuration
    server: {
      port: 3000,
      strictPort: true,
      host: true,
    }
  }
})