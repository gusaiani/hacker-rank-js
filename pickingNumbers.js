function pickingNumbers(arr) {
  let maxSequence = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    const current = arr[i];
    const tempArray = arr.slice(0)
    tempArray.splice(0, i + 1)
    console.log({arr, current, tempArray })

    sequence = tempArray.reduce((acc, item) => {
      console.log({acc, current, item})
      if (current == item) {
        console.log('Aqui');
        acc++
      } else if ((current - 1) == 0) {
        console.log('Acolá');
        acc++
      }

      return acc
    }, 0)

    if (sequence > maxSequence) maxSequence = sequence

    sequence = tempArray.reduce((acc, item) => {
      if (current == item) {
        console.log('Aqui');
        acc++
      } else if ((current + 1) == 0) {
        console.log('Acolá');
        acc++
      }

      return acc
    }, 0)

    if (sequence > maxSequence) maxSequence = sequence
  }

  return maxSequence
}

module.exports = pickingNumbers;
