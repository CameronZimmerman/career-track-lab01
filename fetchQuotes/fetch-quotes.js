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
