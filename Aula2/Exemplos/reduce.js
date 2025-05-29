const valores = [1, 2, 3, 4];
const somaTotal = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
// 1ª iteração: acumulador=0, valorAtual=1  => 0 + 1 = 1
// 2ª iteração: acumulador=1, valorAtual=2  => 1 + 2 = 3
// 3ª iteração: acumulador=3, valorAtual=3  => 3 + 3 = 6
// 4ª iteração: acumulador=6, valorAtual=4  => 6 + 4 = 10
console.log(somaTotal); // 10

// Contando ocorrências:
const nomes = ["Ana", "Bruno", "Ana", "Carla", "Bruno", "Ana"];
const contagemNomes = nomes.reduce((acc, nome) => {
  acc[nome] = (acc[nome] || 0) + 1;
  return acc;
}, {}); // {} é o valor inicial do acumulador (um objeto vazio)
console.log(contagemNomes); // { Ana: 3, Bruno: 2, Carla: 1 }