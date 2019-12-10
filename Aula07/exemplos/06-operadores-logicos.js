// Operadores lógicos

var idadeDaPessoa = 13;
var idadeParaBeber = 18;
var estaComPaiOuResponsavel = true;

var maiorDeDezoito = idadeDaPessoa >= idadeParaBeber;

// && - "E" lógico

console.log( maiorDeDezoito && estaComPaiOuResponsavel );

// || - "OU" lógico

console.log( maiorDeDezoito || estaComPaiOuResponsavel );

// ! - "Negação" lógico
console.log( !estaComPaiOuResponsavel );