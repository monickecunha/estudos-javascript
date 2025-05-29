const frutas = ["Maçã", "Banana", "Laranja"];

// Extraindo elementos pela posição
const [primeira, segunda, terceira] = frutas;
console.log(primeira); // Maçã
console.log(segunda);  // Banana

// Pulando elementos ou pegando o resto
const [um, , tres, ...resto] = [1, 2, 3, 4, 5];
console.log(um);    // 1
console.log(tres);  // 3
console.log(resto); // [4, 5] (o operador `...` aqui é o Rest Parameter, como vimos em funções)