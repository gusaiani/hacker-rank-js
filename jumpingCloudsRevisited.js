// https://www.hackerrank.com/challenges/angry-professor/problem
function jumpingCloudsRevisited(clouds, jumpsize) {
  if (jumpsize === clouds.length) {
    return clouds[0] === 1 ? 97 : 98
  }

  let position = jumpsize
  let score = 99
  if (clouds[jumpsize] === 1) {
    score -= 2
  }
  while (position % clouds.length !== 0) {
    position += jumpsize
    score--

    if (clouds[position % clouds.length] === 1) {
      score -= 2
    }
  }

  return score
}

module.exports = jumpingCloudsRevisited
