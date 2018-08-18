const camelCase = require('../camelCase');

test('A camelCase test', () => {
  expect(camelCase("saveChangesInTheEditor")).toEqual(5);
});
