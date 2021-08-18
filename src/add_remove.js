function saveToStorage(taskArray) {
  localStorage.setItem('myTasks', JSON.stringify(taskArray));
}

function addTask(taskArray) {
  const inputList = document.getElementById('inputList');
  const task = {
    description: inputList.value,
    completed: false,
    index: taskArray.length + 1,
  };
  taskArray.push(task);
  saveToStorage(taskArray);
  inputList.innerHTML = '';
}

function getFromStorage() {
  JSON.parse(localStorage.getItem('myTasks'));
}

export { addTask, saveToStorage, getFromStorage };