// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
function jumpingOnClouds(clouds) {
  let jumps = 0
  let i = 0

  while (i < clouds.length - 1) {
    jumps++
    i += clouds[i + 2] === 0 ? 2 : 1
  }

  return jumps
}

module.exports = jumpingOnClouds
