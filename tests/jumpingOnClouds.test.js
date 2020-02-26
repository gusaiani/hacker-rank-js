const jumpingOnClouds = require('../jumpingOnClouds')

test('A jumpingOnClouds test', () => {
  const clouds = [0, 0, 1, 0, 0, 1, 0]
  expect(jumpingOnClouds(clouds)).toEqual(4)
})

test('A jumpingOnClouds test', () => {
  const clouds = [0, 0, 0, 0, 1, 0]
  expect(jumpingOnClouds(clouds)).toEqual(3)
})
