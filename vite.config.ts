// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // Pour un support optimal des modules modernes
  },
  resolve: {
    alias: {
      react: 'react',
      'react-dom': 'react-dom',
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components/react'),
      '@polymer_components': path.resolve(__dirname, './src/components/polymer'),
      '@lit_components': path.resolve(__dirname, './src/components/lit')
    }
  },
});
