const quadrado = document.getElementById('quadrado')

quadrado.addEventListener("click", () => {
    const contemClasseAzul = quadrado.classList.contains('azul')
    if (contemClasseAzul) quadrado.classList.remove('azul')
    else quadrado.classList.add('azul')
})