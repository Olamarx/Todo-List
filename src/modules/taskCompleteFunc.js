import Storage from './localStorage.js';
import UI from './UI.js';

export default class TaskCompletedFunc {
    static clearCompleted = (describe) => {
      const arr = Storage.takingFromStorage();
      arr.forEach((todo) => {
        if (describe === todo.task) {
          todo.completed = !todo.completed;
        }
      });
      localStorage.setItem('library', JSON.stringify(arr));
    }

      static deleteCompletedTemplate = () => {
        const arr = Storage.takingFromStorage();
        arr.filter((todo) => todo.completed === true);
        // arr.forEach((todo, index) => {
        //   if (todo.completed) {
        //     arr.splice(index, 1);
        //     Storage.updateIndex(arr);
        //   }
        // });
        localStorage.setItem('library', JSON.stringify(arr));
      }

    static checkBox = () => {
      document.querySelectorAll('#list').forEach((check) => {
        check.addEventListener('change', (e) => {
          if (e.target.classList.contains('checker')) {
            const val = e.target.parentElement.parentElement.children[0].children[1].value;
            TaskCompletedFunc.clearCompleted(val);
          }
        });
      });
    }

    static deleteAllchecked = () => {
      const clearCompleted = document.querySelector('.footer__btn');
      clearCompleted.addEventListener('click', () => {
        const completedTask = Array.from(document.querySelectorAll('.checker:checked'));
        UI.clearTodoComp(completedTask);
        TaskCompletedFunc.deleteCompletedTemplate();
      });
    }
}