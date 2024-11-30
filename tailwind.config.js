/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-slow-reverse': 'spin 15s linear infinite reverse',
      },
    },
  },
  plugins: [],
};