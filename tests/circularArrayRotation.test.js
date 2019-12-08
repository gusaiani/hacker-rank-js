const circularArrayRotation = require('../circularArrayRotation')

test('A circularArrayRotation test', () => {
  expect(circularArrayRotation([3, 4, 5], 2, [1, 2])).toEqual([5, 3])
})

test('Another circularArrayRotation test', () => {
  expect(circularArrayRotation([1, 2, 3], 2, [0, 1, 2])).toEqual([2, 3, 1])
})
