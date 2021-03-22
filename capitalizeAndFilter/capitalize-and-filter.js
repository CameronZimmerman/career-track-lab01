const capitalizeAndFilter = (array) => {
  for(let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase();
    if(array[i][0] === 'F') array.splice(i, 1);
  }
  return array;
};

module.exports = capitalizeAndFilter;
