/** @type {import('tailwindcss').Config} */
export const darkMode = "class";
export const content = [
  "./src/**/*.{js,jsx,ts,tsx,mdx}", // Make sure your paths are included
];
export const theme = {
  extend: {
    animation: {
      "wave-slow": "wave 12s linear infinite",
      "wave-medium": "wave 8s linear infinite reverse",
      "wave-fast": "wave 5s linear infinite",
    },

    keyframes: {
      wave: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-50%)" },
      },
    },

    colors: {
      orange: {
        500: "#FF6F00",
      },
      charcoal: "#333333",
    },
  },
};
export const plugins = [];
