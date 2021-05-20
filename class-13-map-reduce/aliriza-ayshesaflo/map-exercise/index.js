// First

let randomString = "this is a random string";

function capitalize(str) {
  let words = str.split(' ');
  //console.log(words);

  let capitalisedWords = words.map(function(letter) {
    return letter.toUpperCase();
  })

  let capitalisedString = capitalisedWords.join(" ");
  console.log(capitalisedString)
}

// capitalize(randomString);


// Second


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

console.log(swapCase(randomString1));                                                                      

// Third


const shiftLetters = function(string){

  let arrayOfletters = string.split("");


  let ourNewArray = arrayOfletters.map((letter) => {

   for (let i=0; i<arrayOfletters.length; i++){
     
       let globalIndexOfletter = (arrayOfletters[i].charCodeAt())+1;
       // console.log(globalIndexOfletter)

       arrayOfletters[i] = String.fromCharCode(globalIndexOfletter[i])

      return arrayOfletters
       }    
  })
  
let myLastVersion = arrayOfletters.join("");
  console.log(myLastVersion);
}

// shiftLetters("abcxyz")

