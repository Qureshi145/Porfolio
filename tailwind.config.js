/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ml: "1200px",
        Xs: "340px",
        ms: "876px",
        xms: "527px",
        xssm: "420px",
        xsm: "369px",
      },
    },
  },
  plugins: [],
};
