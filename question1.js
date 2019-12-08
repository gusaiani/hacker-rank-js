/*
 *  A vending machine has the following denominations: 1c, 5c, 10c, 25c, 50c, and $1.
 *  Your task is to write a program that will be used in a vending machine to return change.
 *  Assume that the vending machine will always want to return the least number of coins or notes.
 *  Devise a function getChange(M, P) where M is how much money was inserted into the machine and P the price of the item selected, that returns an array of integers representing the number of each denomination to return.

* Example:
* getChange(5, 0.99) // should return [1,0,0,0,0,4]
*/
function getChange(money, price) {
  const change = money * 100 - price * 100
  const coins = [100, 50, 25, 10, 5, 1]

  const {changeCoins} = coins.reduce(
    (acc, coinType) => {
      const newCoins = Math.floor(acc.change / coinType)
      const remainingChange = acc.change % coinType
      acc.change = remainingChange
      acc.changeCoins.push(newCoins)

      return acc
    },
    {change, changeCoins: []},
  )

  return changeCoins.reverse()
}

module.exports = getChange
