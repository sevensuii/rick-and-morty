/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                'rick-and-morty': ["Rick and Morty", "sans-serif"]
            }
        }
    },
    plugins: []
};