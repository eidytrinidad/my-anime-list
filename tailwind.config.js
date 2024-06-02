/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#06b6d4",
        secondary: "#4f46e5",
        warning: "#EFCA59",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
