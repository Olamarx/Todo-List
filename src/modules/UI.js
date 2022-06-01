import Storage from './localStorage.js';

export default class UI {
    static loadLocalStoreAndDisplayHTML = () => {
      const array = Storage.takingFromStorage();
      array.forEach((element) => {
        UI.DisplayHTML(element);
      });
    }

    static DisplayHTML = (array) => {
      const li = `<li class="to-do-list">
            <div class="div-left">
            <input type="checkbox" class="checker" id="checker">
            <input type="text" class="text" value="${array.task}" readonly>
            </div>
            <i class="fa fa-trash-o de del-btn" id="${array.index}" ></i>
            <button class="edit"> Edit</button>
            </li>`;
      document.querySelector('#list').insertAdjacentHTML('beforeend', li);
    }

    // <i class="fas fa-ellipsis-v options"></i>
    static clearField = () => {
      document.querySelector('#input').value = '';
    }

    static deleteTodo = (element) => {
      if (element.classList.contains('del-btn')) {
        element.parentElement.remove();
      }
    }
}