/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        purpleTheme: {
          light: '#D6BBFB',
          default: '#9F7AEA',
          dark: '#6B46C1',
        }
      }

    },
  },
  plugins: [],
}

