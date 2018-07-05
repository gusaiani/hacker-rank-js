function bonAppetit(items, annaDidNotEat, annaPaid) {
  const annaHasAlergyToItemWithPrice = items.splice(annaDidNotEat, 1)

  const annaShouldHavePaid = items.reduce((acc, item) => {return acc + item }) / 2

  const difference = Math.abs(annaPaid - annaShouldHavePaid)

  return (difference == 0) ? 'Bon Appetit' : difference
}

module.exports = bonAppetit;
