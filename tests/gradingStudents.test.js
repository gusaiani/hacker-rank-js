/* https://www.hackerrank.com/challenges/mini-max-sum/problem?h_r=next-challenge&h_v=zen
 */

const gradingStudents = require('../gradingStudents');

test('A gradingStudents', () => {
  const arr = [73, 67, 38, 33]
  expect(gradingStudents(arr)).toEqual([75, 67, 40, 33]);
});
