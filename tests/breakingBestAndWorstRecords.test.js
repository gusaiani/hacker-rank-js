const breakingBestAndWorstRecords = require('../breakingBestAndWorstRecords')

test('A breakingBestAndWorstRecords test', () => {
  const scores = '10 5 20 20 4 5 2 25 1'
  const arr = scores.split(' ').map(Number)
  expect(breakingBestAndWorstRecords(arr)).toEqual('2 4')
})
