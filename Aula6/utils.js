export const APP_NOME = "Meu App Incrível";

export function formatarDinheiro(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export default (mensagem) => console.log(mensagem);