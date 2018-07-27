const hurdleRace = require('../hurdleRace');

test('A hurdleRace test', () => {
  const jump = 7
  const arr = "2 5 4 5 2".split(" ").map(Number)
  expect(hurdleRace(jump, arr)).toEqual(0);
});

test('Another hurdleRace test', () => {
  const jump = 4
  const arr = "1 6 3 5 2".split(" ").map(Number)
  expect(hurdleRace(jump, arr)).toEqual(2);
});
