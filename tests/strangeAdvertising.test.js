const strangeAdvertising = require('../strangeAdvertising')

describe('strangeAdvertising', () => {
  it('returns correctly for 1 days', () => {
    expect(strangeAdvertising(1)).toEqual(2)
  })

  it('returns correctly for 2 days', () => {
    expect(strangeAdvertising(2)).toEqual(5)
  })

  it('returns correctly for 3 days', () => {
    expect(strangeAdvertising(3)).toEqual(9)
  })
})
