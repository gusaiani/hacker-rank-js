const findDigit = require('../findDigit')

test('A findDigit test', () => {
  const string = `
  2
  12
  1012
  `
  expect(findDigit(string)).toEqual('2\n3')
})
