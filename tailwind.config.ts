/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0F92E6',
          light: '#0F92E6',
          dark: '#0B6FAD',
        },
        accent: {
          DEFAULT: '#020F17',
          light: '#3e4241',
        },
      },
      screens: {
        desktopSmWidth: '900px',
        tableSmWidth: '600px',
      },
    },
  },
  plugins: [],
}
