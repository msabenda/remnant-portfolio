/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: '#1A1A1A',
        blue: {
          500: '#3B82F6',
          600: '#2563EB'
        }
      }
    },
    fontFamily: {
      sans: ['"Anonymous Pro"', 'monospace']
    }
  },
  plugins: [require('flowbite/plugin')]
};