import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#0f172a",
          50: "#1e293b",
          100: "#172033",
          200: "#0f172a",
          300: "#0a1020",
        },
        slate: {
          surface: "#1e293b",
          border: "#334155",
          muted: "#94a3b8",
          text: "#cbd5e1",
        },
        green: {
          DEFAULT: "#10b981",
          dim: "#059669",
          bright: "#34d399",
          glow: "rgba(16,185,129,0.2)",
        },
        amber: {
          DEFAULT: "#f59e0b",
          dim: "#d97706",
          bright: "#fbbf24",
          glow: "rgba(245,158,11,0.2)",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "Courier New", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        "blink": "blink 1s step-end infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "flow": "flow 2s linear infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        flow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
