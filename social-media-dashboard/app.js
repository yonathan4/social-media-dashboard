const switchTheme = document.getElementById('toggle_switch');

switchTheme.addEventListener('click', () => {
    switchTheme.classList.toggle('toggled');
    document.body.classList.toggle('dark_theme')
});