const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: colors.red,
        green: colors.green,
        blue: colors.blue,
        indigo: colors.indigo,
        yellow: colors.yellow,
      },
    },
  },
  plugins: [],
};
