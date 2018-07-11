const pickingNumbers = require('../pickingNumbers');

test.only('A pickingNumbers test', () => {
  arr = [1, 1, 2, 2, 4, 4, 5, 5, 5]
  expect(pickingNumbers(arr)).toEqual(5);
});

test('A pickingNumbers test', () => {
  arr = [4, 6, 5, 3, 3, 1]
  expect(pickingNumbers(arr)).toEqual(3);
});
