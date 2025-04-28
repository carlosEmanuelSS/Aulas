/* 1. Contar de 1 a 10. Usando while, conte de 1 até 10 e imprima os números.

var n1 = 0;
while( n1 <=10 ){
    console.log(n1)
    n1++;
    n1 >10;
}*/

/* 2. Contagem regressiva. Faça uma contagem de 20 até 0 usando while.

var n1 = 20
while ( n1 >= 0){
    console.log(n1)
    n1--;
    n1==0;
} */

/* 3. Somar números até ultrapassar 100. Some números consecutivos (1, 2, 3, 4...) até a soma ser maior que 100. Use while.

var n1 = 1;
var soma = 0;
while(soma <= 100){
    soma += n1
    console.log(soma)
    n1++;
}*/

/*4. Ler números até digitar zero. Peça ao usuário números (prompt) e pare quando ele digitar 0.

const prompt = require ('prompt-sync')({})

var n1 = prompt('Digite um número : ')
while ( n1 != 0 ){
    console.log(`O número é ${n1} !`)
    var n1 = prompt('Digite outro número: ')
} */

// 5. Mostrar apenas números ímpares até 15. Com while, mostre apenas os números ímpares de 1 até 15.

/*var n1 = 0;
while (n1 <= 15) {
    if (n1 % 2 != 0) {
        console.log(n1)
    }
    n1++;
}*/

const prompt = require('prompt-sync')({})
var y = prompt('Digite um número: ')
while( y != 7){
    console.log(y)
    var y = prompt('Digite outro: ')
}
console.log('!?!?!?!?! Voê não podia digitar o 7 !!!!!!!!!!!!')