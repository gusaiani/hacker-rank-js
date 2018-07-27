function hurdleRace(jump, arr) {
  const tallestHurdle = arr.reduce((acc, item) => {
    return (item > acc) ? item : acc;
  }, -Infinity)

  return (jump > tallestHurdle) ? 0 : tallestHurdle - jump
}

module.exports = hurdleRace;
