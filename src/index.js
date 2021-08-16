import 'lodash';
import './style.css';

const mainList = document.getElementById('main-list');

const myTasks = [{
  description: 'Read ES6 Modules',
  completed: true,
  index: 0,
},
{
  description: 'Read Webpack',
  completed: true,
  index: 1,
},
{
  description: 'List structure project',
  completed: false,
  index: 2,
}];

function displayTasks() {
  let content = '';
  for (let i = 0; i < myTasks.length; i += 1) {
    content = `${myTasks[i].description}`;

    const listItem = document.createElement('li');
    listItem.innerText = content;
    listItem.className = 'list-item';
    mainList.appendChild(listItem);
  }
}

window.addEventListener('load', () => {
  displayTasks();
});