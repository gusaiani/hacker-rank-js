const repeatedStrings = require('../repeatedStrings')

test('A repeatedStrings test', () => {
  const string = 'abcac'
  const chars = 10
  expect(repeatedStrings(string, chars)).toEqual(4)
})

test('Another repeatedStrings test', () => {
  const string = 'aba'
  const chars = 10
  expect(repeatedStrings(string, chars)).toEqual(7)
})
