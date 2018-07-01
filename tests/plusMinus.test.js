/*
 * https://www.hackerrank.com/challenges/plus-minus/problem
 */

const plusMinus = require('../plusMinus');

test('A plusMinus test', () => {
  const arr = [-4, 3, -9, 0, 4, 1]

  expect(plusMinus(arr)).toEqual("0.500000\n0.333333\n0.166667");
});
