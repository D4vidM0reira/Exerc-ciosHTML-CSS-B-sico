let buscandoElementoPeloId = 
document.getElementById
('paragrafo1')
console.log(buscandoElementoPeloId);

let buscandoElementoPeloNomeDaClasse = 
document.getElementsByClassName
('tag-de-input')
console.log(buscandoElementoPeloNomeDaClasse);

let buscandoElementoPeloNomeDaTag = 
document.getElementsByTagName
('input');
console.log(buscandoElementoPeloNomeDaTag);

let buscandoElementoPeloAtributo = document.querySelectorAll
("input[name='email']");
console.log(buscandoElementoPeloAtributo);

// Caso o dom encontre mais de um elemento 
// o dom retornará uma lista e os elementos
// poderão ser acessados pelo index 
// Exemplo:
console.log(buscandoElementoPeloAtributo[0]);
console.log(buscandoElementoPeloAtributo[1]);