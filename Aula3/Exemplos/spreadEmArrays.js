const arr1 = [1, 2];
const arr2 = [3, 4];
const arrCombinado = [...arr1, ...arr2, 5];
console.log(arrCombinado); // [1, 2, 3, 4, 5]

const copiaArray = [...arr1]; // Cria uma nova cópia do array
console.log(copiaArray); // [1, 2]
copiaArray.push(6);
console.log(arr1);       // [1, 2] (original inalterado)
console.log(copiaArray); // [1, 2, 6]