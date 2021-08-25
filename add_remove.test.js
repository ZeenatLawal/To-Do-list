/**
 * @jest-environment jsdom
 */
import { addTask } from './src/add_remove.js';

describe('adding a task to the list', () => {
  document.body.innerHTML = '<input type="text" placeholder="Add to your list..." id="inputList">';
  const inputList = document.getElementById('inputList');
  inputList.value = 'Zeenat';
  const myTasks = [];

  test('Add two new tasks to the list', () => {
    addTask(myTasks);
    addTask(myTasks);
    expect(myTasks).toHaveLength(2);
  });

  test('Check description of first task', () => {
    expect(myTasks[0].description).toBe('Zeenat');
  });

  test('Check status of first task', () => {
    expect(myTasks[0].completed).toBe(false);
  });

  test('Check index of second task', () => {
    expect(myTasks[1].index).toBe(2);
  });
});
