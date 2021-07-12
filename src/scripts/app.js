import { getInitialTheme, toggleTheme } from "./theme";
import { addTodo, markTodo, removeTodo } from "./todo";
import { getAllQueries, getQuery } from "./utils";

const form = document.forms.todoCreation;

// change theme feature
getQuery("#toggle-theme-btn").addEventListener("click", toggleTheme);

// saved/initial theme feature
window.addEventListener("load", getInitialTheme);

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
});

// add todo feature
form.addEventListener("submit", e => addTodo(e, form));

// set observer config
observer.observe(getQuery(".todos-list"), {
  childList: true,
});
