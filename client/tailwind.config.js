/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")], // ✅ THIS LINE FIXES YOUR ERROR
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        secondary: "#666666",
        background: "#FFFFFF",
        surface: "#F7F7F7",
        accent: "#FF4C3B",
        border: "#EEEEEE"
      }
    },
  },
  plugins: [],
};