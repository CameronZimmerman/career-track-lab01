if(process.env.NODE_ENV === 'test') {
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
}
const fetch = require('node-fetch');

const fetchQuotes = async () => {
  const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
  const body = await res.json();
  return {
    name: body[0].character,
    text: body[0].quote,
    image: body[0].image,
  };
};

module.exports = fetchQuotes;
