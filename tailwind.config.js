const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,mdx}",
    "./src/components/**/*.{js,jsx,mdx}",
    "./src/app/**/*.{js,jsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#111111",
        foreground: "#ededed",
        accent: "#ccff00",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-oswald)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
