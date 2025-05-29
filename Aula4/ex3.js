// Filtrar por Propriedade (HOF com Closure):
function criarFiltroPorPropriedade(propriedade, valor) {
  return function (item) {
    return item[propriedade] === valor;
  };
}

const produtos = [
  { nome: "TV", categoria: "eletrônicos", preco: 2000 },
  { nome: "Notebook", categoria: "eletrônicos", preco: 3500 },
  { nome: "Camisa", categoria: "roupas", preco: 100 },
  { nome: "Celular", categoria: "eletrônicos", preco: 1500 }
];

const filtroEletronicos = criarFiltroPorPropriedade("categoria", "eletrônicos");
const produtosEletronicos = produtos.filter(filtroEletronicos)
console.log(produtosEletronicos);
