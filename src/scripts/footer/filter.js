import { getStoredTodos } from "../todo";
import { getAllQueries } from "../utils";

export function clearCompleted() {
  const todos = getAllQueries(".todos-list li");
  const storedTodos = getStoredTodos();

  todos.forEach(todoEle => {
    if (todoEle.classList.contains("marked")) {
      const todoValue = todoEle.children[1].innerText;

      storedTodos.forEach((todoStorValue, index) => {
        if (todoStorValue === todoValue) storedTodos.splice(index, 1);

        localStorage.setItem("todos", JSON.stringify(storedTodos));
        todoEle.classList.add("removing-animation");
        todoEle.addEventListener("transitionend", () => todoEle.remove());
      });
    }
  });
}

export function filterTodos() {}
