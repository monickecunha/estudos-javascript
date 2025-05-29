function simularRequisicao(sucesso) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sucesso) {
        resolve("Dados obtidos com sucesso!"); // Resolve a Promise
      } else {
        reject("Erro ao obter dados."); // Rejeita a Promise
      }
    }, 1500);
  });
}
// Consumindo uma Promise bem-sucedida
console.log("Iniciando Promise de sucesso...");
simularRequisicao(true)
  .then(data => {
    console.log("Sucesso:", data);
  })
  .catch(error => {
    console.error("Erro (não deveria ocorrer aqui):", error);
  })
  .finally(() => {
    console.log("Processo de sucesso finalizado.");
  });
// Consumindo uma Promise que falha
console.log("\nIniciando Promise de falha...");
simularRequisicao(false)
  .then(data => {
    console.log("Sucesso (não deveria ocorrer aqui):", data);
  })
  .catch(error => {
    console.error("Erro:", error);
  })
  .finally(() => {
    console.log("Processo de falha finalizado.");
  });