document
    .querySelector("select[name='estado']")
    .addEventListener('change', (event) => {
        console.log(event.target.value);
        alert('Opção alterada');
    });
