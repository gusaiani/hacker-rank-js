// https://www.hackerrank.com/challenges/angry-professor/problem
function climbingLeaderboard(scores, alice) {
  const scoresArray = scores.reduce((acc, score) => {
    if (!acc.length) {
      acc.push(score)
    } else if (score !== acc[acc.length - 1]) {
      acc.push(score)
    }

    return acc
  }, [])

  const aliceRanks = []

  for (let i = 0; i < alice.length; i++) {
    aliceRanks.push(rankScore(alice[i], scoresArray))
  }

  return aliceRanks
}

function rankScore(score, scores) {
  for (let i = 0; i < scores.length; i++) {
    if (score >= scores[i]) return i + 1
    if (i === scores.length - 1) return i + 2
  }
}

module.exports = climbingLeaderboard;
