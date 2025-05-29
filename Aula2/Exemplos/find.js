const usuarios = [
  { id: 1, nome: "Alice" },
  { id: 2, nome: "Bob" },
  { id: 3, nome: "Alice" }
];
const usuarioAlice = usuarios.find(user => user.nome === "Alice");
console.log(usuarioAlice); // { id: 1, nome: "Alice" } (apenas o primeiro)