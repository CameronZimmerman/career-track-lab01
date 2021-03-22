const getName = require('./get-name');

describe('getName function', () => {
  it('should return the name property of a provided object', () => {
    const name = getName({ name: 'john', age: 20 });

    expect(name).toEqual('john');
  });
});
