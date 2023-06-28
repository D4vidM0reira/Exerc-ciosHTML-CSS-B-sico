const imagens = [
    {
        nome: 'primeira',
        src: 'src/img/download (1).jpeg'
    },
    {
        nome: 'segunda',
        src: 'src/img/download (2).jpeg'
    },
    {
        nome: 'terceira',
        src: 'src/img/download.jpeg'
    },
    {
        nome: 'quarta',
        src: 'src/img/images.jpeg'
    }
]
let i = imagens.length - 1;
const saidaImg = document.getElementsByClassName("saida-de-img")[0];
const btnDaEsquerda = document.getElementsByClassName('fa-solid')[0];
const btnDaDireita = document.getElementsByClassName('fa-solid')[1];

btnDaEsquerda.addEventListener('click', () => {
    if (i < imagens.length - 1) i += 1;
    habilitaEdesabilitaBtn()

    saidaImg.innerHTML = `
        <p>${imagens[i].nome}</p>
        <img src="${imagens[i].src}" class="imagem">
    `
})

btnDaDireita.addEventListener('click', () => {
    if (i > 0) i = i - 1
    habilitaEdesabilitaBtn()
    
    saidaImg.innerHTML = `
        <p>${imagens[i].nome}</p>
        <img src="${imagens[i].src}" class="imagem">
    `
})

function habilitaEdesabilitaBtn() {
    if (i < imagens.length - 1) {
        btnDaEsquerda.classList.remove('btnDesabilitado')
        btnDaEsquerda.classList.add('fa')
    }
    
    if (i == 0) {
        btnDaDireita.classList.remove('fa')
        btnDaDireita.classList.add('btnDesabilitado')
    }

    if (i == imagens.length - 1) {
        btnDaEsquerda.classList.remove('fa')
        btnDaEsquerda.classList.add('btnDesabilitado')
    }
    
    if (i == 1) {
        btnDaDireita.classList.remove('btnDesabilitado')
        btnDaDireita.classList.add('fa')
    }
}