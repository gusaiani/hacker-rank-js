const pickingNumbers = require('../pickingNumbers')
const pickingNumbersHashTable = require('../pickingNumbersHashTable')

const functions = [pickingNumbers, pickingNumbersHashTable]

functions.forEach(function(fun) {
  test('A pickingNumbers test', () => {
    const arr = [1, 1, 2, 2, 4, 4, 5, 5, 5]
    expect(fun(arr)).toEqual(5)
  })

  test('A pickingNumbers test', () => {
    const arr = [4, 6, 5, 3, 3, 1]
    expect(fun(arr)).toEqual(3)
  })
})
