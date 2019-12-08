/*
 * https://www.hackerrank.com/challenges/apple-and-orange/problem?h_r=next-challenge&h_v=zen
 */
const countApplesAndOranges = require('../appleAndOrange')

test('A appleAndOrange test', () => {
  expect(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])).toEqual([
    1,
    1,
  ])
})
