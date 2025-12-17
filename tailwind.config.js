module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#71EFFF",
          dark: "#0FB7C9",
        },
        white: "#fff",
        purple: "#3f3cbb",
        tahiti: "#3ab7bf",
        bermuda: "#78dcca",
        midnight: "#121063",
        
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        fancy: ["Space Grotesk", "sans-serif"],
        script: ["cursive"],
      },
    },
  },
  plugins: [],
};
