/*
 * https://www.hackerrank.com/challenges/the-birthday-bar/problem?h_r=next-challenge&h_v=zen
 */
const birthdayBar = require('../birthdayBar');

test('A Birthday Bar test', () => {
  expect(birthdayBar([1, 2, 1, 3, 2], 3, 2)).toEqual(2);
});
