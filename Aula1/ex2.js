const num1 = 15;
const num2 = 4;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

let x = 10;

console.log(x += 5);

const idadePessoa = 25;
const idadePessoa2 = '25';

console.log(idadePessoa == idadePessoa2); //true
console.log(idadePessoa === idadePessoa2); //false

const ponto = 80;
const presenca = 70;

console.log(ponto >= 70 && presenca >= 75); //false
console.log(ponto >= 70 || presenca >= 75); //true

const num = 10;
const isPar = num % 2 === 0 ? "par" : "ímpar";

console.log(isPar);