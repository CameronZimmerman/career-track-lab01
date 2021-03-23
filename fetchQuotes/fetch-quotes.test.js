const fetchQuotes = require('./fetch-quotes');
jest.mock('node-fetch');
const fetch = require('node-fetch');

fetch.mockImplementation(() => {
  return Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          character: 'Bender',
          quote:
            "It's always so sad when a friend goes crazy and you have a have a big clambake\nand cook him! Yee-ha!", //eslint-disable-line
          image:
            'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png',
        },
      ]),
  });
});

describe('getQuotes function', () => {
  it('should return a single quote in the correct format', async () => {
    const quote = await fetchQuotes();

    const shape = {
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String),
    };
    console.log(quote);
    expect(quote).toEqual(expect.objectContaining(shape));
  });
});
