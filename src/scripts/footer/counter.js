import { getAllQueries, getQuery } from "../utils";

export default function setCounter() {
  const todos = getAllQueries(".todos-list li");
  const counter = getQuery("#count");
  let count = 0;

  todos.forEach(todo => {
    if (!todo.classList.contains("marked")) count = 1 + count;
  });

  counter.textContent = `${count} items left`;
}
