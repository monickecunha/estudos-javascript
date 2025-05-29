const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter(num => num % 2 === 0);
console.log(pares);    // [2, 4, 6]
console.log(numeros); // [1, 2, 3, 4, 5, 6] (array original inalterado)