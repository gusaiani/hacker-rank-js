/*
 * https://www.hackerrank.com/challenges/diagonal-difference/problem
 */

const diagonalDifference = require('../diagonalDifference');

test('A diagonalDifference test', () => {
  const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
  ]
  expect(diagonalDifference(arr)).toEqual(2);
});

test('A diagonalDifference test', () => {
  const arr = [
    [11, 2, 4],
    [4,  5, 6],
    [10, 8, -12]
  ]
  expect(diagonalDifference(arr)).toEqual(15);
});

