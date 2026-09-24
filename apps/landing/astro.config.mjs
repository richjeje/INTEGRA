import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  redirects: {
    '/': '/integra/'
  },
  devToolbar: { enabled: false },
});
