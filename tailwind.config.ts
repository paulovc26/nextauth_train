import daisyui from "daisyui";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4338ca",

          secondary: "#4b5563",

          accent: "#075985",

          neutral: "#bfdbfe",

          "base-100": "#f5f5f4",

          info: "#38bdf8",

          success: "#00ff00",

          warning: "#facc15",

          error: "#991b1b",
        },
      },
    ],
  },
} satisfies Config;
