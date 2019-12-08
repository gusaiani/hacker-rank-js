const migratoryBirds = require('../migratoryBirds')

test('A migratoryBirds test', () => {
  const arr = '1 4 4 4 5 3'.split(' ')
  expect(migratoryBirds(arr)).toEqual(4)
})

test('Another migratoryBirds test', () => {
  const arr = '1 4 4 4 5 3 3 3'.split(' ')
  expect(migratoryBirds(arr)).toEqual(3)
})
