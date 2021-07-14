import setCounter from "./footer/counter";
import { clearCompleted, filterTodos } from "./footer/filter";
import { getInitialTheme, toggleTheme } from "./theme";
import {
  addTodo,
  displayStoredTodos,
  markTodo,
  removeTodo,
  storeTodo,
} from "./todo";
import { getAllQueries, getQuery } from "./utils";

const form = document.forms.todoCreation;

// change theme feature
getQuery("#toggle-theme-btn").addEventListener("click", toggleTheme);

// saved/initial theme feature
window.addEventListener("load", () => {
  getInitialTheme();
  displayStoredTodos();
});

// observe changes on the todos list
const observer = new MutationObserver(() => {
  // mark todo as done feature
  getAllQueries(".checkbox-completed").forEach(element =>
    element.addEventListener("click", markTodo)
  );

  // remove todo feature
  getAllQueries(".remove-todo").forEach(element =>
    element.addEventListener("click", removeTodo)
  );

  // update counter
  setCounter();
});

// clear completed feature
getQuery("#clear-completed-option").addEventListener("click", clearCompleted);

// filtering feature
getAllQueries(".filtering-area").forEach(element =>
  element.addEventListener("click", filterTodos)
);

// add todo feature
form.addEventListener("submit", e => {
  e.preventDefault();

  const { todoContent } = form;

  addTodo(todoContent.value);
  storeTodo(todoContent.value);
  todoContent.value = ''
});

// set observer config
observer.observe(getQuery(".todos-list"), {
  childList: true,
});
