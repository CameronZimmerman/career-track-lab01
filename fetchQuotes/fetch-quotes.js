const getQuotes = async (data) => {
  return {
    name: data.character,
    text: data.quote,
    image: data.image,
  };
};

module.exports = getQuotes;
