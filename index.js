function countdown(callback) {
  return window.setTimeout(callback, 2000)
}

function createMultiplier (multiplierValue) {
  return function (number) {

    return number * multiplierValue
    
  }
}
var doubler = createMultiplier (n)
function multiplier () {

}

function createMultiplierBonus (n) {

  return function doubler (n) {
    createMultiplier(n)
  }
}
