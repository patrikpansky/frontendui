import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Enables React-specific optimizations and HMR
import path from "path"; // Provides utilities for working with file and directory paths
import compression from "vite-plugin-compression";
import webExtension from 'vite-plugin-web-extension'
import { VitePWA } from "vite-plugin-pwa";

const PWA = () => {
  return VitePWA({
    manifest: {
      name: "Your App",
      short_name: "App",
      icons: [
        {
          src: "/icon-192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icon-512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
  })
}

// Export the Vite configuration
export default defineConfig({
  // base: "/app/",


  // Plugins section
  plugins: [
    react(), // Adds React plugin for handling JSX/TSX and fast refresh
    compression(), // Add gzip compression
    webExtension({
      manifest: './manifest.json'
    })
  ],

  // Module resolution settings
  resolve: {
    preserveSymlinks: true, // Prevents breaking symbolic links, useful for monorepos
    alias: {
      // Define aliases for modules, resolving them to specific paths
      "@hrbolek/readers": path.resolve(__dirname, "../../packages/readers/src"),
      "@hrbolek/visualisers": path.resolve(__dirname, "../../packages/visualisers/src"),
    },
  },

  // // Dependency optimization settings
  // optimizeDeps: {
  //   include: [
  //     // List dependencies to pre-bundle for faster development
  //     'invariant',
  //     'classnames',
  //     'react-bootstrap',
  //   ],
  //   exclude: [
  //     // Exclude specific libraries or modules from optimization
  //     "@hrbolek/readers",
  //     "@hrbolek/visualisers",
  //   ],
  // },

  // Development server configuration
  server: {
    proxy: {
      // Define proxy rules for API requests
      // Example: Requests to /api/gql are proxied to http://localhost:33001
      '/api/gql': 'http://localhost:34001',
    },
    watch: {
      // Specify paths to watch for changes
      ignored: [
        // Ensure certain packages are not ignored during file watching
        '!../../packages/readers/**',
        '!../../packages/visualisers/**',
      ],
    },
    hmr: {
      overlay: true, // Display overlay in the browser for HMR errors
    },
  },

  // Build options
  build: {
    rollupOptions: {
      external: [
        'shared', // Prevent specific libraries from being bundled into the output
      ],
    },
  },
});
