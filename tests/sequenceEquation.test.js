const sequenceEquation = require('../sequenceEquation')

test('A sequenceEquation test', () => {
  expect(sequenceEquation([5, 2, 1, 3, 4])).toEqual([4, 2, 5, 1, 3])
})

test('A sequenceEquation test', () => {
  expect(sequenceEquation([4, 3, 5, 1, 2])).toEqual([1, 3, 5, 4, 2])
})

test('A sequenceEquation test', () => {
  expect(sequenceEquation([2, 3, 1])).toEqual([2, 3, 1])
})
