const climbingLeaderboard = require('../climbingLeaderboard')

test('A climbingLeaderboard test', () => {
  const scores = [100, 100, 50, 40, 40, 20, 10]
  const alice = [5, 25, 50, 120]
  const expectedOutput = [6, 4, 2, 1]

  expect(climbingLeaderboard(scores, alice)).toStrictEqual(expectedOutput)
})
