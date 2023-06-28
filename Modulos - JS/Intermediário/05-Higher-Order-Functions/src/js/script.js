const calcularAnoDeNascimento = (idade, mesDeNascimento, imprimir) => {
    const mesAtual = 2
    let anoDeNascimento = 2023 - idade
    mesDeNascimento > mesAtual ?
    anoDeNascimento-- : 
    imprimir(anoDeNascimento)
}

let imprimirAnoDeNascimento = anoDeNascimento => {
    console.log(`Seu ano de nascimento é: ${anoDeNascimento}`);
}

calcularAnoDeNascimento(18, 3, imprimirAnoDeNascimento);