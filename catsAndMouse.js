function catsAndMouse(x, y, z) {
  const AtoC = Math.abs(x - z)
  const BtoC = Math.abs(y - z)

  if (AtoC > BtoC) return 'Cat B'
  else if (BtoC > AtoC) return 'Cat A'
  return 'Mouse C'
}

module.exports = catsAndMouse
