import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build', // Output directory for static files
      assets: 'build',
      fallback: null // Use `index.html` as fallback for SPA
    }),
    paths: {
      base: '',
      assets: ''
    }
  }
};

export default config;
