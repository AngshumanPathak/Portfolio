/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
			cinzel: ['"Cinzel"', 'serif'],
			bodoni: ['"Bodoni Moda"', 'serif'],
		  },
  		keyframes:{
			swipeIn: {
				'0%': { transform: 'translateX(-100%)', opacity: '0' },
				'100%': { transform: 'translateX(0)', opacity: '1' },
			  },
		},

		animation: {
			swipeIn: 'swipeIn 2s ease-out',
			popOut: 'popOut 0.5s ease-out',
			popOutMove: 'popOutMove 0.5s ease-out',
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

