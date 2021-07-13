import { getQuery } from "./utils";

export function getStoredTodos() {
  let todos;

  if (localStorage.getItem("todos") == null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  return todos;
}

export function storeTodo(todo) {
  const todos = getStoredTodos();

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function markTodo(e) {
  const todoBtn = e.target;

  todoBtn.classList.toggle("marked");
  todoBtn.parentElement.classList.toggle("marked");
}

export function removeTodo(e) {
  const todoElement = e.target.parentElement;
  const todoValue = e.target.previousElementSibling.innerText;
  const todos = getStoredTodos();

  todos.forEach((todo, index) => {
    if (todo === todoValue) todos.splice(index, 1);
  });
  localStorage.setItem("todos", JSON.stringify(todos));
  todoElement.classList.add("removing-animation");
  todoElement.addEventListener("transitionend", () => todoElement.remove());
}

export function addTodo(todo) {
  const newTodo = document.createElement("li");

  newTodo.setAttribute(
    "class",
    `h-12 flex items-center px-6 
    dark:bg-darkTheme-veryDarkDesaturatedBlue
    justify-start
    md:h-16
    `
  );
  newTodo.innerHTML = `
    <button class="checkbox-completed mr-3"></button>
    <span class="dark:text-white text-sm md:text-lg">
      ${todo}
    </span>
    <button class="remove-todo ml-auto lg:hidden">
      <img
        class="pointer-events-none"
        src="./assets/icon-cross.svg"
        alt="remove todo"
      />
    </button>
  `;
  getQuery(".todos-list").appendChild(newTodo);
}

export function displayStoredTodos() {
  const todos = getStoredTodos();

  todos.map(todo => addTodo(todo));
}
