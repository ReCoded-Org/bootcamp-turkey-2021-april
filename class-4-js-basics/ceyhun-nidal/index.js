// First
console.log("--------")
console.log("First")

function comparedNum(num){

  if(10 < num && num < 20){
    console.log(num)
  }
  else if(num < 100){
    return num/2;
  }
  else if(num > 20){
    console.log(num ** 2)

    if(200 > num && num >= 100){
    return num;
  }
  }

  if(num >= 200){
    return num * 2;
  }
}

console.log(comparedNum(300))
console.log(comparedNum(56))
console.log(comparedNum(250))




// Second
console.log("--------")
console.log("Second")
function ceyhuNG(numberPa, stringPa){
  const lenStr = stringPa.length
  const intLenStr = parseInt(lenStr)
  if(intLenStr < numberPa){
    console.log("String was too short")
  }
  else if(intLenStr === numberPa){
    console.log("Exact match.")
  }
  else{
    return -1
  }
}

console.log(ceyhuNG(3, "Ali"))
console.log(ceyhuNG(4, "Ali"))
console.log(ceyhuNG(4, "Meral"))





//Bonus
console.log("--------")
console.log("Bonus")
function thisSwitch(stringPaPaPa){
  switch(stringPaPaPa){
    case "RED":
      return 0;
      break;
    case "BLUE":
      return 1;
      break;
    default:
      return 2;
  }
}

console.log(thisSwitch("RED"))
console.log(thisSwitch("BLUE"))
console.log(thisSwitch("randomgo"))