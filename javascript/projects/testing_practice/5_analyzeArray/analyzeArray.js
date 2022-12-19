function calcAverage(array) {
  let sum = 0;
  for (let num of array) {
    sum += num;
  };
  return sum / array.length;
};

function analyzeArray(array) {
  const sorted = array.sort();
  const object = {
    average: calcAverage(array),
    min: sorted[0],
    max: sorted[sorted.length - 1],
    length: array.length,
  };
  return object;
};

module.exports = analyzeArray;
