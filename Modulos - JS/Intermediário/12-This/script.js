'use strict';

// console.log(this);
// console.log(window === this);

// this.name = 'david'

// function saudar() {
//     console.log('this no contexto da função', this);
//     console.log('olá ' + this.name);
// }

// saudar()

// let user = {
//     nome: 'David',
//     saudar: function () {
//         console.log('this no contexto do metodo', this);
//         console.log('this no contexto do metodo ' + this.nome);
//     }
// }

// user.saudar()

let comida = {
    nome: 'brócolis',
    temperatura: 0
}

comida.cozinhar = function (temperatura) {
    console.log('this no contexto do objeto comida', this);
    this.temperatura = temperatura
}

comida.cozinhar(100)
console.log(comida);

