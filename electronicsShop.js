function electronicsShop(keyboards, drives, budget) {
  let maxPrice = -1

  for (let i = 0; i < keyboards.length; i++) {

    for (let j = 0; j < drives.length; j++) {
      const pairCost = keyboards[i] + drives[j]

      if (pairCost <= budget && pairCost > maxPrice) {
        maxPrice = pairCost
      }
    }
  }

  return maxPrice;
}

module.exports = electronicsShop;
