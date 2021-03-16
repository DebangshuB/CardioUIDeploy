var checkbox = document.getElementById('flexSwitchCheckDefault');
if (checkbox != null) {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    });

}




























































console.log(checkbox);