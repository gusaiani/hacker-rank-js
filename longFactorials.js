function longFactorials(int, cache = []) {
  if (cache.length >= int + 1) return cache[int]

  if (!cache[1]) return longFactorials(int, [0, 1])

  const lastIndex = cache.length - 1
  cache.push((lastIndex + 1) * cache[lastIndex])
  return longFactorials(int, cache)
}

module.exports = longFactorials
