/**
 * @jest-environment jsdom
 */
import { addTask } from './src/add_remove.js';

// class LocalStorageMock {
//   constructor() {
//     this.store = {};
//   }

//   clear() {
//     this.store = {};
//   }

//   getItem(key) {
//     return this.store[key] || null;
//   }

//   setItem(key, value) {
//     this.store[key] = String(value);
//   }

//   removeItem(key) {
//     delete this.store[key];
//   }
// };

// global.localStorage = new LocalStorageMock;


describe('adding a task to the list', () => {
  test('Add one new item to the list', () => {
    document.body.innerHTML = `<div class="card">
      <div class="list-head">
        <input type="text" placeholder="Add to your list..." id="inputList">
      </div>
      <div>
        <ul id="main-list">
        </ul>
      </div>
    </div>`;
    // const inputList = document.getElementById('inputList');
    // inputList.value = 'Zeenat';
    const task = [];
    addTask(task);
    expect(task).toHaveLength(1);
  });
});

// jest.spyOn(localStorage, 'setItem');
// localStorage.setItem = jest.fn();
