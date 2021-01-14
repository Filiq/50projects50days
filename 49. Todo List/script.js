const todos = document.getElementById("todos");
const input = document.getElementById("input");
const form = document.getElementById("form");

const todosLS = JSON.parse(localStorage.getItem("todos"));

if (todosLS) {
  todosLS.forEach((todo) => {
    addTodo(todo.text, todo.class);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value === "") return;
  addTodo(e.target.children[0].value);
  clearInput();
});

function clearInput() {
  input.value = "";
}

function addTodo(text, type) {
  const todo = document.createElement("li");
  todo.innerText = text;
  if (text && type) {
    todo.classList.add("completed");
  }
  todos.appendChild(todo);
  updateLS();
}

todos.addEventListener("click", (e) => {
  completeTodo(e.target);
});

function completeTodo(todo) {
  todo.classList.toggle("completed");
  updateLS();
}

todos.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  removeTodo(e.target);
});

function removeTodo(todo) {
  todo.remove();
  updateLS();
}

function updateLS() {
  const todosEl = document.querySelectorAll("li");

  const todos = [];

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.textContent,
      class: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
