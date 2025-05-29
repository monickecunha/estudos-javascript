const produtos = ["Teclado", "Mouse", "WebCam", "cabo", "CPU"];
console.log(produtos[0]);
console.log(produtos[produtos.length - 1]);

produtos.push('notebook');
console.log(produtos);

produtos.shift();
console.log(produtos);

produtos.splice(1, 0, "Monitor");
console.log(produtos);
