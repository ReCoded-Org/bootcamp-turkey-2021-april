// Partners: Yeşim Nur Akar && Bilal Awad

const string = "hey gurl, lets javascript together sometime";

// 1st Funciton:
const capitalize = function(string){
  let newStr = string.split(' ');
  let finalStr = "";
  const mapped = newStr.map(arr => {
    return finalStr += arr.toUpperCase() + " ";
  });
  return finalStr;
  // return string.toUpperCase(); 
}

console.log(capitalize(string));

// 2nd function:
const swapCase = function(string){
  let newStr = capitalize(string).split(' ');
  let finalStr = "";
  const mapped = newStr.map((arr, index) => {
    if (index % 2 === 0) return finalStr += arr + " ";
    else return finalStr += arr.toLowerCase() + " ";
  });
  return finalStr;
}

console.log(swapCase(string));

// 3rd function.
const shiftLetters = function(string){
  const newStr = string.split("");
  let finalStr = "";
  const mapped = newStr.map(arr => {
    return finalStr += String.fromCharCode(arr.charCodeAt()+1);
  })
  return finalStr;
}

console.log(shiftLetters('hello'));
console.log(shiftLetters('abcxyz'));
