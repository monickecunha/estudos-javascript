function buscarPagina(numeroPagina) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numeroPagina > 3) {
        reject('Página não encontrada!')
      } else {
        resolve(["Item 1 (Pagina " + numeroPagina + ")", "Item 2 (Pagina " + numeroPagina + ")", "Item 3 (Pagina" + numeroPagina + ")"]);
      }
    }, 1000);
  });
}

async function carregarTodasAsPaginas() {
  for (let i = 1; i < 5; i++) {
    try {
      const dadosPagina = await buscarPagina(i);
      console.log(`Pagina ${i}`, dadosPagina);
    } catch (e) {
      console.log(`Erro ao carregar página ${i}`, e);
    }
  }
}

carregarTodasAsPaginas();