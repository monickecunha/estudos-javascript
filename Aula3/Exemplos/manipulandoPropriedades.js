const carro = {
  marca: "Toyota",
  modelo: "Corolla"
};

// Adicionar nova propriedade
carro.ano = 2022;
console.log(carro);

// Modificar propriedade existente
carro.modelo = "Camry";
console.log(carro);

// Remover propriedade
delete carro.ano;
console.log(carro); 