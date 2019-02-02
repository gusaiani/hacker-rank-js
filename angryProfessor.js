// https://www.hackerrank.com/challenges/angry-professor/problem
function angryProfessor(multilinestring) {
  let results = []
  const lines = multilinestring.trim().split('\n').map((line) => {
    return line.trim().split(' ').map((string) => {
      return parseInt(string)
    })
  })

  for (let i = 1; i < lines.length; i = i + 2) {
    const minPresent = lines[i][1]
    let notTardy = 0
    let result

    for (let j = 0; j < lines[i + 1].length; j++) {
      if (lines[i + 1][j] <= 0) {
        notTardy ++
      }
    }

    result = (notTardy >= minPresent)
      ? 'NO'
      : 'YES'

    results.push(result)
  }

  return results.join('\n')
}

module.exports = angryProfessor;
