/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'light-blue': '#BEFEFE',
                '': ''
            }
        },
        fontFamily: {
            'josefin': ['Josefin Sans', 'sans-serif'],
            'jost': ['Jost', 'sans-serif'],
        }
    },
    plugins: [],
}
