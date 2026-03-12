import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#4F46E5",
          secondary: "#6366F1",
          accent: "#22C55E",
          ink: "#111827",
          mist: "#F8FAFC",
        },
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(79, 70, 229, 0.18)",
        card: "0 20px 45px -24px rgba(15, 23, 42, 0.12)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.08) 1px, transparent 1px)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
