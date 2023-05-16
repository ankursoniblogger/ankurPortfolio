/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('https://ankitsoni.in/project/bg-line.png')",
      },
    },
    colors: {
      darkGreen: "#1B2B1C",
      lightGreen: "#BFF101",
      black: "#050505",
      white: "#ffffff",
    },
    fontFamily: {
      jack: ["Plus Jakarta Sans"],
    },
  },
  plugins: [],
};
