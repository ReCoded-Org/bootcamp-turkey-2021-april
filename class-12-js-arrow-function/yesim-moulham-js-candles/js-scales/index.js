const scale = [5, 5, 5, 0, "I", 10, 2, 2, 1];
const median = (scale.length - 1)/2;

function scaleTip() {
  let right = 0;
  let left = 0;

  for (i = 0; i < median; i++){
    left = left + scale[i];
    // console.log(left)
  }
  for (j = median +1 ; j < scale.length; j++){
    right = right + scale[j];
    // console.log(right)
  }

  let tip = "";
  if (right === left){
    tip = "balanced";
    // console.log("equal");
  } else if (right > left){
    tip = "right";
    // console.log("right")
  } else {
    tip = "left";
    // console.log("left")
  }
  return tip;
}
scaleTip(scale)