// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

const todos = [ "take out the trash", "clean Bun Bun's cage", "prep dinner"];

// Event Listeners
// document.addEventListener('DOMContentLoaded', populateTodo);

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Functions

// function populateTodo() {
//   // alert("document loaded");
//   todoList.innerHTML = "<li>hi</li>"
// }

function addTodo(event) {
  event.preventDefault();
  // alert('hello');

  // todoList.innerHTML = "<li>hi</li>"



  //Todo Div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");
  //create LI
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  //CHECK MARK BUTTON
  const completedButton = document.createElement('button');
  completedButton.innerText = "complete";
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  
  //Trash BUTTON
  const trashButton = document.createElement('button');
  trashButton.innerText = "delete";
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //append to list
  todoList.appendChild(todoDiv);

  //clear input value
  todoInput.value = "";
}

function deleteCheck(e) {
  console.log(e.target)
  let item = e.target;

  //DELETE TODO
  if ( item.classList[0] === "trash-btn") {
    // alert("take out the trash")
    const todo = item.parentElement;
    todo.remove();
  }

  //CHECK MARK
  if ( item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}
