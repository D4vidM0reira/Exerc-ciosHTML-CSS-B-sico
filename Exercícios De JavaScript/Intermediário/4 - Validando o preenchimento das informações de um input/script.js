const input = document.querySelectorAll('.input-txt');

input.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value != "") input.classList.add('borda-verde')
        else input.classList.remove('borda-verde')
    });
});