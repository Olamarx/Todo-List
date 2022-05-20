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

document.querySelector('#list').addEventListener('click', (e) => {
    const targetE = e.target;
    const formerInput = targetE.parentNode.children[1].value;

    Array.from(document.querySelector('#list').children).forEach((child) => {
        if (child.children[1].classList.contains('fa-ellipsis-v')) {
            const trash = child.parentElement.parentElement.children[2];
            const ellipsisContainer = child.parentElement.parentElement.children[1];
            
            trash.classList.remove('active')
            ellipsisContainer.classList.remove('active')
        }
    })

    if (targetE.classList.contains('text')) {
        const ellipsisContainer = targetE.parentElement.parentElement.children[1];
        if (ellipsisContainer.classList.contains('fa-ellipsis-v')) {
            const trash = targetE.parentElement.parentElement.children[2];
            trash.classList.add('active')
            ellipsisContainer.classList.add('active')
        }
    }

    if (targetE.classList.contains('del-btn')) {
        console.log(targetE.parentElement.children[2])
        UI.deleteTodo(targetE.parentElement.children[2])
    }

})