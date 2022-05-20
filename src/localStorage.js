/* eslint-disable */

export default class LocalStorageClass {
    //Create the Local Storage
    static getTodo() {
        let TodoArray;
        if(!localStorage.getItem('Todo')) {
            TodoArray = [];
        } else {
            TodoArray = JSON.parse(localStorage.getItem('Todo'));
        }
        return TodoArray;
    }

    //Add to the Local Storage Array
    static addTodo(todo) {
        const arr = LocalStorageClass.getTodo();
        arr.push(todo);
        localStorage.setItem('Todo', JSON.stringify(arr));
    }

    // Delete Task From the Local Storage
  static deleteTodo(lastDescr) {
    const arr = LocalStorageClass.getTodo();
    arr.forEach((todo, index) => {
      if (lastDescr === todo.task){
        arr.splice(index, 1);
        LocalStorageClass.updateIndex(arr);
      }
        });
        localStorage.setItem('Todo', JSON.stringify(arr));
    }

    // update local storage
    static updateIndex(arr) {
        arr.forEach((todo, index) => {
            todo.index = index + 1;
        });
        localStorage.setItem('Todo', JSON.stringify(arr));
    }


}