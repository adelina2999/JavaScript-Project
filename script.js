function createNewTask() {
  let tasks = []
  if (localStorage.getItem('tasks') !== null) {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  
  tasks.push(getTaskFromForm())
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function removeCreatedTask() {
  localStorage.removeItem(document.getElementById('taskToBeRemoved').value);
}

function getTaskFromForm() {
  const taskName = document.getElementById('taskNameInput').value
  return {
    name: taskName,
    duration: document.getElementById('durationInput').value,
    status: document.getElementById('isDone').checked
  }
}

function getTaskFromLocalStorage() {
  const toDoDiv = document.getElementById('todo')
  let tasks = JSON.parse(localStorage.getItem('tasks'))
  let table = document.getElementById('myTable')

  for(let i = 0; i < tasks.length; i++){
    const row = table.insertRow(i)
    const cell1 = row.insertCell(0)
    const cell2 = row.insertCell(1)
    const cell3 = row.insertCell(2)
    cell1.innerHTML = tasks[i].name
    cell2.innerHTML = tasks[i].duration
    cell3.innerHTML = tasks[i].status

    toDoDiv.appendChild(table)
  }
  
  
}

getTaskFromLocalStorage()