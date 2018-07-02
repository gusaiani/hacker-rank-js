/*
 * https://www.hackerrank.com/challenges/time-conversion/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
 */
function timeConversion(time) {
  if (time == "12:00:00AM") return "00:00:00";
  if (time == "12:00:00PM") return "12:00:00";

  const suffix = time.slice(-2)
  const prefix = time.slice(0, -2)
  const timeArray = prefix.split(':')

  const hour = parseInt(timeArray[0])

  if (suffix == 'AM' && hour == 12) {
    timeArray[0] = '00'
  }

  if (suffix == 'PM' && hour != 12) {
    timeArray[0] = hour + 12
  }

  return timeArray.join(':')
}

module.exports = timeConversion;
