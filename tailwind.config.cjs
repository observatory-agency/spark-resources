module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                fadedBlack: '#262824',
                neonGreen: '#DEF167',
                paleLime: '#F1F4BE',
                lavender: '#F9B7F6',
                peachyPink: '#F792C3',
                citrusOrange: '#F9773E',
                lightOrange: '#FEB07F',
                forestGreen: '#2D3D07',
                warmWhite: '#FFFEEB',
            },
            fontFamily: {
                display: ['Anton', 'sans-serif'],
                body: ['Inter', 'sans-serif']
            }
        }
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
