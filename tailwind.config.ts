
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        border: {
          DEFAULT: "#2C3E50",
          dark: "#1f2937",
        },
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#0B1121", // Dark navy from the image
        },
        foreground: {
          DEFAULT: "#2C3E50",
          dark: "#F9F9F9",
        },
        accent: {
          DEFAULT: "#9b87f5",
          foreground: "#4F46E5",
        },
        card: {
          DEFAULT: "#FFFFFF",
          dark: "#131B2E", // Slightly lighter navy for cards
        },
        primary: {
          DEFAULT: "#4F46E5", // Indigo color for primary elements
          dark: "#6366F1",
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          from: { transform: "translateX(-20px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
        slideIn: "slideIn 0.5s ease-out forwards",
        "meteor-effect": "meteor 5s linear infinite",
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(90deg, #4F46E5 0%, #9333EA 100%)',
        'gradient-text': 'linear-gradient(90deg, #60A5FA 0%, #A855F7 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
