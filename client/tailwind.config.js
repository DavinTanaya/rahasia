/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FEFCE5",
        brown: "#8B5E3C",
        yellow: "#FCB416",
        orange: "#F57E20",
      },
    },
  },
  plugins: [],
};
