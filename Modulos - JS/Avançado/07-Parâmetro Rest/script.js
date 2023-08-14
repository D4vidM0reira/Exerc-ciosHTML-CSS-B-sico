function incentiverQuester(mensagem, ...questers) {
    questers.map((quester) => {console.log(`${mensagem} ${quester}`)})
}

incentiverQuester('parabéns por ter chego ao módulo de javaScript avançado', 'joão', 'pedro', 'jose', 'mateus')