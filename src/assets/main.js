document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.getElementById('html');
    const themeToggle = document.getElementById('theme-toggle');
    const lightbulbOn = document.getElementById('lightbulb-on');
    const lightbulbOff = document.getElementById('lightbulb-off');

    // Function to set the theme
    const setTheme = (theme) => {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeToggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
        if (theme === 'dark') {
            lightbulbOn.style.display = 'block';
            lightbulbOff.style.display = 'none';
        } else {
            lightbulbOn.style.display = 'none';
            lightbulbOff.style.display = 'block';
        }
    };

    // Initialize theme based on localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
    } else {
        setTheme('light'); // Default to light if no preference
    }
    themeToggle.setAttribute('aria-pressed', htmlElement.getAttribute('data-theme') === 'dark' ? 'true' : 'false');

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // Dialog handling logic
    const dialogs = document.querySelectorAll('dialog');
    dialogs.forEach(dialog => {
        const closeButton = dialog.querySelector('.close');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                dialog.close();
            });
        }
    });

    const openButtons = document.querySelectorAll('button[data-dialog]');
    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            const dialogId = button.dataset.dialog;
            const dialog = document.getElementById(dialogId);
            if (dialog) {
                dialog.showModal();
            }
        });
    });

    // Handle closing dialogs with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            dialogs.forEach(dialog => {
                if (dialog.open) {
                    dialog.close();
                }
            });
        }
    });
});