module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          1: "rgb(33,33,33)",
          2: "rgb(52, 64, 84)",
        },
        gray: {
          1: "rgb(97,97,97)",
          2: "rgb(102,112,133)",
          3: "rgb(224, 224, 224)",
          4: "rgb(189, 189, 189)",
          5: "rgb(208, 213, 221)",
          bg: "rgb(249, 248, 255)",
          authBg: "rgb(240, 237, 255)",
          border: "rgb(208, 213, 221)",
          placeholder: "rgb(158, 158, 158)",
        },
        orange: {
          1: "rgb(239,160,5)",
        },
        blue: {
          1: "rgb(23, 92, 211)",
          link: "rgb(0, 0, 139)",
          link2: "rgb(49, 0, 92)",
        },
        sky: {
          1: "rgb(139, 180, 253)",
        },
        red: {
          error: "rgb(247, 85, 85)",
        },
        green: {
          success: "rgb(46, 204, 113)",
        },
      },
      lineHeight: {
        tiny: "19.6px",
      },
    },
  },
  plugins: [],
};
