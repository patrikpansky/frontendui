import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  
  plugins: [react()],
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@hrbolek/uoisfrontend-shared": path.resolve(__dirname, "../../packages/shared/src"),
      "@hrbolek/uoisfrontend-gql-shared": path.resolve(__dirname, "../../packages/gql_shared/src"),
      "@hrbolek/uoisfrontend-ug": path.resolve(__dirname, "../../packages/ug/src"),
      "@hrbolek/uoisfrontend-granting": path.resolve(__dirname, "../../packages/granting/src"),
      "@hrbolek/uoisfrontend-admissions": path.resolve(__dirname, "../../packages/admissions/src")
    },
  },
  optimizeDeps: {
    include: [
      'invariant',
      'classnames',
      'react-bootstrap'
    ],
    exclude: [
      "@hrbolek/uoisfrontend-shared",
      "@hrbolek/uoisfrontend-gql-shared",
      "@hrbolek/uoisfrontend-ug",
      "@hrbolek/uoisfrontend-granting",
      "@hrbolek/uoisfrontend-admissions",
    ], // Replace 'shared' with your library's name
  },  
  server: {
    proxy: {
      // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
      '/api/gql': 'http://localhost:33001',
    },
    watch: {
      ignored: [
        '!../../packages/shared/**',
        '!../../packages/gql-shared/**',
        '!../../packages/ug/**',
        '!../../packages/granting/**',
        '!../../packages/admissions/**',
      ], // Adjust path to your library
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
