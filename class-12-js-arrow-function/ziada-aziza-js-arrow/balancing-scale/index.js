const scale = [9, 100, 3, "I", 5, 100, 0]
function scaleTip(scales) {
  const middle = "I"
  const leftSide = scales.slice(0, scales.indexOf(middle))
  const rightSide = scales.slice(scales.indexOf(middle)+1, scales.length)
  console.log(leftSide)
  console.log(rightSide)

  // adding the element of the leftside togehter
  let leftSideSum = leftSide.reduce(function(accumolator, n){
    return accumolator + n;
  })
  console.log(leftSideSum)

  // adding the element of the leftside togehter
  let rightSideSum = rightSide.reduce(function(accumolator, n){
    return accumolator + n;
  })
  console.log(rightSideSum)

  if (leftSideSum > rightSideSum) {
    console.log("➞ left");
    return "➞ left"
  }
  else if (leftSideSum < rightSideSum) {
    console.log("➞ right");
    return "➞ right"
  }
  else {
    console.log("➞ balanced");
    return "➞ balanced"
  }
};

scaleTip(scale);