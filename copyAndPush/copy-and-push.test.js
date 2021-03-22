const copyAndPush = require('./copy-and-push');

describe('copyAndPush array function', () => {
  it('should take an array and an item then return a copy with the new item pushed', () => {
    const numbers = [0, 1, 2];
    const newNumbers = copyAndPush(numbers, 3);

    expect(newNumbers).toEqual([0, 1, 2, 3]);
  });
});
