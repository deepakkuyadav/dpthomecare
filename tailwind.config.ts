import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        brand: {
          blue: "#0B4EA2",
          "blue-dark": "#073a7a",
          "blue-light": "#1467c9",
          green: "#2EAF39",
          "green-dark": "#22862c",
          "green-light": "#4cc957",
          navy: "#062a57",
        },
        ink: {
          DEFAULT: "#0f172a",
          soft: "#334155",
          muted: "#64748b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #0B4EA2 0%, #1467c9 55%, #2EAF39 130%)",
        "brand-gradient-soft": "linear-gradient(135deg, #073a7a 0%, #0B4EA2 60%, #22862c 120%)",
        "green-gradient": "linear-gradient(135deg, #2EAF39 0%, #22862c 100%)",
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(11, 78, 162, 0.18)",
        "card-hover": "0 24px 60px -18px rgba(11, 78, 162, 0.32)",
        glow: "0 0 0 1px rgba(11,78,162,0.06), 0 20px 50px -20px rgba(11,78,162,0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shine: {
          "0%": { transform: "translateX(-120%)" },
          "60%, 100%": { transform: "translateX(220%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        shine: "shine 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
