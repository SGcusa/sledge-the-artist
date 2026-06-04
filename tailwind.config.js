/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red:    { DEFAULT: '#D4A843', dark: '#b52d38' },
        amber:  { DEFAULT: '#e63946' },
        blue:   { DEFAULT: '#2d6a9f' },
        green:  { DEFAULT: '#52b788' },
        ink:    { 900: '#080808', 800: '#0f0f0f', 700: '#141414', 600: '#1a1a1a', 500: '#222222', 400: '#2a2a2a', 300: '#333333', 200: '#555555', 100: '#888888', 50: '#bbbbbb' },
        cream:  { DEFAULT: '#f0ede8' },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}