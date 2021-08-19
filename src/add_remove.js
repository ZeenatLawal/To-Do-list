function addTask(taskArray) {
  const inputList = document.getElementById('inputList');
  const task = {
    description: inputList.value,
    completed: false,
    index: taskArray.length + 1,
  };
  taskArray.push(task);
  localStorage.setItem('tasks', JSON.stringify(taskArray));
  inputList.value = '';
}

function editTask(icon, text, i) {
  icon.addEventListener('click', () => {
    text.setAttribute('contenteditable', 'true');
    text.classList.add('inputEdit');
    icon.classList.remove('fa-edit');
    icon.classList.add('fa-trash-alt');
    const data = JSON.parse(localStorage.getItem('tasks'));
    data[i].description = text.innerHTML;
    text.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        data[i].description = text.innerHTML;
        localStorage.setItem('tasks', JSON.stringify(data));
        icon.classList.remove('fa-trash-alt');
        icon.classList.add('fa-edit');
        text.classList.remove('inputEdit');
        text.setAttribute('contenteditable', 'false');
      }
    });
  });
}

export { addTask, editTask };