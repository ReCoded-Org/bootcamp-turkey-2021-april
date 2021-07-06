console.log("---------------------Q1---------------------")
const capitalize = function(string){
  return string.toUpperCase();
}

let string4q1 = "obviously"

// const capitalizeee = string.split().map((word ,index) => capitalize(word));
const capitalizeee = string4q1.split().map(capitalize);
console.log(capitalizeee.toString())





console.log("---------------------Q2---------------------")
let string4q2 = 'hey gurl, lets javascript together sometime'

function swapCase(string4q2){
  const strintoarr = string4q2.split(" ");
  let emptyStr = ""
  const test = strintoarr.map(function(arr, index){
    if(index % 2 === 0){
      emptyStr += arr.toLowerCase() + " ";
    }
    else{
      emptyStr += arr.toUpperCase() + " ";
    }    
    return emptyStr
  })
  console.log(emptyStr)
  return emptyStr
}

swapCase(string4q2)





console.log("---------------------Q3---------------------")
const stringQ3 = "abcxyz"


function shiftLetters(string, num = 1){
  const question3toarr = stringQ3.split(" ");
  return question3toarr.map(function(array, index){
    let result = " "
    let charcode = 0
    for(let i = 0; i < stringQ3.length; i++){
      charcode = stringQ3[i].charCodeAt() + num
      result += String.fromCharCode(charcode)
    }
    return result
  })
}

shiftLetters(stringQ3)