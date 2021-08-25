import { addTask } from './src/add_remove.js';

describe('adding a task to the list', () => {
  test('Add one new item to the list', () => {
    const task = {
      description: 'Read webpack',
      completed: false,
      index: 1,
    };
    document.body.innerHTML = '<div>'
      + '  <ul id="main-list"></li>'
      + '</div>';
    addTask(task);
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(1);
  });
});

// jest.spyOn(localStorage, 'setItem');
// localStorage.setItem = jest.fn();
