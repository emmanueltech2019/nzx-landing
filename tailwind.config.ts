import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        'slide-in-top-smooth': {
          '0%, 100%': { transform: 'translateY(-150%)' },
          '50%': { transform: 'translateY(0)' },
        },
        'slide-in-bottom-smooth': {
          '0%, 100%': { transform: 'translateY(150%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-in-top-smooth': 'slide-in-top-smooth 6s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite',
        'slide-in-bottom-smooth': 'slide-in-bottom-smooth 6s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite',
      },
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
  ],
};
export default config;
