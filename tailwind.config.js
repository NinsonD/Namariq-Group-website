/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f0',
          100: '#ffe4e1',
          200: '#ffc9c1',
          300: '#ff9f90',
          400: '#ff6755',
          500: '#f34924', // main primary
          600: '#e03817',
          700: '#ba2a11',
          800: '#992514',
          900: '#7e241a',
        },
        secondary: {
          50: '#f0f7ff',
          100: '#e0eeff',
          200: '#b8ddff',
          300: '#7cc2ff',
          400: '#3aa1ff',
          500: '#005bbb', // main secondary
          600: '#0047a3',
          700: '#003785',
          800: '#002e6d',
          900: '#00295c',
        },
        neutral: {
          850: '#1f2937',
          950: '#0a1019',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        display: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
