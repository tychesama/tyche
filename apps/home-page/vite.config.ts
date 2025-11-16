import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path'; 

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    fs: {
      // allow serving files from the monorepo root / shared folder
      allow: [
        path.resolve(__dirname, '.'),           // apps/home-page
        path.resolve(__dirname, '../../'),      // monorepo root
        path.resolve(__dirname, '../../shared') // shared folder
      ]
    }
  },
  resolve: {
    alias: {
      // keep simple alias and also a wildcard for tooling
      "@shared": path.resolve(__dirname, "../../shared"),
     
    }
  }
});
