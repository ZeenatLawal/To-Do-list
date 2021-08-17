/* eslint-disable no-loop-func */
import 'lodash';
import './style.css';
import status from './status.js';

const mainList = document.getElementById('main-list');

let myTasks = [{
  description: 'Read ES6 Modules',
  completed: false,
  index: 0,
},
{
  description: 'Read Webpack',
  completed: false,
  index: 1,
},
{
  description: 'List structure project',
  completed: false,
  index: 2,
}];

function saveToStorage(taskArray) {
  localStorage.setItem('tasks', JSON.stringify(taskArray));
}

function displayTasks() {
  for (let i = 0; i < myTasks.length; i += 1) {
    const content = `<div class="list-input"><input type="checkbox"> <p>${myTasks[i].description}</p></div><span><i class="fas fa-ellipsis-v"></i></span>`;

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
      });
    } else {
      checkbox.classList.add('unchecked');
      checkbox.addEventListener('change', (e) => {
        status(e, myTasks[i]);
      });
    }
  }
}

function getFromStorage() {
  const local = localStorage.getItem('tasks');
  if (local) {
    myTasks = JSON.parse(local);
    displayTasks();
  }
}

window.onload = getFromStorage();