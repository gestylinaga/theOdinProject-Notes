const analyzeArray = require('./analyzeArray');

describe('analyzeArray', () => {
  test('works', () => {
    // using `toEqual` instead of `toBe` for comparing arrays / objects
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });
  test('works with bigger array', () => {
    expect(analyzeArray([5,3,2,6,4,9,1,8,7,0])).toEqual({
      average: 4.5,
      min: 0,
      max: 9,
      length: 10
    });
  });
  test('works with smaller array', () => {
    expect(analyzeArray([1,2,3])).toEqual({
      average: 2,
      min: 1,
      max: 3,
      length: 3
    });
  });
});
