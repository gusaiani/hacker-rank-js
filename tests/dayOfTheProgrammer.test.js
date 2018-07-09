const dayOfTheProgrammer = require('../dayOfTheProgrammer');

test('DayOfTheProgrammer for 2017', () => {
  expect(dayOfTheProgrammer(2017)).toEqual('13.09.2017');
});

test('DayOfTheProgrammer for 1918', () => {
  expect(dayOfTheProgrammer(1918)).toEqual('26.09.1918');
});

test('DayOfTheProgrammer for 1800', () => {
  expect(dayOfTheProgrammer(1800)).toEqual('12.09.1800');
});
