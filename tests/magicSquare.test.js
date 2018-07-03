/*
 * https://www.hackerrank.com/challenges/magic-square-forming/problem
 */

const magicSquare = require('../magicSquare');

test('A magicSquare test', () => {
  const arr = [ [ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 5 ] ]

  expect(magicSquare(arr)).toEqual(1);
});

test('A magicSquare test', () => {
  const arr = [ [ 4, 8, 2 ], [ 4, 5, 7 ], [ 6, 1, 6 ] ]

  expect(magicSquare(arr)).toEqual(4);
});
