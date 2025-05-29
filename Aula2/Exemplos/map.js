const precos = [10, 20, 30];
const precosComImposto = precos.map(preco => preco * 1.10); // Adiciona 10% de imposto
console.log(precosComImposto); // [11, 22, 33]
console.log(precos);          // [10, 20, 30] (array original inalterado)

// Exemplo em React:
// {itens.map(item => <ListItem key={item.id} data={item} />)}