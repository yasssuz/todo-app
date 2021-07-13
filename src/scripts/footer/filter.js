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

function filterActive(todos) {
  todos.forEach(todo => {
    if (todo.classList.contains("marked")) {
      todo.style.display = "none";
    } else {
      todo.style.display = "flex";
    }
  });
}

function filterCompleted(todos) {
  todos.forEach(todo => {
    if (!todo.classList.contains("marked")) {
      todo.style.display = "none";
    } else {
      todo.style.display = "flex";
    }
  });
}

function handleSelected(target) {
  const editArea = getAllQueries(".filtering-area button");

  editArea.forEach(btn => {
    btn.classList.remove("selected");

    if (btn.classList.contains(target)) {
      btn.classList.add("selected");
    }
  });
}

export function filterTodos(e) {
  const target = e.target;
  const todos = getAllQueries(".todos-list li");

  if (target.classList.contains("active-filter-option")) {
    handleSelected("active-filter-option");
    return filterActive(todos);
  }

  if (target.classList.contains("completed-filter-option")) {
    handleSelected("completed-filter-option");
    return filterCompleted(todos);
  }

  if (target.classList.contains("all-filter-option")) {
    handleSelected("all-filter-option");

    todos.forEach(todo => {
      todo.style.display = "flex";
    });
  }
}
