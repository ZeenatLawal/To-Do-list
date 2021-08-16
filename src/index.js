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
  myTasks.push(task);
}
