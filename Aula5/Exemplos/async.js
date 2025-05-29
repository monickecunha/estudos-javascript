function simularRequisicaoAsync(sucesso) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sucesso) {
        resolve("Dados obtidos com async/await!");
      } else {
        reject("Erro com async/await.");
      }
    }, 1000);
  });
}

async function buscarDados() {
  try {
    console.log("Iniciando busca com async/await...");
    const dados = await simularRequisicaoAsync(true); // Pausa aqui até a Promise resolver
    console.log("Sucesso (async/await):", dados);

    // Abaixo, simula uma falha para o catch
    const dadosFalha = await simularRequisicaoAsync(false);
    console.log("Isso não será exibido:", dadosFalha); // Não será alcançado
  } catch (error) {
    console.error("Erro (async/await):", error); // Captura o erro da Promise rejeitada
  } finally {
    console.log("Finalizando busca com async/await.");
  }
}

buscarDados();
console.log("A função buscarDados foi chamada, mas o programa continua (assíncrono)");