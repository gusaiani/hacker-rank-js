const twoPluses = require('../twoPluses')

test('A twoPluses test', () => {
  const grid = ['GGGGGG', 'GBBBGB', 'GGGGGG', 'GGBBGB', 'GGGGGG']

  expect(twoPluses(grid)).toEqual(5)
})

test('Another twoPluses test', () => {
  const grid = ['BGBBGB', 'GGGGGG', 'BGBBGB', 'GGGGGG', 'BGBBGB', 'BGBBGB']

  expect(twoPluses(grid)).toEqual(25)
})

test('A test of pluses made of single points', () => {
  const grid = ['BBBBBB', 'BBBBBB', 'BBBBBB', 'BBBBBB', 'BGBBGB']

  expect(twoPluses(grid)).toEqual(1)
})

test('A test of pluses made of single points', () => {
  const grid = ['BBBBBB', 'BBBBBB', 'BBBBBB', 'BBBBBB', 'BBBBGB']

  expect(twoPluses(grid)).toEqual(0)
})

test('One more', () => {
  const grid = [
    'GBGBGGB',
    'GBGBGGB',
    'GBGBGGB',
    'GGGGGGG',
    'GGGGGGG',
    'GBGBGGB',
    'GBGBGGB',
  ]

  expect(twoPluses(grid)).toEqual(45)
})

test('Should return 81', () => {
  const grid = [
    'GGGGGGGG',
    'GBGBBGBG',
    'GBGBGGBG',
    'GGGGGGGG',
    'GBGBGGBG',
    'GGGGGGGG',
    'GBGBGGBG',
    'GGGGGGGG',
  ]

  expect(twoPluses(grid)).toEqual(81)
})

test('Should return 5', () => {
  const grid = [
    'GGGGGGG',
    'BGBBBBG',
    'BGBBBBG',
    'GGGGGGG',
    'GGGGGGG',
    'BGBBBBG',
  ]

  expect(twoPluses(grid)).toEqual(5)
})

test('Should return 45', () => {
  const grid = [
    'GGGGGGGGGG',
    'GBBBBBBGGG',
    'GGGGGGGGGG',
    'GGGGGGGGGG',
    'GBBBBBBGGG',
    'GGGGGGGGGG',
    'GBBBBBBGGG',
    'GBBBBBBGGG',
    'GGGGGGGGGG',
  ]

  expect(twoPluses(grid)).toEqual(45)
})
