import 'lodash';
import './style.css';
import { drag, drop, allowDrop } from './drag-drop.js';

const mainList = document.getElementById('main-list');

const myTasks = [{
  index: 0,
  description: 'Read ES6 Modules',
  completed: true,
},
{
  index: 1,
  description: 'Read Webpack',
  completed: true,
},
{
  index: 2,
  description: 'List structure project',
  completed: false,
}];

function displayTasks() {
  for (let i = 0; i < myTasks.length; i += 1) {
    const content = `<div class="list-input"><input type="checkbox"> <p>${myTasks[i].description}</p></div><span><i class="fas fa-ellipsis-v"></i></span>`;

    const listItem = document.createElement('li');
    listItem.innerHTML = `${content}`;
    listItem.className = 'list-items';
    listItem.setAttribute('draggable', 'true');
    listItem.addEventListener('dragstart', drag);
    listItem.addEventListener('dragover', allowDrop);
    listItem.addEventListener('drop', drop);
    mainList.appendChild(listItem);
  }
}

window.addEventListener('load', () => {
  displayTasks();
});