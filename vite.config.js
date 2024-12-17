import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://third-party-api.com', // Replace with the third-party API URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite "/api" to the base URL
        secure: false, // Set to false if the SSL certificate is invalid
      },
    },
  },
});
