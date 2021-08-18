/* eslint-disable no-loop-func */
import './style.css';
import status from './status.js';
import { addTask, saveToStorage } from './add_remove.js';

const mainList = document.getElementById('main-list');

let myTasks = [];

function displayTasks() {
  mainList.innerHTML = '';
  let content = '';
  for (let i = 0; i < myTasks.length; i += 1) {
    content = `<div class="list-input"><input type="checkbox"> <p>${myTasks[i].description}</p></div><span><i class="fas fa-ellipsis-v"></i></span>`;

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

window.onload = () => {
  const local = localStorage.getItem('myTasks');
  if (local) {
    myTasks = JSON.parse(local);
  }
};