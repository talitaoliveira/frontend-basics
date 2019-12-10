/* Tipos de dados */

/* -----
 Tipos Primitivos 
----- */

// ----- String
var nome = 'Talita';
console.log("Olá! Meu nome é:" + nome);

// ----- Number
var num1 = 3.6;
var num2 = 6.4;
console.log(num1 + num2);

// ----- Boolean
var maiorDezoito = true;

if ( maiorDezoito ){
    console.log('É maior de 18');
}else{
    console.log('Não é maior de 18');
}

// ----- Undefined
// Variavel que nao foi declarada ou foi declara mas não foi definido nenhum valor
var a;
console.log(a);
console.log(a + 2);

// ----- Null
// Sem valor

var n = null;
console.log(n * 32);

/* -----
 Tipos Não Primitivos 
----- */

// Array
var carros = ['BMW', 'Volvo', 'Saab', 'Ford'];
console.log(carros);

// Object
// Conjunto de propriedades com chave/nome e valores
var meuCarro = new Object();
meuCarro.marca = 'Fiat';
meuCarro.modelo = 'Palio';
meuCarro.ano = '2013';
meuCarro.tipo = 'Passeio';
meuCarro.valor = 26.000;

console.log(meuCarro)
console.log(meuCarro.valor)
