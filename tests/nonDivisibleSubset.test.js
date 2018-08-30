const nonDivisibleSubset = require('../nonDivisibleSubset');

test('A nonDivisibleSubset test', () => {
  const divisor = 4
  const arr = "19 10 12 10 24 25 22".split(" ").map(Number)
  expect(nonDivisibleSubset(divisor, arr)).toEqual(3);
});

test('A nonDivisibleSubset test', () => {
  const divisor = 3
  const arr = "1 7 2 4".split(" ").map(Number)
  expect(nonDivisibleSubset(divisor, arr)).toEqual(3);
});

test('A nonDivisibleSubset test', () => {
  const divisor = 7
  const arr = "278 576 496 727 410 124 338 149 209 702 282 718 771 575 436".split(" ").map(Number)
  expect(nonDivisibleSubset(divisor, arr)).toEqual(11);
});
