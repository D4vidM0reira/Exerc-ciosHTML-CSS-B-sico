// extrair objetos de arrays

// let pessoa = {
//     nome: 'david',
//     sobrenome: 'moreira',
//     idade: 18
// }

// let nome = pessoa.nome
// let sobrenome = pessoa.sobrenome
// let idade = pessoa.idade

// console.log(nome); 
// console.log(idade);
// console.log(sobrenome);


// Desestruturação/Mapeamento do objeto pessoa

let pessoa = {
    nome: 'david',
    sobrenome: 'moreira',
    idade: 18
}

let { nome, idade, sobrenome: sobrenomeDaPessoa } = pessoa

console.log(nome); 
console.log(idade);
console.log(sobrenomeDaPessoa);

// Desestruturação do Array

const numeros = [1,2,3,4,5,6,7];

const [ um, dois, tres ] = numeros

console.log(um);
console.log(dois);
console.log(tres);