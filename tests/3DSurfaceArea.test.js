const surface = require('../3DSurfaceArea');

test('A surface test', () => {
  const rows = [[1]]
  expect(surface(rows)).toEqual(6);
});

test('A surface test', () => {
  const rows = [[1, 3, 4], [2, 2, 3], [1, 2, 4]]
  expect(surface(rows)).toEqual(60);
});
