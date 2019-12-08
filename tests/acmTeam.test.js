const acmTeam = require('../acmTeam')

test('A acmTeam test', () => {
  const arr = ['10101', '11100', '11010', '00101']
  expect(acmTeam(arr)).toEqual([5, 2])
})
