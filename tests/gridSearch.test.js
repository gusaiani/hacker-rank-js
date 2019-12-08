const gridSearch = require('../gridSearch')

test('A gridSearch test', () => {
  const grid = [
    '7283455864',
    '6731158619',
    '8988242643',
    '3830589324',
    '2229505813',
    '5633845374',
    '6473530293',
    '7053106601',
    '0834282956',
    '4607924137',
  ]

  const pattern = ['9505', '3845', '3530']
  expect(gridSearch(grid, pattern)).toBe(true)
})

test('Another gridSearch test', () => {
  const grid = [
    '400453592126560',
    '114213133098692',
    '474386082879648',
    '522356951189169',
    '887109450487496',
    '252802633388782',
    '502771484966748',
    '075975207693780',
    '511799789562806',
    '404007454272504',
    '549043809916080',
    '962410809534811',
    '445893523733475',
    '768705303214174',
    '650629270887160',
  ]

  const pattern = ['99', '99']
  expect(gridSearch(grid, pattern)).toBe(false)
})

test('A gridSearch test where the pattern starts in the second occurrence of the first line', () => {
  const grid = [
    '7283455864',
    '6731158619',
    '8988242643',
    '3830589324',
    '5505505813',
    '5633845374',
    '6473530293',
    '7053106601',
    '0834282956',
    '4607924137',
  ]

  const pattern = ['5505', '3845', '3530']
  expect(gridSearch(grid, pattern)).toBe(true)
})
