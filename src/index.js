import 'lodash';
import './style.css';

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
  // let content = '';
  for (let i = 0; i < myTasks.length; i += 1) {
    const content = `<div class="list-input"><input type="checkbox"> <p>${myTasks[i].description}</p></div><span><i class="fas fa-ellipsis-v"></i></span>`;

    const listItem = document.createElement('li');
    listItem.innerHTML = `${content}`;
    listItem.className = 'list-item';
    mainList.appendChild(listItem);
  }
}

window.addEventListener('load', () => {
  displayTasks();
});