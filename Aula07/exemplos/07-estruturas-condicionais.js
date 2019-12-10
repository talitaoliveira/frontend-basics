// Estruturas condicionais

//If - else if - else

var idadeDaPessoa = 13;
var idadeParaBeber = 18;
var estaComPaiOuResponsavel = true;

if ( idadeDaPessoa >= idadeParaBeber ){
    console.log('Tá de boa, pode beber');
}else{
    console.log('É menor, não pode beber');
}

// outro exemplo
var num1 = 4;
var num2 = 4;

if( num1 > num2 ) {
    console.log(num1 + ' é maior que ' + num2);
} else if (num1 < num2){
    console.log(num1 + ' não é maior que ' + num2);
}else{
   console.log(num1 + ' é igual a ' + num2);
}
