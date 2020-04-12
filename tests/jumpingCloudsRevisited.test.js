const jumpingCloudsRevisited = require('../jumpingCloudsRevisited')

test('A jumpingCloudsRevisited test', () => {
  const clouds = '0 0 1 0 0 1 1 0'.split(' ').map(c => Number(c))
  expect(jumpingCloudsRevisited(clouds, 2)).toEqual(92)
})

test('A jumpingCloudsRevisited test', () => {
  const clouds = '1 1 1 0 1 1 0 0 0 0'.split(' ').map(c => Number(c))
  expect(jumpingCloudsRevisited(clouds, 3)).toEqual(80)
})
