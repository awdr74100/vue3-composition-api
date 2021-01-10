const tailwindBootstrapGrid = require('tailwind-bootstrap-grid');

module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  variants: {
    extend: {},
  },
  plugins: [
    tailwindBootstrapGrid({
      gridGutterWidth: '2rem',
    }),
  ],
};
