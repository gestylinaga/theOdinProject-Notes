const caesarCipher = require('./caesarCipher');

describe('caesarCipher', () => {
  test('single word, shifted 1 space', () => {
    expect(caesarCipher('single', 1)).toBe('tjohmf');
  });
  test('single word, no shift', () => {
    expect(caesarCipher('zero', 0)).toBe('zero');
  });
  test('single word, shifted 3 spaces', () => {
    expect(caesarCipher('three', 3)).toBe('wkuhh');
  });
  test('multi word string', () => {
    expect(caesarCipher('even more words', 1)).toBe('fwfo npsf xpset');
  });
  test('cypher wraps from z to a', () => {
    expect(caesarCipher('zebra', 1)).toBe('afcsb');
  });
  test('cypher wraps from z to a, with bigger shift', () => {
    expect(caesarCipher('xylophone', 5)).toBe('cdqtumtsj');
  });
  test('keeps original punctuation', () => {
    expect(caesarCipher('hello, world!', 1)).toBe('ifmmp, xpsme!')
  });
  test('keeps the original case', () => {
    expect(caesarCipher('camelCaseString', 1)).toBe('dbnfmDbtfTusjoh');
  });
});
