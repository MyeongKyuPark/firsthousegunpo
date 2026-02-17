/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Enable class-based dark mode
    theme: {
        extend: {
            colors: {
                // Define custom colors using CSS variables
                'primary': 'rgb(var(--color-primary) / <alpha-value>)',
                'secondary': 'rgb(var(--color-secondary) / <alpha-value>)',
                'accent': 'rgb(var(--color-accent) / <alpha-value>)',
                'background': 'rgb(var(--color-background) / <alpha-value>)',
                'text': 'rgb(var(--color-text) / <alpha-value>)',
            },
            fontFamily: {
                sans: ['Noto Sans KR', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
