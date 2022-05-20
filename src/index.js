/* eslint-disable */
import LocalStorageClass from './localStorage.js';
import UI from './UI.js';
import Todo from './TodoConstructor.js';
import _ from 'lodash';
import './style.css';

document.addEventListener('DOMContentLoaded', UI.displayOnDOM)

const inputTodo = document.querySelector('#input')
inputTodo.addEventListener('keypress', (e) => {
    
    const todoFunc = () => {
        const localStorageArr = LocalStorageClass.getTodo()
        if (inputTodo.value) {
            const tasks = inputTodo.value;
            const index = localStorageArr.length + 1;
            const task = new Todo(tasks, index);
            UI.displayContent(task);
            LocalStorageClass.addTodo(task);
            UI.clearField()
        }
    };

    if (e.key === 'Enter') {
        todoFunc()
    };

    const addCard = document.querySelector('#input-text');
    addCard.addEventListener('click', () => {
        todoFunc()
    });
});