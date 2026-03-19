import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fffaf2",
        butter: "#ffe7b3",
        peach: "#ffd7c6",
        caramel: "#c77d4c",
        ink: "#4e3d35",
        mint: "#dff3e8",
        sky: "#dfeeff",
        rose: "#ffe2ea",
      },
      boxShadow: {
        float: "0 20px 50px rgba(160, 116, 90, 0.12)",
        card: "0 12px 30px rgba(168, 124, 96, 0.14)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        bob: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
      },
      animation: {
        bob: "bob 4s ease-in-out infinite",
        "fade-up": "fadeUp 0.45s ease-out both",
        "pulse-soft": "pulseSoft 2.5s ease-in-out infinite",
      },
      backgroundImage: {
        paws:
          "radial-gradient(circle at 18px 18px, rgba(255,255,255,0.35) 0 7px, transparent 8px), radial-gradient(circle at 6px 8px, rgba(255,255,255,0.28) 0 3px, transparent 4px), radial-gradient(circle at 30px 8px, rgba(255,255,255,0.28) 0 3px, transparent 4px), radial-gradient(circle at 0px 20px, rgba(255,255,255,0.22) 0 3px, transparent 4px), radial-gradient(circle at 36px 20px, rgba(255,255,255,0.22) 0 3px, transparent 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
