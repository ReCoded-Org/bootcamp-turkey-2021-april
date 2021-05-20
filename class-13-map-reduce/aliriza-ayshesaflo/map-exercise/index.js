//                                          FIRST                                       //

let randomString = "this is a random string";

function capitalize(str) {
  let words = str.split(' ');
  //console.log(words);

  let capitalisedWords = words.map(function(letter) {
    return letter.toUpperCase();
  })

  let capitalisedString = capitalisedWords.join(" ");
  return capitalisedString;
}

// console.log(capitalize(randomString));

//                                          //                                          //



//                                        SECOND                                        //


let randomString1 = "hey gurl, lets javascript together sometime"

const swapCase = function(string) {

  let words = string.split(" ");

  let modifiedWords = words.map(function(word) {

    if (words.indexOf(word) % 2 === 0) {
      return word.toUpperCase();
    } 
    else if (words.indexOf(word) % 2 === 1) {
      return word;
    }

  });

  let sentence = modifiedWords.join(" ");
  return sentence;

};

// console.log(swapCase(randomString1));                                                                      

//                                          THIRD                                   //


const shiftLetters = function(string) {

  // Split the sentence into words.
  let arrayOfWords = string.split(" ");


  let changedWords = arrayOfWords.map(function(word) {

    //Split the words into letters in order to change their char codes individually.
    let arrayOfLetters = word.split("");

    let changedLetters = arrayOfLetters.map(function(letter) {

      let charCodeOfTheLetter = letter.charCodeAt();
      letter = String.fromCharCode(charCodeOfTheLetter - 1);
      return letter;
    })

    let changedWord = changedLetters.join("");
    return changedWord;
  })

  let changedSentence = changedWords.join(" ");
  return changedSentence;
}

// console.log(shiftLetters("abcxyz xYz"))  

//                                           //                                     //
