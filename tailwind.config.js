import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        // primary: "#1c1c22",
        // accent: "#00e187",
        primary: "#2BE6A7",

        secondary: "#0891b2",

        accent: "#0d9488",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
