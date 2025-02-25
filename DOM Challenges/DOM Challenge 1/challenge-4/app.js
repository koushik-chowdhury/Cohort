// /**
//  * Write your challenge solution here
//  */
let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");
let totalTask = document.getElementById("totalTasks");
let completedTasks = document.getElementById("completedTasks");
let emptyList = document.querySelector(".empty-list");

let completed = 0;
let counter = 0;

addButton.addEventListener("click", addTask);
function addTask() {
  // creating parent list element
  let li = document.createElement("li");
  li.className = "task-item";

  // creating checkbox
  let inputBox = document.createElement("input");
  inputBox.type = "checkbox";
  inputBox.className = "complete-checkbox";

  // creating span tag for holding text
  let span = document.createElement("span");
  span.className = "task-text";

  // creating delete button
  let deleteButton = document.createElement("button");
  deleteButton.classList = "delete-button";
  deleteButton.innerText = "Delete";

  // adding task
  if (taskInput.value === "") {
    return;
  } else {
    span.innerText = taskInput.value.trim();
    counter++;
    totalTask.innerHTML = `Total tasks: ${counter}`;
  }
  //adding everything
  li.appendChild(inputBox);
  li.appendChild(span);
  li.appendChild(deleteButton);
  taskList.appendChild(li);
  emptyList.classList.add("hidden");
  taskInput.value = "";

  //deleting task
  deleteButton.addEventListener("click", function () {
    li.remove(); // Remove the task when delete button is clicked
    counter--;
    if (!counter) {
      emptyList.classList.remove("hidden");
    }
    completedTasks.innerHTML = `Completed: ${--completed}`;
    totalTask.innerHTML = `Total tasks: ${counter}`;
    console.log(totalTask.length);
  });

  inputBox.addEventListener("change", () => {
    if (inputBox.checked) {
      span.classList.add("completed");
      completedTasks.innerHTML = `Completed: ${++completed}`;
    } else {
      span.classList.remove("completed");
      completedTasks.innerHTML = `Completed: ${--completed}`;
    }
  });
}

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
