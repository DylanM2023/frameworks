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
    animation:{
      slowspin: "spin 100s linear infinite"
    },
      colors: {
        azure: {
          100:"hsl(215 97.1% 79%)",
          200:"hsl(215 97.1% 69%)",
          300:"hsl(215 97.1% 59%)",
          400:"hsl(215 97.1% 49%)",
          500:"hsl(215 97.1% 39%)",
        },
        cyan: {
          100: "hsl(186 100% 75.3%)",
          200: "hsl(186 100% 65.3%)",
          300: "hsl(186 100% 55.3%)",
          400: "hsl(186 100% 45.3%)",
          500: "hsl(186 100% 35.3%)",
        },

        grey: {
          100: "hsl(0 0% 01.8%)",
          200: "hsl(0 0% 11.8%)",
          300: "hsl(0 0% 21.8%)",
          400: "hsl(0 0% 31.8%)",
          500: "hsl(0 0% 41.8%)",
        }
      },
    },
  },
  plugins: [],
}

