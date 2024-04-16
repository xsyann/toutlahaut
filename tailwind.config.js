/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        landing: "url('https://files.toutlahaut.net/img/bg.jpg')",
      },
      fontFamily: {
        sans: ["var(--font-franklin)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
