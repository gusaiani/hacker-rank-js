const arrayLeftRotations = require('../arrayLeftRotations')

test('An arrayLeftRotations test', () => {
  const arr = [1, 2, 3, 4, 5]
  expect(arrayLeftRotations(arr, 4)).toEqual([5, 1, 2, 3, 4])
})
