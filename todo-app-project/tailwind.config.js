/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        primary: '	#3a7bfd',
        light: {
          100: '#fafafa',
          200: '#e4e5f1',
          300: '#d2d3db',
          400: '#9394a5',
          500: '#484b6a',
        },
        dark: {
          100: '#cacde8',
          200: '#e4e5f1',
          300: '#777a92',
          400: '#4d5066',
          500: '#393a4c',
          600: '#25273c',
          700: '#161722',
        },
      },
    },
  },
  plugins: [],
};
