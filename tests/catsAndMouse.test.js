const catsAndMouse = require('../catsAndMouse')

test('A catsAndMouse test', () => {
  expect(catsAndMouse(1, 2, 3)).toEqual('Cat B')
})

test('A catsAndMouse test', () => {
  expect(catsAndMouse(1, 3, 2)).toEqual('Mouse C')
})
