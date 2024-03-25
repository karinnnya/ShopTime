/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        myColorGreen: '#7ED321',
        myColorBlue: '#4A90E2 ',
        myColorRed: '#D0021B'
      }
    }
  },
  plugins: []
}
