

// let letters = "Happy bitrhday"

let swapCase = function (letters) {
    let newLetters = "";
    for(let i = 0; i < letters.length; i++){
      if(letters[i] === letters[i].toLowerCase()){
        newLetters += letters[i].toUpperCase();
      }
      else {
        newLetters += letters[i].toLowerCase();
      }
    }
    console.log(newLetters);
    return newLetters;
  }
  
  swapCase ("hAPPY bIRTHDAY");
  