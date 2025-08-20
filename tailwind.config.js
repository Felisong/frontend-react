/** @type {import('tailwindcss').Config} */

const rotation = () => {
  return Math.floor(Math.random() * (35 - 25) + 25);
};
// add animations here!
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: ["2rem", { lineHeight: "1.1" }],
        primary: ["1.3rem"],
      },
      colors: {
        "vibrant-red": "#AE1B55",
        "planet-shadow-red": "#341620",
        "primary-white": "#FFFAE1",
        "bright-yellow": "#FFCE74",
        "light-pink": "#FEBCD7",
        "dark-pink": "#95506B",
        "dark-blue": "#001A2E",
        "supplement-white": "#D3C99A",
        "input-grey": "#D9D9D9",
      },
      fontFamily: {
        header: ["Mitr", "sans-serif"],
        primary: ["Open Sans", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      keyframes: {
        spaceBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(3%)" },
        },
        rotatePivot: {
          "0%, 100%": { transform: "rotate(-8deg)" },
          "50%": { transform: `rotate(0deg)` },
        },
        backLeftLeg: {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: `rotate(10deg)` },
        },
        tailWag: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-10deg)" },
        },
        headBounce: {
          "0%, 100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(1%) rotate(0deg)" },
        },
        wholeArm: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-2deg)" },
        },
        lowerArm: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(20deg)" },
        },
      },
      animation: {
        "bounce-y": "spaceBounce 2s ease-in-out infinite",
        "rotate-back-right": "rotatePivot 2s ease-in-out infinite",
        "rotate-back-left": "backLeftLeg 2s ease-in-out infinite",
        "tail-wag": "tailWag 1.5s ease-in-out infinite",
        "delayed-rotate": "backLeftLeg 2s ease-in-out infinite",
        "head-bounce": "headBounce 2s ease-in-out infinite",
        "whole-arm": "wholeArm 0.001s ease-in-out infinite",
        "lower-arm": "lowerArm 0.001s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
