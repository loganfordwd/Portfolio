/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                'split-black-gray': "linear-gradient(to right, #050505 50% , #131313 50%);",
                'split-gray-black': "linear-gradient(to right, #131313 50% ,  #050505 50%);"
            },
            colors: {
                'navbar': "#131313;",
            }
        },
    },
    plugins: [],
}