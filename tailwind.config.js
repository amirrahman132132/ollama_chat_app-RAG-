/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#474deb",
        "color-1": "#e5e5e5",
        "color-2": "#999999",
        "color-3": "#4c4c4c",
        "shade-1": "#000000",
        "shade-2": "#141414",
        "shade-3": "#242424",
      },
    },
    borderRadius: {
      theme: "0.5rem",
    },
  },
  plugins: [],
};
