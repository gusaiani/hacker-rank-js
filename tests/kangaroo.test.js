/*
 * https://www.hackerrank.com/challenges/apple-and-orange/problem?h_r=next-challenge&h_v=zen
 */
const kangaroo = require('../kangaroo')

test('A Kangaroo test', () => {
  expect(kangaroo(0, 3, 4, 2)).toEqual(true)
})

test('A Kangaroo test', () => {
  expect(kangaroo(0, 2, 5, 3)).toEqual(false)
})
