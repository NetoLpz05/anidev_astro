// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node'; 

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',              
  adapter: node({                
    mode: 'standalone',
  }),
  env: {
    schema: {
      SHOW_ANY_BUTTON: envField.boolean({ context: 'server', access: 'public' }),
      SHOW_BUY_BUTTON: envField.boolean({ context: 'server', access: 'public' }),
      SCORE_API_ENDPOINT: envField.string({ context: 'server', access: 'public' })
    }
  }
});