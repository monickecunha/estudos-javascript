const usuario = {
  id: 101,
  nomeCompleto: "Carlos Silva",
  email: "carlos@example.com"
};

// Extraindo propriedades para variáveis com o mesmo nome
const { nomeCompleto, email } = usuario;
console.log(nomeCompleto);
console.log(email);

// Extraindo e renomeando a variável
const { nomeCompleto: nomeDoUsuario, id } = usuario;
console.log(nomeDoUsuario);
console.log(id);

// Com valores padrão (caso a propriedade não exista)
const { pais = "Brasil" } = usuario;
console.log(pais); 