module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				sparkPeach: '#FFF5EC',
				sparkBlue: '#005370',
				sparkBlueDark: '#003C52',
				sparkRaspberry: '#E84853',
				sparkPink: '#D881AB',
				sparkOrange: '#E69649',
				sparkBody: '#1C1917',
				sparkHeader: '#292524'
			},
			fontFamily: {
				display: ['Mikela', 'sans-serif'],
				body: ['Figtree', 'sans-serif']
			}
		}
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
