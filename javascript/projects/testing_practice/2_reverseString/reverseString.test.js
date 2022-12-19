const reverseString = require('./reverseString');

describe('reverseString', () => {
  test('reverses a single word string', () => {
    expect(reverseString('easy')).toBe('ysae');
  });
  test('reverses a multi-word string', () => {
    expect(reverseString('more words')).toBe('sdrow erom');
  })
});
