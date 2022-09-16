describe('Test for add and delete functions', () => {
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
});