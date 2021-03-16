var checkbox = document.getElementById('flexSwitchCheckDefault');

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});






























































console.log(checkbox);