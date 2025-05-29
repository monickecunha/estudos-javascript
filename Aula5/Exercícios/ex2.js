function obterDadosDoUsuario(idUsuario) {
  return new Promise(resolve => {
    setTimeout(() => {
      const dados = { id: idUsuario, nome: "Usuário Teste", email: "teste@example.com" };
      resolve(dados);
    }, 1500);
  });
}

function obterPedidosDoUsuario(idUsuario) {
  return new Promise(resolve => {
    setTimeout(() => {
      const pedidos = ["Pedido A" + idUsuario, "Pedido B" + idUsuario, "Pedido C" + idUsuario];
      resolve(pedidos);
    }, 1000);
  });
}

async function carregarPerfilCompleto(id) {
  try {
    const [dadosUsuario, pedidosUsuario] = await Promise.all([
      obterDadosDoUsuario(id),
      obterPedidosDoUsuario(id)
    ]);
    console.log(dadosUsuario, pedidosUsuario)
  } catch (e) {
    console.log("Erro", e)
  }
}

carregarPerfilCompleto(123);