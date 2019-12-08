const countingValleys = require('../countingValleys')

test('A countingValleys test', () => {
  const arr = 'UDDDUDUU'.split('')
  expect(countingValleys(arr.length, arr)).toEqual(1)
})
