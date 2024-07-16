/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arimo", "Inter", "system-ui", "sans-serif"],
      },
      translate: {
        10: "2.5rem",
      },
    },
  },
  plugins: [],
};
