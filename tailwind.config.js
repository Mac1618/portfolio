/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'img-mountains': 'url(/mountains.png)',
				'img-planets': 'url(/planets.png)',
				'img-stars': 'url(/stars.png)',
				'img-sun': 'url(/sun.png)',
			},
		},
	},
	plugins: [],
};
