import Todo from './todoClass.js';
import UI from './UI.js';
import Store from './localStorage.js';

export default class Logic {
    static loadUponReload = () => {
      window.addEventListener('load', UI.loadLocalStoreAndDisplayHTML());
    }

    static input = document.querySelector('#input')

    static addFunc = () => {
      if (Logic.input.value) {
        const Storage = Store.takingFromStorage();
        const task = Logic.input.value;
        const index = Storage.length + 1;
        const todoClass = new Todo(task, index);
        UI.DisplayHTML(todoClass);
        Store.setLocalStorage(todoClass);
        UI.clearField();
      }
    }

    static enterFunc = () => {
      Logic.input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          Logic.addFunc();
        }
      });
    }

    static clickFunct = () => {
      const arrow = document.querySelector('.fa-arrow-circle-left');
      arrow.addEventListener('click', () => {
        Logic.addFunc();
      });
    }

    static displayDelete = () => {
      const UL = document.querySelector('#list');
      UL.addEventListener('click', (e) => {
        const { target } = e;
        if (target.classList.contains('text')) {
          const ellipsis = target.parentElement.parentElement.children[1];
          const trash = target.parentElement.parentElement.children[2];
          if (ellipsis) {
            ellipsis.classList.add('active');
            trash.classList.add('active');
          }
          Array.from(document.querySelector('#list').children).forEach((child) => {
            if (e.target.children[1] && e.target.children[2]) {
              child.children[1].classList.remove('active');
              child.children[2].classList.remove('active');
            }
          });
          trash.addEventListener('click', () => {
            UI.deleteTodo(trash);
            const text = target.parentElement.parentElement.children[0].children[1].value;
            Store.removeFromLocalStorage(text);
          });
        }
      });
    }
}