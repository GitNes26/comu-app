/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#161622",
            secondary: {
               DEFAULT: "#FF9C01",
               100: "#FF9001",
               200: "#FF8E01",
            },
            black: {
               DEFAULT: "#000",
               100: "#1E1E2D",
               200: "#232533",
            },
            gray: {
               100: "#CDCDE0",
            },
         },
         fontFamily: {
            pthin: ["Montserrat-Thin", "sans-serif"],
            pextralight: ["Montserrat-ExtraLight", "sans-serif"],
            plight: ["Montserrat-Light", "sans-serif"],
            pregular: ["Montserrat-Regular", "sans-serif"],
            pmedium: ["Montserrat-Medium", "sans-serif"],
            psemibold: ["Montserrat-SemiBold", "sans-serif"],
            pbold: ["Montserrat-Bold", "sans-serif"],
            pextrabold: ["Montserrat-ExtraBold", "sans-serif"],
            pblack: ["Montserrat-Black", "sans-serif"],
         },
      },
   },
   plugins: [],
};
