/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      inconsolata: ["Inconsolata"],
    },
    extend: {
        colors: {
            "baseLight": "#90FFCC",
            "baseDark": "#46A95C",
        }
    },
  },
  plugins: [],
}
