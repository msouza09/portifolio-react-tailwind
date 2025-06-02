/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        greenTheme: '#22C55E',           // Verde principal
        greenThemeDark: '#166534',       // Hover escuro
        grayThemeLight: '#f3f4f6',       // Fundo claro neutro (Slate-100)
        grayThemeDark: '#0f172a',        // Fundo escuro (Slate-900)
        textDark: '#111827',             // Texto para tema claro (Slate-900)
      },
      fontFamily: {
        outfit: ['"Outfit"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
