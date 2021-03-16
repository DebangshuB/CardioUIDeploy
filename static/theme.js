var checkbox = document.getElementById('flexSwitchCheckDefault');
var state = 0;

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        state = 1;
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        state = 0;
    }
});



























































console.log(checkbox);