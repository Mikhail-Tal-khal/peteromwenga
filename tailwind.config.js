/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#EDF1EA",
        chalk: "#FBFCF9",
        ink: "#0F231E",
        pine: "#1E4C41",
        moss: "#4A7A6B",
        ochre: "#C8912A",
        hairline: "#C6D2CB",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        legend: "0.18em",
      },
      maxWidth: {
        page: "76rem",
      },
    },
  },
  plugins: [],
};
