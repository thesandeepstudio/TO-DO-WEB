const addTaskButton = document.getElementById("add-task-btn");
const newTaskList = document.querySelector(".new-task-list");
const newTaskInput = document.getElementById("new-task");
const taskList = document.querySelector(".task-list");
const saveTaskBtn = document.getElementById("save-task");
const cancelTaskBtn = document.getElementById("cancel-task");

addTaskButton.addEventListener("click", function () {
  if (
    newTaskList.style.display === "none" ||
    newTaskList.style.display === ""
  ) {
    newTaskList.style.display = "flex";
    newTaskInput.focus();
  } else {
    newTaskList.style.display = "none";
  }
});
