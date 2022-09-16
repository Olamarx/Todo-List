class Storage {
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
        Storage.updateIndex(library);
      }
    });
    localStorage.setItem('library', JSON.stringify(library));
  }

  static updateIndex = (arr) => {
    arr.forEach((todo, index) => {
      todo.index = index + 1;
    });
    localStorage.setItem('library', JSON.stringify(arr));
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

module.exports = Storage;