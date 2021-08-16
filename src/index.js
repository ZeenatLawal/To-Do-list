import 'lodash';
import './style.css';

const mainList = document.getElementById('main-list');
// const listItem = document.createElement('li');
// listItem.innerHTML = 'Testing';
// mainList.appendChild(listItem);

const myTasks = [];

function Task(description, completed, index) {
  this.description = description;
  this.completed = completed;
  this.index = index;
}

function createTasks() {
  const task = new Task('Testing', true, 0);
  const task1 = new Task('Testing', true, 1);
  const task2 = new Task('Testing', true, 2);
  myTasks.push(task, task1, task2);
}

function displayTasks() {
  let content = '';
  for (let i = 0; i < myTasks.length; i += 1) {
    content = `${myTasks[i].description} ${myTasks[i].completed}, ${myTasks[i].index}`;

    const listItem = document.createElement('p');
    listItem.innerText = content;
    mainList.appendChild(listItem);
  }
}

window.addEventListener('load', () => {
  createTasks();
  displayTasks();
});