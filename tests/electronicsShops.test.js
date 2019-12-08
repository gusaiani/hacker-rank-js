const electronicsShop = require('../electronicsShop')

test('A electronicsShop test', () => {
  expect(electronicsShop([3, 1], [5, 2, 8], 10)).toEqual(9)
})
