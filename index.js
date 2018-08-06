function countdown(callback) {
  return window.setTimeout(callback, 2000)
}

function createMultiplier (n) {
  return function (number) {
    return number * n
  }
}
//
// function multiplierValue () {
//
//  }
function multiplier () {

}

function createMultiplierBonus () {
  
}

var doubler = createMultiplier()
