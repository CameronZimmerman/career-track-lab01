const fetchQuotes = require('./fetch-quotes');

describe('getQuotes function', () => {
  it('should return a single quote in the correct format', async () => {
    const quote = await fetchQuotes();

    const shape = {
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String),
    };
    expect(quote).toEqual(expect.objectContaining(shape));
  });
});
