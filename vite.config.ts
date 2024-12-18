import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';
import path from 'path';

export default defineConfig({
  base: '/monitoring/',
  plugins: [
    react(),
    createSvgSpritePlugin({
      symbolId: 'icon-[name]',
      include: '/icons/*.svg',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), 
    },
  },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // or "modern"
        }
      }
    }
  });
