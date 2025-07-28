/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		screens: {
		sm: '640px',
		md: '768px',
		lg: '960px', // ✅ restore default lg
		xl: '1200px', // ✅ restore default xl
       
      },
	  fontFamily:{
        primary:"var(--font-jetbrainsMono)"
	  },
	  
	  colors: {
		primary: "#1c1c22",
		accent: {
			DEFAULT: "#33cbfd",
			hover: "#33cbfd",
		},
       },
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		
  		
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
