const hourglasses = require('../hourglasses');

test('A hourglasses test', () => {
  const arr = `
  1 1 1 0 0 0
  0 1 0 0 0 0
  1 1 1 0 0 0
  0 0 2 4 4 0
  0 0 0 2 0 0
  0 0 1 2 4 0
  `.trim().split(/\s+/).map(Number)

  expect(hourglasses(arr)).toEqual(19);
});
