/*
 * https://www.hackerrank.com/challenges/compare-the-triplets/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
 */

const compareTheTriplets = require('../compareTheTriplets');

test('A compareTheTriplets test', () => {
  const a = '5 6 7'
  const b = '3 6 10'

  expect(compareTheTriplets(a, b)).toEqual('1 1');
});

test('A compareTheTriplets test', () => {
  const a = '1 2 3'
  const b = '1 2 3'

  expect(compareTheTriplets(a, b)).toEqual('0 0');
});

test('A compareTheTriplets test', () => {
  const a = '6 8 12'
  const b = '7 9 15'

  expect(compareTheTriplets(a, b)).toEqual('0 3');
});

test('A compareTheTriplets test', () => {
  const a = '10 15 20'
  const b = '5 6 7'

  expect(compareTheTriplets(a, b)).toEqual('3 0');
});
