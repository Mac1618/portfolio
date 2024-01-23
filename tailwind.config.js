/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'img-mountains': 'url(./public/mountains.png)',
				'img-planets': 'url(./public/planets.png)',
				'img-stars': 'url(./public/stars.png)',
				'img-sun': 'url(./public/sun.png)',
			},
		},
	},
	plugins: [],
};
