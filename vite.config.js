import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { boneyardPlugin } from 'boneyard-js/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), boneyardPlugin(), tailwindcss()],
});
