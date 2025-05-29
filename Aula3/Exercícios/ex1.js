const livro = {
  titulo: "A Moreninha",
  autor: "JM de Macedo",
  paginas: 216,
  disponivel: true
}

console.log(livro.titulo);

livro.disponivel = false;
console.log(livro);

const { titulo, autor } = livro;
console.log(`${titulo} do autor ${autor}`);

const { paginas: totalPaginas } = livro;
console.log(totalPaginas);

const livroComDesconto = {
  ...livro,
  preco: 50.00,
  desconto: 0.15
}
console.log(livroComDesconto);

const chaves = Object.keys(livro);
console.log(chaves);

const valores = Object.values(livro);
console.log(valores);
