// SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// EVENT LISTENERS
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// FUNCTIONS
function addTodo(event) {
  event.preventDefault();

  // Todo Div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");
  
  // Create Li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  // Check mark button
  const completedButton = document.createElement('button');
  completedButton.innerText = "complete";
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  
  // Trash BUTTON
  const trashButton = document.createElement('button');
  trashButton.innerText = "delete";
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // Append to list
  todoList.appendChild(todoDiv);

  // Clear input value
  todoInput.value = "";
}

function deleteCheck(e) {
  let item = e.target;

  // Delete todo
  if ( item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  // Check mark/ mark complete
  if ( item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}
