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

});