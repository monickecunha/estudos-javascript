const dadosBasicos = { nome: "Fernanda", idade: 28 };
const dadosContato = { email: "fe@example.com", telefone: "1234-5678" };

// Combinar objetos (se houver chaves duplicadas, a última prevalece)
const usuarioCompleto = { ...dadosBasicos, ...dadosContato, cidade: "Rio" };
console.log(usuarioCompleto);
// { nome: 'Fernanda', idade: 28, email: 'fe@example.com', telefone: '1234-5678', cidade: 'Rio' }

// Criar cópia de um objeto e/ou adicionar/modificar propriedades
const usuarioAtualizado = { ...dadosBasicos, idade: 29 };
console.log(usuarioAtualizado); // { nome: 'Fernanda', idade: 29 }
console.log(dadosBasicos);      // { nome: 'Fernanda', idade: 28 } (original inalterado)