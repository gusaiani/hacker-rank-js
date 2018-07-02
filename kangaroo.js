/*
 * https://www.hackerrank.com/challenges/apple-and-orange/problem?h_r=next-challenge&h_v=zen
 */
function kangaroo(start1, velocity1, start2, velocity2) {
  let ahead, aheadVelocity, behind, behindVelocity;

  if ((start1 === start2) && (velocity1 === velocity2)) return true;
  if ((velocity1 === velocity2)) return false

  if (start1 > start2) {
    ahead = start1
    aheadVelocity = velocity1
    behind = start2
    behindVelocity = velocity2
  } else {
    ahead = start2
    aheadVelocity = velocity2
    behind = start1
    behindVelocity = velocity1
  }

  if (aheadVelocity > behindVelocity) return false

  while (behind < ahead) {
    behind += behindVelocity
    ahead += aheadVelocity

    if (behind === ahead) return true
  }

  return false
}

module.exports = kangaroo;
