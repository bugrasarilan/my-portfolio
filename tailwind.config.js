/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      container: {
        screens: {
          'sm': {'min': '320px', 'max': '639px'},
          // => @media (min-width: 640px and max-width: 767px) { ... }
          'xsm': {'min': '640px', 'max': '767px'},
          // => @media (min-width: 640px and max-width: 767px) { ... }
    
          'md': {'min': '768px', 'max': '1023px'},
          // => @media (min-width: 768px and max-width: 1023px) { ... }
    
          'lg': {'min': '1024px', 'max': '1279px'},
          // => @media (min-width: 1024px and max-width: 1279px) { ... }
    
          'xl': {'min': '1280px', 'max': '1535px'},
          // => @media (min-width: 1280px and max-width: 1535px) { ... }
    
          '2xl': {'min': '1536px'},
          // => @media (min-width: 1536px) { ... }
        },
      },
      colors: {
        primary: "#ffbe33",
        secondary: "#222831",
        danger: "#ff0000",
        success: "#00ff00",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
