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
      primary: {
        light: "#FF6F00", // Vibrant orange
        dark: "#FF8C42", // Softer orange for dark mode
      },
      secondary: {
        light: "#333333", // Charcoal
        dark: "#E0E0E0", // Light gray for dark text
      },

      background: {
        light: "#FFFFFF",
        dark: "#121212", // Deep dark
      },
    },
    // eslint-disable-next-line no-dupe-keys
    animation: {
      marquee: "marquee 25s linear infinite",
      "marquee-reverse": "marquee-reverse 25s linear infinite",
    },
  },

  keyframes: {
    marquee: {
      "0%": { transform: "translateX(0)" },
      "100%": { transform: "translateX(-50%)" },
    },
    "marquee-reverse": {
      "0%": { transform: "translateX(-50%)" },
      "100%": { transform: "translateX(0)" },
    },
  },
};
export const plugins = [];
