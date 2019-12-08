/*
 * https://www.hackerrank.com/challenges/non-divisible-subset/problem
 * Explanation at https://challier.github.io/home/divisible-subset/
 */
function nonDivisibleSubset(divisor, arr) {
  const remainders = arr.reduce((acc, item) => {
    const remainder = item % divisor
    if (acc[remainder]) acc[remainder] += 1
    else acc[remainder] = 1
    return acc
  }, {})

  let total = 0
  let extra = 0

  for (let i = 0; i < Object.keys(remainders).length; i++) {
    const remainder = parseInt(Object.keys(remainders)[i])
    const amount = remainders[remainder]

    if (remainder == 0 || divisor / remainder == 2) {
      extra++
      continue
    }

    const complementaryRemainderAmount = remainders[divisor - remainder]

    if (complementaryRemainderAmount === undefined) {
      total += 2 * amount
    } else {
      total +=
        amount > complementaryRemainderAmount
          ? amount
          : complementaryRemainderAmount
    }
  }

  return total / 2 + extra
}

function inefficientNonDivisibleSubset(divisor, arr) {
  let pairs = []
  let longestPair = 0

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) % divisor != 0) {
        pairs.push([arr[i], arr[j]])
      }
    }
  }

  if (pairs.length == 0) return 0
  console.log({pairs})

  for (let i = 0; i < pairs.length; i++) {
    let currentSet = pairs[i]

    for (let j = i + 1; j < pairs.length; j++) {
      for (let k = 0; k <= 1; k++) {
        if (currentSet.indexOf(pairs[j][k]) == -1) {
          let areAllNotDivisible = true
          for (let l = 0; l < currentSet.length; l++) {
            console.log({currentSet})
            console.log('pairs[j][k]', pairs[j][k])
            console.log('currentSet[l]', currentSet[l])
            if ((pairs[j][k] + currentSet[l]) % divisor == 0) {
              console.log('aqui')
              areAllNotDivisible = false
              continue
            }
          }
          if (areAllNotDivisible == true) {
            currentSet.push(pairs[j][k])
          }
        }
      }
    }

    console.log({currentSet}, currentSet.length)
    if (currentSet.length > longestPair) {
      longestPair = currentSet.length
    }
  }

  return longestPair
}

module.exports = nonDivisibleSubset
