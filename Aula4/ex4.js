function criarValidadorDeComprimento(minComprimento) {
  return (texto) => texto.length >= minComprimento;
}

const validarNomeCurto = criarValidadorDeComprimento(3);
const resultado = validarNomeCurto("Ana");
console.log(resultado);

const validarSenhaForte = criarValidadorDeComprimento(8);

const teste = validarSenhaForte("abc");
console.log(teste);
