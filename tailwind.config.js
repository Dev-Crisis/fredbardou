/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                title: ['Kanit', 'sans-serif'],
                body: ['Roboto Condensed'],
            },
            colors: {
                'fbText': '#3DD68C',
                'fbText2': '#B1F1CB',
                'fbBorder': '#28684A',
                'fbInteractive': '#174933',
                'fbInteractive2': '#132D21',
                'fbBackground': '#121B17',
                'fbBackground2': '#0E1512',
            }
        }
    },
    plugins: [],
}

