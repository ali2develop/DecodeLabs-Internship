const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
    // This tells the body to add or remove the 'dark-mode' class
    document.body.classList.toggle('dark-mode');
});