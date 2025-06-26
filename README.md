# 📚 Estudos de JavaScript: Fundamentos e Avançado

---

Este repositório serve como um caderno de anotações e exercícios práticos que explorei durante meus estudos de JavaScript. Ele abrange desde os fundamentos da linguagem até conceitos mais avançados de manipulação de dados, programação orientada a objetos e assincronicidade. O objetivo é solidificar o aprendizado e demonstrar a aplicação desses conceitos em código.

## 📁 Estrutura do Repositório

O projeto está organizado em pastas, cada uma representando uma "aula" ou módulo de estudo:

- `Aula1/`: Fundamentos básicos do JavaScript.
- `Aula2/`: Métodos de manipulação de Arrays.
- `Aula3/`: Manipulação de Objetos, desestruturação e spread.
- `Aula4/`: Funções de Ordem Superior (Higher-Order Functions - HOFs) e Closures.
- `Aula5/`: Programação assíncrona com Promises e Async/Await.
- `Aula6/`: Módulos JavaScript (ES Modules).
- `Aula7/`: Manipulação do Document Object Model (DOM).

---

## 🚀 Como Executar os Exemplos

Para rodar os exemplos deste repositório, você precisará ter o **Node.js** instalado em sua máquina.

1.  **Instale o Node.js:** Baixe e instale a versão LTS mais recente em [nodejs.org](https://nodejs.org/).

2.  **Clone o Repositório:**

    ```bash
    git clone https://github.com/monickecunha/estudos-javascript.git
    cd estudos-javascript
    ```

3.  **Navegue até a Pasta Desejada e Execute:**
    Cada arquivo `.js` pode ser executado individualmente usando o Node.js. Por exemplo:

    ```bash
    # Para executar um exercício da Aula1:
    cd Aula1
    node ex1.js

    # Para executar um exemplo da Aula2:
    cd ../Aula2/Exemplos
    node filter.js

    # Para executar um arquivo HTML que usa JavaScript (Aula6, Aula7),
    # abra o arquivo .html diretamente no seu navegador.
    ```

---

## 📝 Detalhes das Pastas

### `Aula1/`

Esta pasta contém exercícios práticos sobre os conceitos mais básicos do JavaScript:

- **`ex1.js`**: Demonstra declaração de variáveis (`const`, `let`), tipos de dados primitivos (string, number, boolean), objetos e arrays.
- **`ex2.js`**: Explora operadores matemáticos, de atribuição, de comparação (== vs ===), lógicos (&&, ||) e o operador ternário.
- **`ex3.js`**: Exemplo de estrutura condicional `if/else` para verificar se um número é par ou ímpar.
- **`ex4.js`**: Mais exemplos de `if/else if/else` para controle de fluxo baseado em múltiplos critérios (ex: notas escolares).
- **`ex5.js`**: Ilustra o uso da estrutura condicional `switch` para múltiplos caminhos baseados em um valor.
- **`ex6.js`**: Exemplo de laço de repetição `for`.
- **`ex7.js`**: Exemplo de laço de repetição `while`.
- **`ex8.js`**: Demonstra o uso do laço `for...of` para iterar sobre arrays.
- **`ex9.js`**: Apresenta a criação e uso de funções, incluindo funções de seta (`=>`) e o uso do operador `...` (rest parameter) em parâmetros de função.

### `Aula2/`

Esta pasta foca na manipulação de arrays e objetos usando métodos modernos do JavaScript:

#### `Aula2/Exemplos/`

- **`every.js`**: Demonstra o método `Array.prototype.every()` para verificar se _todos_ os elementos em um array satisfazem uma condição.
- **`filter.js`**: Ilustra o método `Array.prototype.filter()` para criar um novo array contendo apenas os elementos que passam em um teste.
- **`find.js`**: Mostra como usar `Array.prototype.find()` para encontrar o _primeiro_ elemento em um array que satisfaça uma condição.
- **`findIndex.js`**: Demonstra `Array.prototype.findIndex()` para obter o _índice_ do primeiro elemento que satisfaça uma condição.
- **`forEach.js`**: Exemplo de uso de `Array.prototype.forEach()` para iterar sobre os elementos de um array.
- **`map.js`**: Ilustra `Array.prototype.map()` para criar um novo array transformando cada elemento do original.
- **`metodosComuns.js`**: Apresenta métodos de array frequentemente usados como `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `slice()` e `concat()`.
- **`reduce.js`**: Demonstra o método `Array.prototype.reduce()` para "reduzir" um array a um único valor.
- **`some.js`**: Mostra como usar `Array.prototype.some()` para verificar se _pelo menos um_ elemento em um array satisfaz uma condição.

#### `Aula2/Exercicios/`

- **`ex1.js`**: Exercício prático para manipulação de array usando `push`, `shift`, `splice`, e acesso a elementos.
- **`ex2.js`**: Exercício que aplica `map`, `filter` e `reduce` em um array de números.
- **`ex3.js`**: Exercício utilizando `find` e `some` em um array de objetos.

### `Aula3/`

Esta pasta aborda a manipulação de objetos e arrays, com ênfase em desestruturação e spread:

#### `Aula3/Exemplos/`

- **`desestruturacaoArrays.js`**: Demonstra a desestruturação de arrays para extrair valores em variáveis individuais e o uso do operador rest (`...`) para coletar o restante dos elementos.
- **`manipulandoPropriedades.js`**: Exemplos de como adicionar, modificar e remover propriedades de objetos.
- **`objetos.js`**: Fundamentos sobre objetos literais, acesso a propriedades via notação de ponto (`.`) e colchetes (`[]`).
- **`spreadEmArrays.js`**: Ilustra o uso do operador spread (`...`) para combinar arrays e criar cópias rasas de arrays.
- **`spreadEmObj.js`**: Demonstra o uso do operador spread (`...`) para combinar objetos e criar cópias de objetos, com adição/modificação de propriedades.

#### `Aula3/Exercicios/`

- **`ex1.js`**: Exercício completo de manipulação de objetos, incluindo acesso, modificação, desestruturação (inclusive com renomeação de propriedade), spread e uso de `Object.keys()` e `Object.values()`.
- **`ex2.js`**: Exercício prático de desestruturação de arrays.
- **`ex3.js`**: Exercício aplicando o operador spread para combinar arrays.

### `Aula4/`

Esta pasta explora dois conceitos avançados e poderosos do JavaScript:

- **`ex1.js`**: Exemplo de **Higher-Order Function (HOF)** que retorna outra função (`multiplicarPor`), demonstrando como funções podem ser passadas como argumentos ou retornadas.
- **`ex2.js`**: Ilustra o conceito de **Closure** com um `contadorDeCliques`, mostrando como uma função interna "lembra" o ambiente em que foi criada.
- **`ex3.js`**: Um exemplo mais complexo de HOF combinada com Closure para criar um filtro de array por propriedade.
- **`ex4.js`**: Outro exemplo de HOF e Closure para criar um validador de comprimento de texto reutilizável.

### `Aula5/`

Esta pasta foca na programação assíncrona, essencial para interações web:

#### `Aula5/Exemplos/`

- **`async.js`**: Demonstra o uso de `async`/`await` para escrever código assíncrono que parece síncrono, facilitando a leitura e o tratamento de erros com `try-catch`.
- **`promise.js`**: Explica o funcionamento das **Promises**, com exemplos de `resolve` e `reject`, e o encadeamento de `.then()`, `.catch()` e `.finally()`.
- **`workspace.js`**: Um exemplo prático de requisição HTTP assíncrona usando a `Fetch API` para buscar dados de uma URL externa.

#### `Aula5/Exercicios/`

- **`ex1.js`**: Exercício de login simulado usando Promises.

* **`ex2.js`**: Exercício com `async`/`await` e `Promise.all()` para carregar múltiplos dados assíncronos em paralelo.
* **`ex3.js`**: Exercício de paginação assíncrona com `async`/`await` em um loop, incluindo tratamento de erro para páginas não encontradas.
* **`ex4.js`**: Exercício que combina `async`/`await` para realizar uma sequência de operações assíncronas (login e notificação).

### `Aula6/`

Esta pasta aborda a modularização do código JavaScript:

- **`index.html`**: Um arquivo HTML simples que importa o módulo `main.js`.
- **`main.js`**: O módulo principal que importa e utiliza funcionalidades de `utils.js`.
- **`utils.js`**: Demonstra a exportação de constantes (`export const`), funções nomeadas (`export function`) e uma exportação padrão (`export default`).

### `Aula7/`

Esta pasta explora a manipulação do DOM (Document Object Model):

- **`index.htm`**: Um arquivo HTML com vários elementos (título, parágrafos, botões, lista, input) que serão manipulados pelo JavaScript.
- **`script.js`**: Contém o código JavaScript que demonstra como:
  - Selecionar elementos do HTML por ID e classe.
  - Alterar conteúdo de texto (`textContent`).
  - Modificar estilos CSS (`.style.color`).
  - Adicionar **event listeners** a botões para reagir a cliques.
  - Criar novos elementos HTML (`createElement`) e adicioná-los à página (`appendChild`).
  - Capturar entrada de texto de campos de input.

---

## 🤝 Contribuições

Sinta-se à vontade para explorar o código, sugerir melhorias ou relatar problemas.

---

## 👨‍💻 Autor

[monickecunha](https://github.com/monickecunha) - Estudante de Análise e Desenvolvimento de Sistemas e entusiasta Fullstack.
