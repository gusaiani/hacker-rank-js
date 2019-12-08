/*
 * https://www.hackerrank.com/challenges/sock-merchant/problem
 */
const matchingSocks = require('../matchingSocks')

test('A matchingSocks test', () => {
  const arr = '10 20 20 10 10 30 50 10 20'.split(' ')
  expect(matchingSocks(arr)).toEqual(3)
})
