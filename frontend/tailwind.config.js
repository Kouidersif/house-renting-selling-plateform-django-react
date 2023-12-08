/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#3A0CA3",
        "purple-munsell":"#392F5A",
        "midnight-blue":"#2C2445",
        "charcoal":"#3C3C3C",
        "electric":"#4361EE",
        "malibu":"#4CC9F0",
        "purple-heart":"#7209B7",
        "razzmatazz":"#F72585",
        "rich-black":"#2B2B2B",
        "custom-gray-dark":"#808080",
        "light-red":"#FFE1E1",
        "light-blue":"#D7EEFF",
        "light-green":"#F1FFF1",
      }      
    },
  },
  plugins: [],
}

