const frutas = ["Maçã", "Banana", "Laranja", "Uva"];

// Adiciona um ou mais elementos ao final do array. Retorna o novo length.
frutas.push("Abacaxi");
console.log(frutas);

// Remove o último elemento do array e o retorna.
const ultimaFruta = frutas.pop();
console.log(ultimaFruta);
console.log(frutas);


// Remove o primeiro elemento do array e o retorna.
const primeiraFruta = frutas.shift();
console.log(primeiraFruta);
console.log(frutas);

//  Adiciona um ou mais elementos ao início do array. Retorna o novo length.
frutas.unshift("Morango");
console.log(frutas);

// splice(start, deleteCount, item1, item2, ...): Um método poderoso e versátil.
// start: Índice onde a alteração deve começar.
// itemX: Elementos a serem adicionados no lugar dos removidos.
const legumes = ["Cenoura", "Batata", "Tomate", "Cebola"];
legumes.splice(1, 1); // Remove 1 elemento a partir do índice 1 ("Batata")
console.log(legumes);

legumes.splice(1, 0, "Brócolis", "Abobrinha"); // No índice 1, remove 0 e adiciona 2
console.log(legumes);

// slice(startIndex, endIndex): Retorna uma cópia rasa de uma porção do array,
//  sem modificar o original. O endIndex não é incluído.
const numeros = [1, 2, 3, 4, 5];
const subArray = numeros.slice(1, 4); // Pega do índice 1 (inclusive) até o 4 (exclusive)
console.log(subArray); // [2, 3, 4]
console.log(numeros);  // [1, 2, 3, 4, 5] (original inalterado)

// concat(): Combina dois ou mais arrays e retorna um novo array.
const array1 = [1, 2];
const array2 = [3, 4];
const combinado = array1.concat(array2);
console.log(combinado); // [1, 2, 3, 4]