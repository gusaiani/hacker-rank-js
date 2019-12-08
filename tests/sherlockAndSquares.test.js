const sherlockAndSquares = require('../sherlockAndSquares')

describe('A sherlockAndSquares test', () => {
  it('should return 2 for values 3 and 9', () => {
    expect(sherlockAndSquares(3, 9)).toEqual(2)
  })

  it('should return 0 for values 17 and 24', () => {
    expect(sherlockAndSquares(17, 24)).toEqual(0)
  })

  it('should return 3 for values 35 and 70', () => {
    expect(sherlockAndSquares(35, 70)).toEqual(3)
  })

  it('should return 22 for values 100 and 1000', () => {
    expect(sherlockAndSquares(100, 1000)).toEqual(22)
  })
})
