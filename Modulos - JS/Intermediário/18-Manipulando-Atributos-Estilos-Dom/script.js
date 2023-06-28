function alterarCorDeFundoPrimeiroPost() {
    let posts = document.getElementsByClassName('post');
    let primeiroPost = posts[0]
    primeiroPost.style.backgroundColor = 'red';
}

function removerCorDeFundoPrimeiroPost() {
    let posts = document.getElementsByClassName('post');
    let primeiroPost = posts[0]
    primeiroPost.style.backgroundColor = 'white';
}

function aumentarFontSegundoPost() {
    let textoPosts = document.getElementsByClassName('texto-post');
    textoPosts[1].classList.add('fonte-grande')
}

function diminuirFontSegundoPost() {
    let textoPosts = document.getElementsByClassName('texto-post');
    textoPosts[1].classList.remove('fonte-grande')
}

function marcarRadio(genero) {
    (genero === 'M') ? document.getElementById('masculino').checked = true  
    : document.getElementById('femenino').checked = true
    

    let radioMasculino = document.getElementById('masculino')
    let radioFeminino = document.getElementById('femenino')
    
    if (genero === 'M') {
        radioMasculino.checked = true;
    } else if (genero === 'F') {
        radioFeminino.checked = true;   
    }
}

function limparRadio() {
    let radioMasculino = document.getElementById('masculino')
    let radioFeminino = document.getElementById('femenino')
    
    radioMasculino.checked = false;
    radioFeminino.checked = false;
}

// Adicionando/removendo class em um elemento;
textoPosts[1].classList.add('fonte-grande')
textoPosts[1].classList.remove('fonte-grande')

// Alterando Propriedade de estilo backgroundColor de um elemento; 
primeiroPost.style.backgroundColor = 'red';

// Alterando a propriedade checked para true/false; checado/não checado;
radioFeminino.checked = true;   
radioFeminino.checked = false;

