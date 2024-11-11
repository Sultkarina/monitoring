import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';

export default defineConfig({
  base: '/monitoring/',
  plugins: [
    react(),
    createSvgSpritePlugin({
      symbolId: 'icon-[name]',
      include: '/icons/*.svg',
    }),
  ],
});