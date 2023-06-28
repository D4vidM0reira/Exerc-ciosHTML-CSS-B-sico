function soma(a, b) {
    return a + b;
}

let resultadoDaSoma = soma(2, 2);
console.log(resultadoDaSoma);

resultadoDaSoma = soma(resultadoDaSoma, 5);
console.log(resultadoDaSoma);

function encentivarQuester(quester = 'Quester') {
    console.log(`Muito bem ${quester}, você chegou ao módulo de javaScript, Continue assim!`);
}

encentivarQuester('David');