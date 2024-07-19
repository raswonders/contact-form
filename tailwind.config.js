/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "grey-900": "rgba(42, 65, 68, 1)",
        "grey-500": "rgba(134, 162, 165, 1)",
        white: "rgba(255, 255, 255, 1)",
        "green-600": "rgba(12, 125, 105, 1)",
        "green-200": "rgba(224, 241, 232, 1)",
        red: "rgba(215, 60, 60, 1)",
      }, 
      fontFamily: {
        karla: "Karla",
        inter: "Inter",
      },
    },
  },
  plugins: [],
};
