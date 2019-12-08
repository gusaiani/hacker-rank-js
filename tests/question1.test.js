const getChange = require('../question1')

test('A question 1 test', () => {
  expect(getChange(5, 0.99)).toEqual([1, 0, 0, 0, 0, 4])
})

test('A question 1 test', () => {
  expect(getChange(3.14, 1.99)).toEqual([0, 1, 1, 0, 0, 1])
})

test('A question 1 test', () => {
  expect(getChange(4, 3.14)).toEqual([1, 0, 1, 1, 1, 0])
})

test('A question 1 test', () => {
  expect(getChange(0.45, 0.34)).toEqual([1, 0, 1, 0, 0, 0])
})
