
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
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Marvel theme colors
        marvel: {
          blue: "#007BFF",     // Electric Blue
          navy: "#0B1C3C",     // Dark Navy
          white: "#FFFFFF",    // White
          cyan: "#00CFFF",     // Light Cyan
          grey: "#404854",     // Steel Grey
          red: "#D32F2F",      // Crimson Red
          captain: "#1976D2",  // Captain America Blue
        },
        // Original colors kept for compatibility
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
      },
    },
  },
  plugins: [shadcnPlugin],
} satisfies Config;

export default config;
