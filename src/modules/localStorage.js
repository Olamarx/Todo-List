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
}