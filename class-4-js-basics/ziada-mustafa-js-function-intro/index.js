// 1st function

function convertMinutes (integer) {
  const seconds = integer * 60
  return seconds
}


// 2nd function

function points(twoPointers, threePointers) {
  const totalPoint =  (twoPointers * 2 ) + (threePointers * 3)
  return totalPoint
}


// 3rd function

function greet (firstName, lastName) {
  const fullName = firstName + " " + lastName
  return ("Hello " + fullName)
}

greet ("Mustafa", "ziada")
