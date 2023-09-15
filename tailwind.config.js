/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "0rem",
      },
      screens: {
        lg: "1240px",
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
    },
  },
  plugins: [],
};
