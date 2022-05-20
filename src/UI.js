/* eslint-disable */
import LocalStorageClass from "./localStorage.js"
export default class UI {
    static displayOnDOM() {
        const arr = LocalStorageClass.getTodo()
        arr.forEach((task) => {
            UI.displayContent(task)
        });
    }
    
    static displayContent(arr) {
    const li = `<li class="to-do-list">
        <div class="div-left">
        <input type="checkbox" class="checker" id="checker">
        <input type="text" class="text" value="${arr.task}">
        </div>
        <i class="fas fa-ellipsis-v options"></i>
        <i class="fa fa-trash-o de del-btn" id="${arr.index}"></i>
    </li>`
    document.querySelector('#list').insertAdjacentHTML('afterbegin', li)
    }

    static clearField() {
        document.querySelector('#input').value = '';
    }
    }
