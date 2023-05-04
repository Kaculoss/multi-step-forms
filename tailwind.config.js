/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "keezy-bold": ["var(--UB)"],
        "keezy-medium": ["var(--UM)"],
        "keezy-regular": ["var(--UR)"],
      },
      keyframes: {
        "right-slide-in": {
          "0%": { transform: "translateX(100px)", opacity: 0 },
          "50%": { transform: "translateX(16px)", opacity: 0 },
          "100%": { transform: "translateX(0px)", opacity: 1 },
        },
        "left-slide-in": {
          "0%": { transform: "translateX(-100px)", opacity: 0 },
          "50%": { transform: "translateX(-16px)", opacity: 0 },
          "100%": { transform: "translateX(0px)", opacity: 1 },
        },
      },
      animation: {
        "right-slide-in": "right-slide-in 700ms ease-in-out",
        "left-slide-in": "left-slide-in 700ms ease-in-out",
      },
    },
  },
  plugins: [],
};
