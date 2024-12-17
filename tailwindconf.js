// tailwind.config.js
module.exports = {
    content: [
        './pages/**/*.{vue,js,ts,jsx,tsx}',
        './components/**/*.{vue,js,ts,jsx,tsx}',
        './layouts/**/*.{vue,js,ts,jsx,tsx}',
        './app.vue', // Ensure content paths include all your Vue files
    ],
    theme: {
        extend: {
            colors: {
                'co': '#b2ce55',
                // Add the custom green color
                'pu': '#B74249',

            },
        },
    },
    plugins: [],
}
