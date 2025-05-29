const todosAdultos = [25, 30, 40].every(idade => idade >= 18);
console.log(todosAdultos); // true
const nemTodosAdultos = [15, 20, 25].every(idade => idade >= 18);
console.log(nemTodosAdultos); // false