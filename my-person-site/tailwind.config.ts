import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-conic-gradient': 'conic-gradient(from 179.65deg at 50% 50%, #6301DB 0deg, #9900FF 100.8deg, #5953FF 165.6deg, #6A00FF 248.4deg, #8AA2FF 297deg, #6301DB 360deg)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
