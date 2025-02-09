/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: "#FF9D00",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        epilogue: ["Epilogue", "sans-serif"],
        fredoka: ["Fredoka One", "cursive"],
        oregano: ["Oregano", "sans-serif"],
        fugazOne: ["Fugaz One", "Oregano"],
        Amiri: ["Amiri", "Oregano"],
      },
    },
  },
  plugins: [],
};
