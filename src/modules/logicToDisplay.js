import Todo from './todoClass.js';
import UI from './UI.js';

export default class Logic {
    static loadUponReload = () => {
        window.addEventListener('load', UI.loadLocalStoreAndDisplayHTML())
    }

    static addFunc = () => {
        const input = document.querySelector('#input')
        const task = input.value;
        const index = 
        const todoClass = new Todo()
    }
}