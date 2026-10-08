
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://fhero98.github.io',
  base: '/developer-portfolio',

  vite: {
    plugins: [tailwindcss()]
  }
});
