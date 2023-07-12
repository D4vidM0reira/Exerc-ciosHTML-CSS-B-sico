let pessoas = [
    { name: 'joao', idade: 33 },
    { name: 'carlos', idade: 13 },
    { name: 'mateus', idade: 33 },
    { name: 'david', idade: 23 }
]


let pessoasComIdadeDe33Anos = pessoas.filter((pessoa) => pessoa.idade === 33)

console.log(pessoasComIdadeDe33Anos);

// let pessoasComIdadeDe33Anos = []

// for (let i = 0; i < pessoas.length; i++) {
//     if (pessoas[i].idade === 33) {
//         pessoasComIdadeDe33Anos.push(pessoas[i]);
//     }
// }