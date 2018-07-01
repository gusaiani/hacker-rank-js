/* https://www.hackerrank.com/challenges/mini-max-sum/problem?h_r=next-challenge&h_v=zen
 */

const minMaxSum = require('../minMaxSum');

test('A minMaxSum', () => {
  const arr = [1, 2, 3, 4, 5]
  expect(minMaxSum(arr)).toEqual('10 14');
});
