/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: "Inter, sans-serif",
        SfPro: "SF Pro Display , sans-serif",
      },
      fontSize: {
        
        "2xl": "22px",
        "3xl":"24px",
        "4xl": "40px",
        "5xl": "49px",
        "6xl": "50px",
        "7xl": "53px",
        "8xl": "87px",
        "9xl": "90px",
      },
    },
  },
  plugins: [],
};
