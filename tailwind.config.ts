
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
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        marvel: {
          red: "#D32F2F",     // Crimson Red
          navy: "#0B1C3C",     // Dark Navy
          white: "#FFFFFF",    // White
          cyan: "#00CFFF",     // Light Cyan
          grey: "#404854",     // Steel Grey
          gold: "#FDB827",     // Marvel Gold
          darkred: "#800000",  // Dark Red for backgrounds
          black: "#000000",    // Pure Black
          blue: "#007BFF",     // Electric Blue
          captain: "#1976D2",  // Captain America Blue
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
        '3d': '0 10px 30px -15px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
        'card-3d': '0 20px 30px -10px rgba(0, 0, 0, 0.4), 0 10px 20px -5px rgba(0, 123, 255, 0.2)',
      },
      transitionProperty: {
        'transform-opacity': 'transform, opacity',
      },
      transformStyle: {
        '3d': 'preserve-3d',
        'flat': 'flat',
      },
      perspective: {
        'none': 'none',
        '500': '500px',
        '1000': '1000px',
        '1500': '1500px',
        '2000': '2000px',
      },
      backfaceVisibility: {
        'visible': 'visible',
        'hidden': 'hidden',
      },
      transformOrigin: {
        'center-left': 'center left',
        'center-right': 'center right',
      },
      translate: {
        'z-0': '0px',
        'z-2': '2px',
        'z-4': '4px',
        'z-10': '10px',
        'z-20': '20px',
      },
    },
  },
  plugins: [
    shadcnPlugin,
    function({ addUtilities }) {
      const newUtilities = {
        '.transform-style-3d': {
          'transform-style': 'preserve-3d',
        },
        '.transform-style-flat': {
          'transform-style': 'flat',
        },
        '.backface-visible': {
          'backface-visibility': 'visible',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.perspective-none': {
          'perspective': 'none',
        },
        '.perspective-500': {
          'perspective': '500px',
        },
        '.perspective-1000': {
          'perspective': '1000px',
        },
        '.perspective-1500': {
          'perspective': '1500px',
        },
        '.translate-z-0': {
          'transform': 'translateZ(0)',
        },
        '.translate-z-10': {
          'transform': 'translateZ(10px)',
        },
        '.translate-z-20': {
          'transform': 'translateZ(20px)',
        },
        '.translate-z-30': {
          'transform': 'translateZ(30px)',
        },
        '.translate-z-40': {
          'transform': 'translateZ(40px)',
        },
        '.translate-z-50': {
          'transform': 'translateZ(50px)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} satisfies Config;

export default config;
