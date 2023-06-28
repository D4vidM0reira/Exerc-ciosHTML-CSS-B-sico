// Adicionando uma porção de html em um html já existente;

// Vamos enserir as novas porções de html;
// na div com a classe novos-comentários;

// criar o html no javaScript;
// capturar o comentario do input e enserir no novo html;
// para exibir na tela;


function adicionarComentario() {
    let input = document.getElementsByName('novo-comentario')
    let textoDigitadoNoInputPeloUsuario = input[0].value
    let novosComentarios = document.getElementById("novos-comentarios")
    novosComentarios.innerHTML += `
        <p>${textoDigitadoNoInputPeloUsuario}</p>
    `
    input[0].value = ''
}