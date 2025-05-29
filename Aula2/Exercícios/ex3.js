const pessoas = [{ nome: "João", idade: 30 }, { nome: "Maria", idade: 25 }, { nome: "Pedro", idade: 30 }];

const maiorDe30 = pessoas.find(pessoa => pessoa.idade >= 30);
console.log(maiorDe30);

const menorDeIdade = pessoas.some(pessoa => pessoa.idade < 18);
console.log(menorDeIdade);