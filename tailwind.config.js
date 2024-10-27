/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
},

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

