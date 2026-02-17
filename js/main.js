document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement; // This is the <html> tag

    // Function to set the theme
    const setTheme = (theme) => {
        if (theme === 'dark') {
            htmlElement.classList.add('dark');
            themeToggle.textContent = '☀️'; // Sun icon for dark mode
        } else {
            htmlElement.classList.remove('dark');
            themeToggle.textContent = '🌙'; // Moon icon for light mode
        }
        localStorage.setItem('theme', theme);
    };

    // Get saved theme from localStorage or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        setTheme(savedTheme);
    } else if (systemPrefersDark) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    // Event listener for the theme toggle button
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // Optional: Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
        if (!localStorage.getItem('theme')) { // Only react to system changes if no theme is explicitly saved
            setTheme(event.matches ? 'dark' : 'light');
        }
    });

    // Existing Navbar scroll logic (if any)
    // Add event listener for scroll to change navbar background
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // Adjust scroll threshold as needed
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
});