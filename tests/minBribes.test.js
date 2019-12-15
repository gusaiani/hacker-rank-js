const minBribes = require('../minBribes')

test('Should return 3', () => {
  const arr = [2, 1, 5, 3, 4]
  expect(minBribes(arr)).toEqual(3)
})

test('Should return "Too chaotic"', () => {
  const arr = [2, 5, 1, 3, 4]
  expect(minBribes(arr)).toEqual('Too chaotic')
})

test('Should return 7', () => {
  /*
   1 2 3 4 5 6 7 8
   1 2 3 5 4 6 7 8
   1 2 3 5 6 4 7 8
   1 2 3 5 6 7 4 8
   1 2 3 5 6 7 8 4
   1 2 5 3 6 7 8 4
   1 2 5 3 7 6 8 4
   1 2 5 3 7 8 6 4

   if next is smaller than previous, switch and add bribe to bigger
   1 2 5 3 7 8 6 4
   1 2 3 5 7 8 6 4 - 5.1
   1 2 3 5 7 6 8 4 - 5 8
   1 2 3 5 6 7 8 4 - 5 7 8
   1 2 3 5 6 7 4 8 - 5 7 88
   1 2 3 5 6 4 7 8 - 5 77 88
   1 2 3 5 4 6 7 8 - 5 6 77 88
   1 2 3 4 5 6 7 8 - 55 6 77 88
  */
  const arr = [1, 2, 5, 3, 7, 8, 6, 4]
  expect(minBribes(arr)).toEqual(7)
})

test('Should also return "Too chaotic"', () => {
  const arr = [5, 1, 2, 3, 7, 8, 6, 4]
  expect(minBribes(arr)).toEqual('Too chaotic')
})

test('Should return 4', () => {
  const arr = [1, 2, 5, 3, 4, 7, 8, 6]
  expect(minBribes(arr)).toEqual(4)
})
