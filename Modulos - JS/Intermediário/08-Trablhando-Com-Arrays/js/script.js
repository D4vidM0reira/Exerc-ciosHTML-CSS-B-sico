let frutas = ['banana', 'maça', 'pera', 'laranja']

// Adiciona um novo elemento ao final do array;
frutas.push('manga')
console.log(frutas);

// Remove o último elemento do array;
frutas.pop()
console.log(frutas);

// Remove o primeiro elemento do array;
frutas.shift()
console.log(frutas);

// //Adiciona um novo elemento no começo do array;
frutas.unshift('melancia')
console.log(frutas);

// Procura o index de um item no array;
console.log(frutas.indexOf('melancia')); 

// for (let i = 0; i < frutas.length; i++) {
//     console.log(`Fruta: ${frutas[i]}`);
// }

// console.log(frutas[0]);
// console.log(frutas.length);

// frutas.forEach((item, i, array) => {
//     console.log(`Fruta: ${item}`);
//     console.log(`Index: ${i}`);
//     console.log(array);
// })