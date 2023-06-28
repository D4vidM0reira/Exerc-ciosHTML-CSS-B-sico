var setas = Array.from(document.getElementsByClassName("seta"));
var respostas = Array.from(document.getElementsByClassName("resposta"));

for (let i = 0; i < setas.length; i++) {
    let seta = setas[i]
    let resposta = respostas[i];
    
    seta.addEventListener("click", () => {
        for (let i = 0; i < setas.length; i++) {
            let seta = setas[i]
            let resposta = respostas[i];
            seta.src = "img/setaRespostaFechada.png"
            resposta.style.display = "none";
        }
        resposta.style.display = "block";
        seta.src = "img/setaRespostaAberta.png"
    })
}