const flattenArbitrarilyDeepArray = require('../flattenArbitrarilyDeepArray')

test('Flatten an array of depth 1', () => {
  expect(flattenArbitrarilyDeepArray([1])).toEqual([1])
})

test('Flatten an array of depth 3', () => {
  expect(flattenArbitrarilyDeepArray([[1, 2, [3]], 4])).toEqual([1, 2, 3, 4])
})

test('Flatten an array of depth 5', () => {
  expect(
    flattenArbitrarilyDeepArray([[1, 2, [3]], 4, [5, [6, [7, 8]]]]),
  ).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
})
