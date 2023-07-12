let ordens = [
    {cliente: 'roberton', tipo: 'compras', quantidade: 56, ativo: 'JLSJ34'},
    {cliente: 'joao', tipo: 'compras', quantidade: 73, ativo: 'JLSJ34'},
    {cliente: 'pedro', tipo: 'compras', quantidade: 34, ativo: 'JLSJ34'}
]

let quantidadeDeOrdens = ordens.reduce((somaOrdem, ordem) => somaOrdem + ordem.quantidade, 0)

console.log(quantidadeDeOrdens);



