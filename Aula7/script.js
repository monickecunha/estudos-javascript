const tituloPrincipal = document.getElementById("tituloPrincipal");
tituloPrincipal.textContent = "DOM Manipulado com Sucesso!";

const p = document.querySelector(".paragrafo-destaque");
p.style.color = "blue";

const botao = document.getElementById("mudarTextoBtn");
botao.addEventListener('click', () => {
  const tituloPrincipal = document.getElementById("tituloPrincipal");
  tituloPrincipal.textContent = "Título Alterado pelo Clique!";
});

const botao2 = document.getElementById("adicionarItemBtn");
const lista = document.getElementById("minhaLista");

let contadorCliques = 0;
botao2.addEventListener('click', () => {
  contadorCliques++;

  const novoLi = document.createElement('li');
  novoLi.textContent = `Novo Item ${contadorCliques}`;

  lista.appendChild(novoLi);
});

const input = document.getElementById("campoDeTexto");
input.addEventListener('input', (e) => {
  const valorDigitado = e.target.value;
  console.log("Você digitou:", valorDigitado);
});
