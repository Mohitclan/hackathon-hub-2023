
import type { Config } from "tailwindcss";
import { shadcnPlugin } from "./src/lib/shadcn-plugin";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      animation: {
        "bounce-slow": "bounce 2s infinite",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "tilt": "tilt 10s infinite linear",
        "hero-shine": "hero-shine 2s forwards ease-in-out",
        "fade-in": "fade-in 0.5s ease-in-out",
        "slide-in": "slide-in 0.5s ease-in-out",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { filter: "drop-shadow(0 0 5px rgba(0, 207, 255, 0.7))" },
          "50%": { filter: "drop-shadow(0 0 15px rgba(0, 207, 255, 0.9))" },
        },
        tilt: {
          "0%, 50%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(1deg)" },
          "75%": { transform: "rotate(-1deg)" },
        },
        "hero-shine": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "slide-in": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        }
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        marvel: {
          red: "#E23636",     // Marvel Red
          navy: "#0B1C3C",     // Dark Navy
          white: "#FFFFFF",    // White
          cyan: "#00CFFF",     // Light Cyan
          grey: "#404854",     // Steel Grey
          gold: "#FDB827",     // Marvel Gold
          darkred: "#800000",  // Dark Red for backgrounds
          black: "#000000",    // Pure Black
          blue: "#007BFF",     // Electric Blue
          captain: "#1976D2",  // Captain America Blue
          ironman: "#F39C12",  // Iron Man Gold
          hulk: "#2ECC71",     // Hulk Green
          thor: "#5D4037",     // Thor Brown
          shield: "#003366",   // SHIELD Blue
        },
        orange: {
          DEFAULT: "#F97316",
          light: "#FB923C",
          dark: "#EA580C",
        },
        charcoal: {
          DEFAULT: "#222222",
          light: "#403E43",
          dark: "#121212",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'glow': '0 0 15px rgba(0, 207, 255, 0.5)',
        'glow-strong': '0 0 25px rgba(0, 207, 255, 0.8)',
        'hero': '0 10px 25px -5px rgba(0, 123, 255, 0.3)',
        'marvel': '0 4px 12px rgba(226, 54, 54, 0.25)',
        'ironman': '0 0 15px rgba(243, 156, 18, 0.4)',
      },
      backgroundImage: {
        'avengers-pattern': "url('/lovable-uploads/a34081ee-992f-41f8-ac2a-cb0f992bd76d.png')"
      },
      fontFamily: {
        'marvel': ['Anton', 'sans-serif'],
      },
    },
  },
  plugins: [
    shadcnPlugin,
    function({ addUtilities }) {
      const newUtilities = {
        '.clip-path-shield': {
          'clipPath': 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
        },
        '.clip-path-stone': {
          'clipPath': 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        },
        '.marvel-gradient': {
          'background': 'linear-gradient(90deg, #E23636, #0B1C3C)',
          'backgroundSize': '200% auto',
          'animation': 'hero-shine 2s forwards ease-in-out',
          'backgroundClip': 'text',
          'WebkitBackgroundClip': 'text',
          'color': 'transparent',
        },
        '.shield-bg': {
          'background': 'radial-gradient(circle, #E23636 0%, #E23636 33%, #FFFFFF 33%, #FFFFFF 66%, #007BFF 66%, #007BFF 100%)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} satisfies Config;

export default config;
