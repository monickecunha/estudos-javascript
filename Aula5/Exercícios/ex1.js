function fazerLogin(usuario, senha) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usuario === "admin" && senha === "123") {
        resolve("Login bem-sucedido!");
      } else {
        reject("Usuário ou senha inválidos.")
      }
    }, 2000);
  });
}

console.log("Iniciando Promise login");
fazerLogin("admin", "123")
  .then(sucesso => {
    console.log("Sucesso", sucesso);
  })
  .catch(e => {
    console.log("Erro", e)
  });

fazerLogin("joao", "senhaerrada")
  .then(sucesso => {
    console.log("Sucesso", sucesso);
  })
  .catch(e => {
    console.log("Erro", e)
  })
