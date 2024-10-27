/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'], 
      },
      // backgroundImage: {
      //   'welcoming-page': "url('/images/bg-welcoming-page.jpg')",
      // }
    },
  },
  plugins: [],
}

