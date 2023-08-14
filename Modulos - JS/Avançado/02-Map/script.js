let pessoas = [
    { name: 'joao', idade: 33 },
    { name: 'carlos', idade: 13 },
    { name: 'mateus', idade: 33 },
    { name: 'david', idade: 23 }
]

let nomeDasPessoas = pessoas.map((pessoas) => pessoas.name + ' tem ' + pessoas.idade + ' anos de idade');

console.log(nomeDasPessoas);