/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                title: ['Noto', 'sans-serif'],
                body: ['Roboto Condensed'],
            },
            colors: {
                'fbWhite': '#E6EEEA',
                'fbLightGreen': '#7EE16C',
                'fbDarkGreen': '#196D2F',
            }
        }
    },
    plugins: [],
}

