const copyAndPush = require('./copy-and-push');

describe('copyAndPush array function', () => {
  it('should take an array and an item then return the array with the new item pushed', () => {
    const numbers = [0, 1, 2];
    copyAndPush(numbers, 3);

    expect(numbers).toEqual([0, 1, 2, 3]);
  });
  it('should take an array and an item then return a copy of the array with the new item pushed', () => {
    const numbers = [1, 2, 3];
    const newNumbers = copyAndPush(numbers, 4);

    expect(newNumbers).toEqual([1, 2, 3, 4]);
  });
});
