/*
 * https://www.hackerrank.com/challenges/time-conversion/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
 */

const timeConversion = require('../timeConversion')

test('A timeConversion test', () => {
  expect(timeConversion('07:05:45PM')).toEqual('19:05:45')
})

test('A timeConversion test', () => {
  expect(timeConversion('12:40:22AM')).toEqual('00:40:22')
})

test('A timeConversion test', () => {
  expect(timeConversion('12:45:54PM')).toEqual('12:45:54')
})
