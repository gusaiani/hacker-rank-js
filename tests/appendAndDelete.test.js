const appendAndDelete = require('../appendAndDelete');

describe('Append and delete', () => {
  it('returns true for case 1', () => {
    const str1 = 'abc'
    const str2 = 'def'
    const moves = 6
    expect(appendAndDelete(str1, str2, moves)).toEqual(true);
  })

  it('returns true for case 1', () => {
    const str1 = 'hackerhappy'
    const str2 = 'hackerrank'
    const moves = 9
    expect(appendAndDelete(str1, str2, moves)).toEqual(true);
  })

  it('returns true for case 3', () => {
    const str1 = 'aba'
    const str2 = 'aba'
    const moves = 7
    expect(appendAndDelete(str1, str2, moves)).toEqual(true);
  })

  it('returns true for case 4', () => {
    const str1 = 'ashley'
    const str2 = 'ash'
    const moves = 2
    expect(appendAndDelete(str1, str2, moves)).toEqual(false);
  })
})
