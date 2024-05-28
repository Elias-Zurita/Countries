/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "ui-sans-serif", "system-ui"],
      // Puedes añadir más fuentes según sea necesario
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
