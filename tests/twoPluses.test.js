const twoPluses = require('../twoPluses');

test.only('A twoPluses test', () => {
  const grid = [
    'GGGGGG',
    'GBBBGB',
    'GGGGGG',
    'GGBBGB',
    'GGGGGG'
  ]

  expect(twoPluses(grid)).toEqual(5);
});

test('Another twoPluses test', () => {
  const grid = [
    'BGBBGB',
		'GGGGGG',
		'BGBBGB',
		'GGGGGG',
		'BGBBGB',
    'BGBBGB'
  ]

  expect(twoPluses(grid)).toEqual(25);
});
