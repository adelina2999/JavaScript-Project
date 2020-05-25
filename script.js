const LOCAL_STORAGE_TASKS_KEY = 'tasks'

function createNewTask() {
  let tasks = []
  if (localStorage.getItem(LOCAL_STORAGE_TASKS_KEY) !== null) {
    tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY))
  }
  
  tasks.push(getTaskFromForm())
  localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(tasks))
}

function removeCreatedTask() {
  const clickedElementID = window.event.target.id
  const newTasks = []
  let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY))
  for (let i = 0; i < tasks.length; i++){
    if(tasks[i].id != clickedElementID) {
      newTasks.push(tasks[i])
    }
  }
  localStorage.removeItem(LOCAL_STORAGE_TASKS_KEY)
  localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(newTasks))
}

function getTaskFromForm() {
  const taskName = document.getElementById('taskNameInput').value
  return {
    id: generateUUID(),
    name: taskName,
    duration: document.getElementById('durationInput').value,
    status: document.getElementById('isDone').checked
  }
}

function getTaskFromLocalStorage() {
  const toDoDiv = document.getElementById('todo')

  if (localStorage.getItem(LOCAL_STORAGE_TASKS_KEY) !== null) {
    let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY))
    let table = document.getElementById('myTable')

    for(let i = 0; i < tasks.length; i++){
      const row = table.insertRow(i)
      const cell1 = row.insertCell(0)
      const cell2 = row.insertCell(1)
      const cell3 = row.insertCell(2)
      const cell4 = row.insertCell(3)
      cell1.innerHTML = tasks[i].name
      cell2.innerHTML = tasks[i].duration
      cell3.innerHTML = tasks[i].status
      cell4.innerHTML = `<button onclick="removeCreatedTask()" class="btn btn-danger">Remove</button>`
      cell4.children[0].id = tasks[i].id
      toDoDiv.appendChild(table)
    }
  }
}

function deleteLocalStorage(){
  localStorage.removeItem(LOCAL_STORAGE_TASKS_KEY)
}

getTaskFromLocalStorage()

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
