/* eslint-disable no-loop-func */
import './style.css';
import status from './status.js';
import addTask from './add_remove.js';

const mainList = document.getElementById('main-list');

let myTasks = [];

function saveToStorage(taskArray) {
  localStorage.setItem('tasks', JSON.stringify(taskArray));
}

function displayTasks() {
  mainList.innerHTML = '';
  for (let i = 0; i < myTasks.length; i += 1) {
    const content = `<div class="list-input"><input type="checkbox"> <p id="description">${myTasks[i].description}</p></div><span><i class="fas fa-ellipsis-v"></i></span>`;

    const listItem = document.createElement('li');
    listItem.innerHTML = `${content}`;
    listItem.className = 'list-item';
    mainList.appendChild(listItem);

    const listInput = listItem.firstChild;
    const checkbox = listInput.firstChild;

    if (myTasks[i].completed) {
      checkbox.classList.add('checked');
      checkbox.checked = true;
      checkbox.addEventListener('change', (e) => {
        status(e, myTasks[i]);
        saveToStorage(myTasks);
      });
    } else {
      checkbox.classList.add('unchecked');
      checkbox.addEventListener('change', (e) => {
        status(e, myTasks[i]);
        saveToStorage(myTasks);
      });
    }
  }
}

const enterBtn = document.getElementById('enter');
enterBtn.onclick = () => {
  addTask(myTasks);
  displayTasks();
};

const inputList = document.getElementById('inputList');
inputList.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask(myTasks);
    displayTasks();
  }
});

function getFromStorage() {
  const local = JSON.parse(localStorage.getItem('tasks'));
  if (local) {
    myTasks = local;
  }
  if (myTasks.length === 0) {
    mainList.innerHTML = '<li class="list-item"><div class="list-input"><p>To-Do List is empty.</p></div></li>';
  } else {
    displayTasks();
  }
}

window.onload = getFromStorage();