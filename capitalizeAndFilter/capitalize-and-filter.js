const capitalizeAndFilter = (array) => array.map(item => item.toUpperCase()).filter(item => item[0] !== 'F');

module.exports = capitalizeAndFilter;
