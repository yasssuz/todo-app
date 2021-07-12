export function markTodo(e) {
  const todoBtn = e.target;

  todoBtn.classList.toggle("marked");
  todoBtn.parentElement.classList.toggle("marked");
}

export function removeTodo(e) {
  const todo = e.target.parentElement;

  todo.classList.add("removing-animation");
  todo.addEventListener("transitionend", () => todo.remove());
}
