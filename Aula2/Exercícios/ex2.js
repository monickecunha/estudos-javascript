const numeros = [5, 10, 15, 20, 25];

const dobroNumeros = numeros.map(numero => numero * 2);
console.log(`map ${dobroNumeros}`);

const maioresQueQuinze = numeros.filter(numero => numero > 15);
console.log(`filter ${maioresQueQuinze}`);

const somaTotal = numeros.reduce((acc, numero) => acc + numero, 0);
console.log(`reduce ${somaTotal}`);


