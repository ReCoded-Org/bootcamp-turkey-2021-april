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

  let modifiedWords = [];

  let i = 0;
  while (i < words.length) {
    if (i % 2 === 0) {
      modifiedWords.push(words[i].toUpperCase())
    }

    else if (i % 2 === 1) {
      modifiedWords.push(words[i])
    }
    i++;
  }

  let sentence = modifiedWords.join(" ")
  console.log(sentence)
};

//  swapCase(randomString1)                                                                             

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

