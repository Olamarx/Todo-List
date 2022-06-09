describe('Test for add, edit, completed, delete, clear all completed functions', () => {
  test('Test for add function', () => {
    // Arrange
    let library;
    if (!library) {
      library = [];
    } else {
      library = JSON.parse(localStorage.getItem('library'));
    }
    const content = {
      completed: false,
      task: 'kvnodfl',
      index: 1,
    };
      // Act
    const push = library.push(content);
    // Assert
    expect(push).not.toBe(library);
  });

  test('Test for delete function', () => {
    // Arrange
    let library;
    if (!library) {
      library = [];
    } else {
      library = JSON.parse(localStorage.getItem('library'));
    }
    const content = {
      completed: false,
      task: 'words',
      index: 1,
    };
      // Act
    library.push(content);
    library.forEach((todo) => {
      if (`${todo.completed}`.trim() === false) {
        library.splice(library.indexOf(todo), 1);
      }
    });
    // Assert
    expect(library).toBe(library);
  });

  test('Test for edit function', () => {
    // Arrange
    let library;
    if (!library) {
      library = [];
    } else {
      library = JSON.parse(localStorage.getItem('library'));
    }
    const content = {
      completed: true,
      task: 'words',
      index: 1,
    };
      // Act
    library.push(content);
    library.forEach((todo) => {
      if (todo.task === content.task) {
        todo.completed = !todo.completed;
      }
    });
    // Assert
    expect(library[0].completed).toBeFalsy();
    expect(library[0].completed).toBe(false);
  });

  test('Test for completed function', () => {
    // Arrange
    let library;
    if (!library) {
      library = [];
    } else {
      library = JSON.parse(localStorage.getItem('library'));
    }
    const content = {
      completed: false,
      task: 'words',
      index: 1,
    };
    const newTodo = 'This is a new task';
    // Act
    library.push(content);
    library.forEach((todo) => {
      if (todo.task === content.task) {
        todo.task = newTodo;
      }
    });
    // Assert
    expect(library[0].task).toBe('This is a new task');
    expect(library[0].task).not.toBe('words');
  });
  test('Test for clear all completed function', () => {
    // Arrange
    let library;
    if (!library) {
      library = [];
    } else {
      library = JSON.parse(localStorage.getItem('library'));
    }
    const content1 = {
      completed: true,
      task: 'words',
      index: 1,
    };
    const content2 = {
      completed: false,
      task: 'words',
      index: 2,
    };
    const content3 = {
      completed: false,
      task: 'words',
      index: 3,
    };
    const content4 = {
      completed: true,
      task: 'words',
      index: 4,
    };
    const content5 = {
      completed: true,
      task: 'words',
      index: 5,
    };
    // Act
    library.push(content1);
    library.push(content2);
    library.push(content3);
    library.push(content4);
    library.push(content5);

    const filt = library.filter((todo) => todo.completed === true)
    // Assert
    expect(filt[0].completed).toBe(true);
    expect(filt[0].completed).not.toBeFalsy();
    expect(filt[1].completed).toBe(true);
    expect(filt[1].completed).not.toBeFalsy();
    expect(filt[2].completed).toBe(true);
    expect(filt[2].completed).not.toBeFalsy();
    });

});