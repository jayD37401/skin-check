/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#0D5399",
          dark: "#0D4691",
        },
        lightgray: "#e9edf0",
      },
    },
  },
  plugins: [],
};
