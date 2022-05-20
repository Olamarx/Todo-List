/* eslint-disable */

export default class UI {
    
    static displayContent() {
        let content = [
           {todo: 'I will carry the whole bag tomorrow'},
           {todo: 'I will not do anything in two days'},
           {todo: 'I will learn Javascript better each day'},
           {todo: 'Make sure you use the class method'},
           {todo: 'Oh, na, na what\'s my name'},
           {todo: 'You gat something that keeps me offbalance'},
           {todo: 'Baby, you got me and I surrender'},
           {todo: 'Hey boy, i wanna see if you can go downtown with me.'},
           {todo: 'You are so amazing and you know that'},
           {todo: 'Not everybody knows how to walk my body'},
           {todo: 'So I surrender to you because you are just my type.'},
       ]
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
}