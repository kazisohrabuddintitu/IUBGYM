/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{ 
        "iub-color-primary": "#7f1d1d",
        "nav-color": '#d1d5db',
      },
      backgroundImage: theme=>({
        'iub': "url('iub.png')"
      })
    },
    fontFamily:{
      Roboto: ["Roboto, sans-serif"],
    },
    container:{
      padding:"2rem",
      center:true,
    },
    screens:{
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
}
