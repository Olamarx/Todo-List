import Todo from './todoClass.js';
import UI from './UI.js';
import Store from './localStorage.js';

export default class Logic {
    static loadUponReload = () => {
        window.addEventListener('load', UI.loadLocalStoreAndDisplayHTML())
    }

    static addFunc = () => {
        const input = document.querySelector('#input')
        
        if (input.value) {
        const Storage = Store.takingFromStorage()
        const task = input.value;
        const index = Storage.length + 1;
        const todoClass = new Todo(task, index)
        UI.DisplayHTML(todoClass)
        Store.setLocalStorage(todoClass)
        UI.clearField()
        }
    }

    static enterAndClick = () => {
        const 
    }
}