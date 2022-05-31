export default class Storage {
  static takingFromStorage() {
    let library;
    if (!localStorage.getItem('library')) {
      library = [];
    } else {
      library = JSON.parse(localStorage.getItem('library'));
    }
    return library;
  }

  static setLocalStorage(book) {
    const library = Storage.takingFromStorage();
    library.push(book);
    localStorage.setItem('library', JSON.stringify(library));
  }

  static removeFromLocalStorage(text) {
    const library = Storage.takingFromStorage();
    library.forEach((todo) => {
      if (`${todo.task}`.trim() === text.trim()) {
        library.splice(library.indexOf(todo), 1);
      }
    });
    localStorage.setItem('library', JSON.stringify(library));
  }

  static editTodo = (former, newInput) => {
    const arr = Storage.takingFromStorage();
    arr.forEach((todo) => {
      if (former === todo.task) {
        todo.task = newInput;
      }
    });
    localStorage.setItem('library', JSON.stringify(arr));
  }
}