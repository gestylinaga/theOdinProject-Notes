const calculator = require('./calculator');

describe('calculator', () => {
  test('basic addition', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
  test('basic subtraction', () => {
    expect(calculator.subtract(4, 2)).toBe(2);
  });
  test('basic divison', () => {
    expect(calculator.divide(9, 3)).toBe(3);
  });
  test('basic multiplication', () => {
    expect(calculator.multiply(3, 5)).toBe(15);
  });
});
