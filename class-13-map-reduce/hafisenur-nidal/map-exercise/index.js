
// 1


function capitalize(string){
let caps = string.map(word => word.toUpperCase())
return caps;
}

console.log(capitalize(["hello"]))


//2

function swapCase(string){
let array = string.split(' ');
const myArray = array
.map((word, index)=> index%2 === 0 ? word.toUpperCase(): word).join(' ') ;
return myArray
}
console.log(swapCase('hey girl, lets javascript together sometime.'))


// 3



const shiftLetters = function(string){

  const array = string.split("");
  let last = "";

  const mapped = array.map(array => {
    return last += String.fromCharCode(array.charCodeAt(0)+1);
  })
  return last;
}


console.log(shiftLetters("sfffv"))