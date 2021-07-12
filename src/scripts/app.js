import { getInitialTheme, toggleTheme } from "./theme";
import { markTodo, removeTodo } from "./todo";
import { getAllQueries, getQuery } from "./utils";

getQuery("#toggle-theme-btn").addEventListener("click", toggleTheme);
getAllQueries(".checkbox-completed").forEach(element =>
  element.addEventListener("click", markTodo)
);
getAllQueries(".remove-todo").forEach(element =>
  element.addEventListener("click", removeTodo)
);
window.addEventListener("load", getInitialTheme);
