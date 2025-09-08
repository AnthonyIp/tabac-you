import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimisations de build pour le SEO
    minify: 'terser',
    sourcemap: mode === 'development' ? 'inline' : false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          framer: ['framer-motion'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-slot', '@radix-ui/react-toast', '@radix-ui/react-tooltip']
        }
      }
    },
    // Optimisation des assets
    assetsInlineLimit: 4096,
    // Compression
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production'
      }
    }
  },
  // Optimisations de développement
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  }
}));
