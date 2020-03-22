const iceCreamParlor = require('../iceCreamParlor')

test('An iceCreamParlor test', () => {
  const cost = [2, 1, 3, 5, 6]
  const money = 5
  const expectedResult = [1, 3]

  expect(iceCreamParlor(cost, money)).toEqual(expectedResult)
})

test('Another iceCreamParlor test', () => {
  const cost = [1, 4, 5, 3, 2]
  const money = 4
  const expectedResult = [1, 4]
  expect(iceCreamParlor(cost, money)).toEqual(expectedResult)
})
