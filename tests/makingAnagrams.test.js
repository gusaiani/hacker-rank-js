const makingAnagrams = require('../makingAnagrams')

test('A makingAnagrams test', () => {
  expect(makingAnagrams('cde', 'abc')).toEqual(4)
})
