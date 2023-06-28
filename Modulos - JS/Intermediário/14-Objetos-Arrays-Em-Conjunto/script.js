// let videoGame = {
//     nome: 'Xbox',
//     valor: 3000,
//     jogos: [
//         {nome: 'farcry4'}, 
//         {nome: 'fifa'},
//         {nome: 'valorant'}
//     ]
// }

// console.log(videoGame);

// Objeto cliente com as propriedades 'nome' e 'ultimo pedidido',
// sendo que o ultimo pedido é um objeto, que contem um 
// array de jogos e os jogos são objetos.

let cliente = {
    nome: 'David',
    ultimoPedido: {
        produto: 'xbox',
        valor: '3000',
        jogos: [
            {nome: 'fifa'},
            {nome: 'valorant'},
            {nome: 'minecraft'}
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[2]);