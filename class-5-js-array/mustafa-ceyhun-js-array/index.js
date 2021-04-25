console.log("First")
function reverseCase(string){
  let i = 0;
  let newString = ""
  for (i ; i < string.length; i++){
    if(string[i] == string[i].toLowerCase()){
      newString += string[i].toUpperCase();
    }
    else {
     newString += string[i].toLowerCase();
    } 
    
  }
  return newString
}
console.log(reverseCase("sPoNtAnEoUs"))



console.log("----")
console.log("Second")

function chatroomStatus(stringPa){
  if(stringPa.length == 0){
    return("no one online")
  }
  else if(stringPa.length == 1){
    return(`${stringPa[0]} online`)
  }
  else if(stringPa.length == 2){
    return(`${stringPa[0]} and ${stringPa[1]} online`)
  }
  else{
    const lengthPa = stringPa.length - 2
    return(`${stringPa[0]}, ${stringPa[1]} and ${lengthPa} more online`)
  }
}

console.log(chatroomStatus([]))
console.log(chatroomStatus(["Liz"]))
console.log(chatroomStatus(["Liz", "Ammar"]))
console.log(chatroomStatus(["Liz", "Hakan", "Ammar", "Feras", "Jaime", "Derya"]))