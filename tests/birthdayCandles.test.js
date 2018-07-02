/* https://www.hackerrank.com/challenges/mini-max-sum/problem?h_r=next-challenge&h_v=zen
 */

const birthdayCandles = require('../birthdayCandles');

test('A birthdayCandles test', () => {
  const arr = [3, 2, 1, 3]
  expect(birthdayCandles(arr)).toEqual(2);
});

test('Another birthdayCandles test', () => {
  const arr = [18, 90, 90, 13, 90, 75, 90, 8, 90, 43]
  expect(birthdayCandles(arr)).toEqual(5);
});
