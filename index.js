function countdown(callback) {
  return window.setTimeout(callback, 2000)
}

function createMultiplier (multiplierValue) {
  return function (number) {

    return number * multiplierValue

  }.bind(null, number)
}
var doubler = createMultiplier (2)
var tripler = createMultiplier (3)

function multiplier (multiplierValue, value) {
  return multiplierValue * value
}

var doublerWithBind = multiplier(2, value)
var triplerWithBind = multiplier(3, value)


//
// function createMultiplierBonus (n) {
//
//   return function doubler (n) {
//     createMultiplier(n)
//   }
// }
