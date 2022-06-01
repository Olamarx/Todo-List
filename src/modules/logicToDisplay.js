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
        if (target.classList.contains('del-btn')) {
          const trash = target.parentElement.children[1];
          UI.deleteTodo(trash);
          const text = target.parentElement.children[0].children[1].value;
          Store.removeFromLocalStorage(text);
        }
      });
    }

     static edit = () => {
       const UL = document.querySelector('#list');

       UL.addEventListener('click', (e) => {
         const inputReadonly = e.target.parentElement.children[0].children[1];
         const formerInput = e.target.parentElement.children[0].children[1].value;
         if (e.target.classList.contains('edit')) {
           inputReadonly.removeAttribute('readonly');
           inputReadonly.focus();
           const editBtn = inputReadonly.parentElement.parentElement.children[2];
           editBtn.innerHTML = 'Save';
           editBtn.classList.add('save');
           editBtn.classList.remove('edit');
         }

         document.querySelectorAll('.text').forEach((input) => {
           const editbtn = input.parentElement.parentElement.children[2];
           editbtn.addEventListener('click', () => {
             const newtodo = e.target.parentElement.children[0].children[1].value;
             if (editbtn.classList.contains('save')) { Store.editTodo(formerInput, newtodo); }
             document.location.reload();
           });
         });
       });
     }
}