module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dfe9f3: "#dfe9f3",
      },
      backgroundImage: {
        "gradient-to-t": "linear-gradient(to right, var(--tw-gradient-stops))",
        "gradient-right": "linear-gradient(to right, #d7d2cc, #304352)",
      },
      textStroke: {
        2: "2px",
      },
      textStrokeColor: {
        black: "#000",
      },
    },
  },
  variants: {},
  plugins: [],
};
