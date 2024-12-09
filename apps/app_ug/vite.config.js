import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    preserveSymlinks: true,
    alias: {
      "shared": path.resolve(__dirname, "../../packages/shared/src"),
    },
  },
  optimizeDeps: {
    exclude: ['shared'], // Replace 'shared' with your library's name
  },  
  server: {
    watch: {
      ignored: ['!../../packages/shared/**'], // Adjust path to your library
    },
    hmr: {
      overlay: true,
    },
  },
  build: {
    rollupOptions: {
      external: ['shared'], // Exclude library from being bundled
    },
  },
});
