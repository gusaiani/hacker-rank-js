/*
 * https://www.hackerrank.com/challenges/closest-numbers/problem
 */
const closestNumbers = require('../closestNumbers');

test('A closestNumbers test', () => {
  const numbers = "-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854".split(" ")
  expect(closestNumbers(numbers)).toEqual("-20 30");
});

test.only('A closestNumbers test', () => {
  const numbers = "-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854 -520 -470".split(" ")
  expect(closestNumbers(numbers)).toEqual("-520 -470 -20 30");
});

test('A closestNumbers test', () => {
  const numbers = "5 4 3 2".split(" ")
  expect(closestNumbers(numbers)).toEqual("2 3 3 4 4 5");
});
