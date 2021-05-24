function capitalize (string) {
  const arrOfChar = string.split("");
  const solution = [];
  
  arrOfChar.map( char => {
    solution.push(char.toUpperCase());
  })
  return solution.join("");
}

capitalize('alkdfjhglaksdf');

//-----------------------------------------------------------------------------------

function swapCase (string) {
  const arrOfWords = string.split(" ");
  const solution = [];
  
  arrOfWords.map( (word, index) => {
    if (index % 2 === 0){
      solution.push(capitalize(word));
    }
    else {
      solution.push(word);
    }
  })

  console.log(solution.join(' '));
}

swapCase('hey gurl, lets javascript together sometime');

//-----------------------------------------------------------------------------------

function shiftLetters (string) {
  const arrOfChar = string.split("");
  const solution = [];

  arrOfChar.map( char => {
    const newCharNumber = (char.charCodeAt(0) - 1);
    const newChar = String.fromCharCode(newCharNumber);
    solution.push(newChar);
  })

  return solution.join("");
}

shiftLetters ('moulham');

//-----------------------------------------------------------------------------------