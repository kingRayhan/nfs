module.exports = {
  purge: [],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#121923",
        warning: "#FDBB40",
        danger: "#ED1C24"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/aspect-ratio")]
};
