const capitalize = require('./capitalize');

describe('capitalize', () => {
  test('capitalizes first character in a string', () => {
    expect(capitalize('test')).toBe('Test');
  });
  test('works on multi-word strings', () => {
    expect(capitalize('two words')).toBe('Two words');
  });
  test('works on strings already capitalized', () => {
    expect(capitalize('Already done')).toBe('Already done');
  })
})
