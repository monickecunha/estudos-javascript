const pessoa = {
  nome: "Alice",
  idade: 30,
  cidade: "São Paulo",
  profissao: "Desenvolvedora"
};

console.log(pessoa);

//  Acesso a Propriedades (. e []):
// Notação de ponto (.)
console.log(pessoa.nome);
console.log(pessoa.idade);

// Notação de colchetes ([])
const chave = "cidade";
console.log(pessoa[chave]);

const item = {
  "nome do produto": "Celular",
  "preco-com-desconto": 1200
};
console.log(item["nome do produto"]);
