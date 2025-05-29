// Contador de Cliques Simplificado (Closure):
// Imagine que você tem um botão em um HTML
// Crie uma função criarContadorDeCliques().
// Dentro dela, declare uma variável numCliques = 0
// Retorne uma função interna que, quando chamada, incrementa numCliques e retorna o valor atualizado.
function criarContadorDeCliques() {
  let numCliques = 0;
  return function () {
    numCliques++;
    return numCliques;
  }
}

const contadorBotao = criarContadorDeCliques();
console.log(contadorBotao());
console.log(contadorBotao());
console.log(contadorBotao());