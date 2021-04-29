function challenge1 (number) {
  if (number > 10 && number < 20 ) {
    console.log(number);
  }
  else if (number < 100) {
    return (number / 2);
  }
  else if (number > 20){
    console.log(number*number);
  }
  else if (number >= 100 && number < 200) {
    return number
  }
  else (number*2);
}

challenge1 (1)



 // challenge2

function challenge2 (number,string) {
  if (string.length < number) {
    console.log ("String was too short.");
    return false;
  }
  else if (string.length == number) {
    console.log ("Exact match");
    return number;
  }
  else {
    return -1;
  }
}

challenge2 (10 , "testtest")


// challenge3

function bonus (str){
  switch (str) {
    case "RED":
      return 0;
      break;
    case "BLUE":
      return 1;
      break;
    default:
      return 2;
      break;
  }
}
bonus ("RED")