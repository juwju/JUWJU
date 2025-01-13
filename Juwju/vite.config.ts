import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    port: 8080, // Remplacez 3000 par le port souhaité
    strictPort: true, // Empêche Vite de choisir un autre port si celui-ci est occupé
  },
  clearScreen: false, // Recommandé pour Tauri afin d'afficher les erreurs Rust
});
