// Challenge 1

const example = "this is test";

function capitalize (phrase) {
let result = phrase.toUpperCase();
console.log(result);
return result;

}
capitalize(example);

console.log("end of challenge 1");
console.log("-----------------------------------------");


// Another way
// function capitalize (phrase) {
//   const arrString = phrase.split('')
//   const result = arrString.map((characher) => characher.toUpperCase())
//   console.log(result)
//   return result.join('')
// }
// capitalize(string)




// challenge 2

const words = "hey gurl, lets javascript together sometime";

function swapCase (string){
  const arrString = string.split(' ');
  console.log(arrString);
  const doSomething = arrString.map((element, index) => {
    if (index % 2 ==! 0) {
      console.log(element);
      return element;
    } else {
      return capitalize(element);
    }
  })
  console.log(doSomething.join(" "));
  return doSomething.join(" ");
  }

swapCase (words)

console.log("end of challenge 2");
console.log("-----------------------------------------");




// challenge 3

function shiftLetters(string) {
  const arrString = string.split('');
  console.log(arrString);
  const encodedString = arrString.map((char, index) => {
    const getCharCode = char.charCodeAt();
    console.log(getCharCode);
    const getShiftedChar = String.fromCharCode(getCharCode+1);
    console.log(getShiftedChar);
    return getShiftedChar;
  });
  console.log(encodedString);
  return encodedString.join('');
}
shiftLetters('abcxyz');

