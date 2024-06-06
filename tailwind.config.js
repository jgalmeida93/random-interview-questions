/** @type {import('tailwindcss').Config} */

import { nextui } from "@nextui-org/react";
import tailwindAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "cursor-blink": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "cursor-blink": "cursor-blink 1.5s steps(2) infinite",
      },
      backgroundImage: {
        "radial-bg":
          "radial-gradient(circle, rgba(17,15,22,1) 0%, rgba(8,7,11,1) 70%)",
        texture: "url('src/assets/pattern.png')",
      },
      backgroundColor: {
        primary: "#161616",
        secondary: "#302745",
      },
    },
  },
  plugins: [tailwindAnimate, nextui()],
};
