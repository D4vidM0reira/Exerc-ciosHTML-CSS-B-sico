
const btnTrocaCor = document.getElementById("btn-troca-cor");
// 2 - busca o quadro azul
const quadro = document.querySelector('.azul');
// 3 - adicionando uma escuta para monitorar o evento de click,
// ao clicar irá disparar a função que trocará a cor do quadro;
btnTrocaCor.addEventListener("click", trocarCorDoQuadro);

function trocarCorDoQuadro() {
    // remove a classe azul do quadro;
    quadro.classList.remove('azul');

    // adiciona a classe amarelo no quadro;
    quadro.classList.add('amarelo');
}
