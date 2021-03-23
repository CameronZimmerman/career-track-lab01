const fetchQuotes = require('./fetchQuotes/fetch-quotes');

const displayQuote = async () => {
  const quote = await fetchQuotes();
  console.log(quote);
};

displayQuote();
