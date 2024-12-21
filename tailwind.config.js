/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#1e1e24",
        white: "#fff8f0",
        red: "#840b25",
        onyx: "#403F4C",
        absoluteBlack: "#000000",
        night: "#111111",
        electricBlue: "#52D1DC",
        persianGreen: "#1B998B",
        cinereous: "#A49691",
        isabelline: "#F4EEE8",
        robbinBlue: "#49C0CB",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
