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

function enviarNotificacao(mensagem) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (true) {
        resolve("Notificação enviada: " + mensagem);
      }
    }, 5000);
  });
}

async function processarLoginENotificar(usuario, senha) {
  try {
    const loginMensagem = await fazerLogin(usuario, senha);
    console.log(loginMensagem);

    const notificacaoMensagem = await enviarNotificacao("Bem-vindo! Seu login foi realizado.");
    console.log(notificacaoMensagem);
  } catch (e) {
    console.log("Não foi possível realizar o login!")
  }
}

processarLoginENotificar("admin", "123");