const ctciBubbleSort = require('../ctciBubbleSort')

test('A ctciBubbleSort test', () => {
  const arr = '1 2 3'.split(' ').map(Number)
  expect(ctciBubbleSort(arr)).toEqual('0 1 3')
})
