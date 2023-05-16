document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskDescription = document.getElementById('new-task-description').value;
    const taskElement = document.createElement('li');
    taskElement.textContent = taskDescription;
    taskList.appendChild(taskElement);
    //clear input field
    document.getElementById('new-task-description').value = ""
  });
});