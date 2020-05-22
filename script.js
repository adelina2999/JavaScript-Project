function createNewTask() {
  const taskName = document.getElementById("taskNameInput").value
  const task = {
    name: taskName,
    duration: document.getElementById("durationInput").value,
    status: document.getElementById("isDone").checked
  }

  localStorage.setItem(taskName, JSON.stringify(task))
}

function removeCreatedTask() {
  localStorage.removeItem(document.getElementById("taskToBeRemoved").value);
}
