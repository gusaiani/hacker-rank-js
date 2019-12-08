const bonAppetit = require('../bonAppetit')

test('A bonAppetit test', () => {
  const items = [3, 10, 2, 9]
  const annaDidNotEat = 1
  const annaPaid = 12
  expect(bonAppetit(items, annaDidNotEat, annaPaid)).toEqual(5)
})
