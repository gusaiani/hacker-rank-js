const utopianTree = require('../utopianTree')

test('A utopianTree test', () => {
  expect(utopianTree(0)).toEqual(1)
  expect(utopianTree(1)).toEqual(2)
  expect(utopianTree(2)).toEqual(3)
  expect(utopianTree(3)).toEqual(6)
  expect(utopianTree(4)).toEqual(7)
  expect(utopianTree(5)).toEqual(14)
  expect(utopianTree(6)).toEqual(15)
  expect(utopianTree(7)).toEqual(30)
})
