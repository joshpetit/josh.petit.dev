/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inconsolata: ["Inconsolata"],
      "noto-sans": ["Noto Sans"],
    },
    extend: {
      colors: {
        baseLight: "#90FFCC",
        primary: "#F4AD47",
        baseDark: "#46A95C",
      },
      dropShadow: {
        cool: "-7px 7px 0px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
