async function buscarTodo() {
  try {
    console.log("Buscando um TODO...");
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    // Verifica se a resposta foi bem-sucedida (status 200-299)
    if (!response.ok) {
      throw new Error(`Erro HTTP! Status: ${response.status}`);
    }

    const todo = await response.json(); // Converte a resposta para JSON
    console.log("TODO encontrado:", todo);
  } catch (error) {
    console.error("Erro na requisição fetch:", error);
  }
}

buscarTodo();