// Partners Ayshe Saflo, Ufuk Deniz Demirbilek
function ch1(num){
  const int = parseInt(num)
//If the number is between 10 and 20, console.log the number.
  if (int > 10 && int < 20) {
    console.log(int)
  } //If the the number is greater than 20, console.log the square of the number.
    else if (int > 20){
    console.log(int*int)
    } //If the number is less than 100, return the number divided by two.
if (int < 100){
  return (int/2);
  } //If the number is greater or equal to 100 but less than 200, return just the number.
    else if (int >= 100 && int < 200){
    return int;
    }//Otherwise return the number multiplied by two.
      else if (int >= 200){
      return (int*2);
      }
}

function ch2(num, str){
  //length of the string
  const int = parseInt(num)
  const strLength = str.length;
  if ( strLength < int){
    console.log("String was too short.");
    return false;
  }
  else if (strLength === int){
    console.log("Exact match.");
    return int;
  }
  else if (strLength > int){
    return -1;
  }
}

let firstCase = ch2(2, "");
let secondCase = ch2(2, "aa");
let thirdCase = ch2(2, "aaa");
console.log(firstCase, secondCase, thirdCase);

function bonus(str){
  switch (str){
    case "RED":
      return 0;
    case "BLUE":
      return 1;
    default: 
      return 2;
  }
}