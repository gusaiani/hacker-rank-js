/*
 * https://www.hackerrank.com/challenges/staircase/problem
 */

const staircase = require('../staircase')

test('A staircase of 6', () => {
  expect(staircase(6)).toEqual(
    '     #\n    ##\n   ###\n  ####\n #####\n######\n',
  )
})
