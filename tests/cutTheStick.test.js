const cutTheStick = require('../cutTheStick');

test('A cutTheStick test', () => {
  const arr = '5 4 4 2 2 8'.split(' ')
  expect(cutTheStick(arr)).toEqual([6, 4, 2, 1]);
});

