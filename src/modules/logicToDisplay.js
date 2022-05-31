import Todo from './todoClass.js';
import UI from './UI.js';
import Store from './localStorage.js';

export default class Logic {
    static loadUponReload = () => {
        window.addEventListener('load', UI.loadLocalStoreAndDisplayHTML())
    }

    static input = document.querySelector('#input')
    static addFunc = () => {
        if (Logic.input.value) {
        const Storage = Store.takingFromStorage()
        const task = Logic.input.value;
        const index = Storage.length + 1;
        const todoClass = new Todo(task, index)
        UI.DisplayHTML(todoClass)
        Store.setLocalStorage(todoClass)
        UI.clearField()
        }
    }

    static enterFunc = () => {
        Logic.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                Logic.addFunc()
            }
        })
    }

    static clickFunct = () => {
        const arrow = document.querySelector('.fa-arrow-circle-left');
        arrow.addEventListener('click', () => {
            Logic.addFunc()
        })
    }

    static displayDelete = () => {
        const UL = document.querySelector('#list')
        UL.addEventListener('click', (e) => {

            
            e.addEventListener('click', () => {
                console.log('Active Ohhhhh')
                const ellipsis = document.querySelector('.options')
                ellipsis.classList.add('active')
        }) 
    })
    }
}