const capitalizeAndFilter = require('./capitalize-and-filter');

describe('capitalizeAndFilter function', () => {
  it('should take in an array of strings, capitalize them, and filter out any that start with f', () => {
    const strings = capitalizeAndFilter(['past', 'present', 'future']);

    expect(strings).toEqual(['PAST', 'PRESENT']);
  });
});
