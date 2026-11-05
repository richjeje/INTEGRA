import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  redirects: { '/met/': '/integra-steel/', '/rent/': '/integra-rigging/' },
  devToolbar: { enabled: false },
});

