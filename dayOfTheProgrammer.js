function dayOfTheProgrammer(year) {
  const dayOrdinal = 256
  let baseYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let daysPassed = 0
  let monthsPassed = 0
  let dayOfTheMonth

  if (year == 1918) {
    baseYear[1] = 15
  }
  if (isLeapYear(year)) {
    baseYear[1] = 29
  }

  for (let i = 0; i < baseYear.length; i++) {
    monthsPassed++
    if (dayOrdinal > daysPassed + baseYear[i]) {
      daysPassed += baseYear[i]
    } else {
      dayOfTheMonth = dayOrdinal - daysPassed
      break
    }
  }

  return `${pad(dayOfTheMonth)}.${pad(monthsPassed)}.${year}`
}

function isLeapYear(year) {
  if (year <= 1917 && year % 4 == 0) return true

  if (year % 400 == 0) return true

  if (year % 4 == 0 && year % 100 != 0) return true

  return false
}

function pad(n) {
  n = n + ''
  const width = 2
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n
}

module.exports = dayOfTheProgrammer
