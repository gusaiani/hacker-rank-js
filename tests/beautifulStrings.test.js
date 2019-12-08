const beautifulStrings = require('../beautifulStrings')

test('BeautifulStrings of "abba"', () => {
  expect(beautifulStrings('abba')).toEqual(4)
})
