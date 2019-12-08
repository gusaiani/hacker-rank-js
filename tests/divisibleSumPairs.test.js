const divisibleSumPairs = require('../divisibleSumPairs')

test('A divisibleSumPairs test', () => {
  const sum = 3
  const arr = '1 3 2 6 1 2'.split(' ').map(Number)
  expect(divisibleSumPairs(arr.length, sum, arr)).toEqual(5)
})
