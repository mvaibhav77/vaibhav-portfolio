/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--my-color)",
        secondary: "var(--other-color)",
      },
      screens: {
        lg: "1300px",
        md: { min: "720px", max: "1299px" },
      },
    },
  },
  plugins: [],
};
