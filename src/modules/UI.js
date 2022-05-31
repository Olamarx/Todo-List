import Storage from "./localStorage.js"

const content = Storage.takingFromStorage()

export default class UI{
    static render = () => {
        for (let each of content) {
            
        const li = `<li class="to-do-list">
            <div class="div-left">
            <input type="checkbox" class="checker" id="checker">
            <input type="text" class="text" value="${each.todo}">
            </div>
            <i class="fas fa-ellipsis-v options"></i>
            <i class="fa fa-trash-o de del-btn"></i>
            </li>`
        
        document.querySelector('#list').insertAdjacentHTML('afterbegin', li)
        }
    }

    static display = () => {
        
    }

}