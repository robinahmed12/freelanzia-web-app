/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = [
    './src/**/*.{js,jsx,ts,tsx,mdx}', // Make sure your paths are included
];
export const theme = {
    extend: {
        colors: {
            orange: {
                500: '#FF6F00',
            },
            charcoal: '#333333',
        },
    },
};
export const plugins = [];