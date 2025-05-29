// Higher-Order Functions e Closures
//Crie uma função multiplicarPor que receba um fator como argumento.
// multiplicarPor deve retornar uma nova função.
// A função retornada deve aceitar um numero e retornar numero * fator
function multiplicarPor(fator) {
  return function (numero) {
    return fator * numero;
  }
}

const dobrar = multiplicarPor(2);
const triplicar = multiplicarPor(3);

console.log(dobrar(5));
console.log(triplicar(5));
