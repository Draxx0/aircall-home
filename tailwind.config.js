/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xl: "0rem",
      },
      screens: {
        xl: "1279px",
        lg: "1024px",
        md: "768px",
        sm: "480",
      },
    },
    extend: {
      colors: {
        /* Main color */
        "main-200": "#38bc93",
        "hover-200": "#51c4a1",
        "main-300": "#20b486",
        "main-500": "#00bd82",
        "main-700": "#06ab78",
        "main-900": "#00724e",
        "main-lighter": "#e5f8f2",
        "hover-lighter": "#ccf2e6",
        /* Secondary color */
        "secondary-500": "#012635",
        "secondary-900": "#151a28",
        "secondary-700": "#06374b",
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(128.79deg, rgba(255,255,255,.3) 0, rgba(255,255,255,.15) 100%)",
      },
      animation: {
        movingText: "movingText 40s linear infinite",
      },
      keyframes: {
        movingText: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-250%)" },
        },
      },
    },
  },
  plugins: [],
};
