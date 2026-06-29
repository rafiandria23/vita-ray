/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        page: '#0A0A0A',
        card: '#141414',
        'card-hover': '#1C1C1C',
        border: '#2A2A2A',
        primary: '#F0EDE6',
        secondary: '#9A9790',
        muted: '#5A5855',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}