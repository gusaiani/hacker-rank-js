// https://www.hackerrank.com/challenges/strange-advertising/problem
function strangeAdvertising(days) {
  let liked = 2
  let cumulative = 2

  for (let day = 2; day <= days; day++) {
    shared = liked * 3
    liked = Math.floor(shared / 2)
    cumulative += liked
  }

  return cumulative
}

module.exports = strangeAdvertising
