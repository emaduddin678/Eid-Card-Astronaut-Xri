/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sansita: ["Sansita", "sans-serif"],
    },
    extend: {
      screens: {
        xsm: "400px",
        llg: "1185px"
      },
    },
  },
  plugins: [],
};

// font-family: "Sansita", sans-serif;
