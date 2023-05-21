// verifica se "a" é igual ao "b";
console.log(a == b);

// verifica se o conteúdo e a tipagem são identicos;
console.log(a === b);

// verifica se o "a" é diferente de "b";
console.log(a != b);

// verifica se o conteúdo e a tipagem não são identicos;
console.log(a !== b);

// verifica se o "a" é menor que "b";
console.log(a < b);

// verifica se o "a" é menor ou igual a "b";
console.log(a <= b);

// verifica se o "a" é maior que "b";
console.log(a > b);

// verifica se o "a" é maior ou igual a "b";
console.log(a >= b);

let a = 2
let b = 2

/*
AND
*/
console.log(a === b && a <= b);
// Só vai retornar true quando a condição inteira for verdadeira;

/*
OR
*/
console.log(a > b || a === b);
// Só vai retornar false quando a condição inteira for falsa;

/*
NOT
*/
console.log(!(a === b));
// inverte o volor que irá ser retornado da verifição;
