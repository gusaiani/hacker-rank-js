const longFactorials = require('../longFactorials')

test('A longFactorials test', () => {
  expect(longFactorials(1)).toEqual(1)
})

test('A longFactorials test', () => {
  expect(longFactorials(4)).toEqual(24)
})

test('A longFactorials test', () => {
  expect(longFactorials(25)).toEqual(15511210043330985984000000)
})
