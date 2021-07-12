import { getQuery } from "./utils";

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

export function addTodo(e, form) {
  e.preventDefault();

  const { todoContent } = form;
  const newTodo = document.createElement("li");

  newTodo.setAttribute(
    "class",
    `h-12 flex items-center px-6 
    dark:bg-darkTheme-veryDarkDesaturatedBlue
    justify-start`
  );
  newTodo.innerHTML = `
    <button class="checkbox-completed mr-3"></button>
    <span class="dark:text-white text-sm md:text-base lg:text-md">
      ${todoContent.value}
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
  todoContent.value = "";
  // storeTodo(todoContent.value);
}

// export function getStoredTodos() {
//   let todos;

//   if (localStorage.getItem("todos") == null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }

//   return todos;
// }

// function storeTodo(todo) {
//   const todos = getStoredTodos();

//   console.log(todos);
// }
