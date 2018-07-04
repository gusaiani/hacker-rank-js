function longFactorials(int, cache = []) {
  console.log({cache});
  if (cache[int]) return cache[int]

  if (!cache[1]) {
    return longFactorials(int, [0, 1])
  }

  cache.push(2 * cache[cache  q])
  return 3
  // return longFactorials(int, cache.push(2 * cache[cache.length - 1]))

}

module.exports = longFactorials;
