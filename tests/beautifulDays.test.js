const beautifulDays = require('../beautifulDays');

test('A beautifulDays test', () => {
  expect(beautifulDays(20, 23, 6)).toEqual(2);
});
