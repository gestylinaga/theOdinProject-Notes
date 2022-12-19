function capitalize(string) {
  let asArray = string.split('');
  asArray[0] = asArray[0].toUpperCase();
  let newString = asArray.join('');
  return newString;
};

module.exports = capitalize;
