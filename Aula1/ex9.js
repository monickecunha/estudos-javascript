function boasVindas(nome) {
  return console.log(`Bem vindo(a), ${nome}!`);
}

boasVindas("Monicke");

const calcularMedia = (n1, n2, n3) => (n1 + n2 + n3) / 3;
console.log(calcularMedia(10, 9, 9.5));

function listarAlunos(...alunos) {
  for (const aluno of alunos) {
    console.log(aluno);
  }
}

listarAlunos("Maria", "João", "Pedro", "Tininha");