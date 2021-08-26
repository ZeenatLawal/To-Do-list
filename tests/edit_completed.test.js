/**
 * @jest-environment jsdom
 */
import status from '../src/status.js';

describe('updating the completed status of a task', () => {
  document.body.innerHTML = '<input type="checkbox" id="checkbox">';
  const checkbox = document.getElementById('checkbox');
  const myTasks = [
    {
      description: 'Walk The Dog',
      completed: false,
      index: 1,
    },

    {
      description: 'Do Laundry',
      completed: false,
      index: 2,
    },

  ];

  test('Update completed status to true', () => {
    checkbox.checked = true;
    status(checkbox, myTasks[1]);
    expect(myTasks[1].completed).toBeTruthy();
  });

  test('Change completed status to false', () => {
    checkbox.checked = false;
    status(checkbox, myTasks[1]);
    expect(myTasks[1].completed).toBeFalsy();
  });
});