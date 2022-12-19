function caesarCipher(string, shift) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const alphaArray = alpha.split('');

  const alphaCaps = alpha.toUpperCase();
  const alphaArrayCaps = alphaCaps.split('');

  let newString = '';

  for(let c of string.split('')) {
    if (alphaArray.includes(c)) {
      newString += alphaArray[(alphaArray.indexOf(c) + shift) % alphaArray.length];
      // `% alphaArray.length` allows for array wrapping
    } else if (alphaCaps.includes(c)) {
      newString += alphaArrayCaps[alphaArrayCaps.indexOf(c) + shift];
    } else {
      newString += c;
    };
  };
  return newString;
};

module.exports = caesarCipher;
