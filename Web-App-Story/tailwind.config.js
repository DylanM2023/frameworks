/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: "480px",
      sml: "768px",
      md: "834px",
      mdl:"1024px",
      lg: "1280px",
      xl: "1440px",
    },
    

    extend: {
      fontFamily: {
        heading: ["Podkova", "serif"],
        body: ["Cabin", "sans-serif"],
        Japanese: ["Zen Antique", "serif"]
      },

      colors: {
        azure: {
          100:"hsl(215 97.1% 79%)",
          200:"hsl(215 97.1% 69%)",
          300:"hsl(215 97.1% 59%)",
          400:"hsl(215 97.1% 49%)",
          500:"hsl(215 97.1% 39%)",
        },
      },
    },
  },
  plugins: [],
}

